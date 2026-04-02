import "dotenv/config";
import express from "express";
import cors from "cors";
import { Pool } from "pg";
import nodemailer from "nodemailer";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.DATABASE_URL) {
    console.error("❌ Falta DATABASE_URL en .env");
    process.exit(1);
}
if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error("❌ Faltan EMAIL_USER o EMAIL_APP_PASSWORD en .env");
    process.exit(1);
}

// ======================
// DATABASE + PRISMA
// ======================
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ======================
// NODEMAILER
// ======================
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ ok: true, message: "Servidor LEXIURIDICUS funcionando" });
});

// Prueba SMTP
app.get("/api/mail-test", async (req, res) => {
    try {
        await transporter.verify();
        res.json({ ok: true, message: "✅ SMTP listo" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error.message });
    }
});

// Formulario de contacto
app.post("/api/contact", async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, mensaje } = req.body;
        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ ok: false, error: "Nombre, email y mensaje son obligatorios" });
        }

        const html = `
      <h2>Nuevo contacto desde LEXIURIDICUS</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
      <p><strong>Servicio:</strong> ${servicio || "No especificado"}</p>
      <hr>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, '<br>')}</p>
    `;

        await transporter.sendMail({
            from: `"LEXIURIDICUS" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo contacto - ${nombre}`,
            html,
        });

        res.json({ ok: true, message: "Correo enviado correctamente" });
    } catch (error) {
        console.error("Error correo:", error);
        res.status(500).json({ ok: false, error: "Error al enviar correo" });
    }
});

// ======================
// BLOG
// ======================
app.get("/api/blog", async (req, res) => {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
    });
    res.json(posts);
});

app.get("/api/blog/:slug", async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { slug: req.params.slug },
        include: {
            comments: {
                where: { approved: true },
                orderBy: { createdAt: "desc" }
            }
        }
    });

    if (!post) return res.status(404).json({ ok: false, error: "Artículo no encontrado" });

    res.json(post);
});

// ======================
// COMENTARIOS (CORREGIDO Y CON LOGS)
// ======================
app.post("/api/blog/:slug/comments", async (req, res) => {
    try {
        const { slug } = req.params;
        const { author, email, content } = req.body;

        console.log(`[COMENTARIO] Recibido para slug: "${slug}"`);
        console.log(`[COMENTARIO] Datos:`, { author, email, content });

        if (!author || !email || !content) {
            return res.status(400).json({ ok: false, error: "author, email y content son obligatorios" });
        }

        const post = await prisma.post.findUnique({
            where: { slug },
            select: { id: true }
        });

        if (!post) {
            console.log(`[COMENTARIO] ❌ Artículo NO encontrado con slug: ${slug}`);
            return res.status(404).json({ ok: false, error: `Artículo no encontrado con slug: ${slug}` });
        }

        console.log(`[COMENTARIO] ✅ Artículo encontrado (ID: ${post.id})`);

        const comment = await prisma.comment.create({
            data: {
                postId: post.id,
                author: author.trim(),
                email: email.trim().toLowerCase(),
                content: content.trim(),
                approved: false
            }
        });

        console.log(`[COMENTARIO] ✅ Comentario creado (ID: ${comment.id})`);

        res.status(201).json({
            ok: true,
            message: "Comentario enviado correctamente. Será revisado."
        });

    } catch (error) {
        console.error("[COMENTARIO] Error:", error);
        res.status(500).json({ ok: false, error: "Error interno del servidor" });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    await pool.end();
});