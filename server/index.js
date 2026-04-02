import "dotenv/config";
import express from "express";
import cors from "cors";
import { Pool } from "pg";
import nodemailer from "nodemailer";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;

// Verificación de variables de entorno
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
// ======================
// NODEMAILER (con fix para certificado)
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false   // Solo para desarrollo - seguro para pruebas
    }
});

app.use(cors());
app.use(express.json());

// Ruta básica
app.get("/", (req, res) => {
    res.json({ ok: true, message: "Servidor LEXIURIDICUS funcionando correctamente" });
});

// Prueba de correo
app.get("/api/mail-test", async (req, res) => {
    try {
        await transporter.verify();
        res.json({
            ok: true,
            message: "✅ SMTP de Gmail listo para enviar correos"
        });
    } catch (error) {
        console.error("Error SMTP:", error);
        res.status(500).json({
            ok: false,
            message: "SMTP no funciona",
            details: error.message
        });
    }
});

// Formulario de contacto
app.post("/api/contact", async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({
                ok: false,
                error: "Nombre, email y mensaje son obligatorios"
            });
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
        console.error("Error enviando correo:", error);
        res.status(500).json({
            ok: false,
            error: "Error al enviar el correo"
        });
    }
});

// Rutas del Blog (mínimas para no romper nada)
app.get("/api/blog", async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: { published: true },
            orderBy: { createdAt: "desc" },
        });
        res.json(posts);
    } catch (error) {
        console.error("Error posts:", error);
        res.status(500).json({ ok: false, error: "Error al cargar posts" });
    }
});

app.get("/api/blog/:slug", async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: { slug: req.params.slug },
            include: { comments: { where: { approved: true } } }
        });

        if (!post) return res.status(404).json({ ok: false, error: "Artículo no encontrado" });

        res.json(post);
    } catch (error) {
        console.error("Error post:", error);
        res.status(500).json({ ok: false, error: "Error al cargar artículo" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Servidor LEXIURIDICUS corriendo en http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    await pool.end();
});