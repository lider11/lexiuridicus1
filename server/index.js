import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Prisma 7 + PostgreSQL adapter
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====================== RUTA PRINCIPAL ======================
app.get('/', (req, res) => {
    res.send('<h1>🚀 Servidor LEXIURIDICUS - Prisma 7 + Nodemailer</h1>');
});

// ====================== CONTACTO ======================
app.post('/api/contacto', async (req, res) => {
    const { nombre, email, telefono, servicio, otroServicio, mensaje } = req.body;

    const serviceName = servicio === 'otro' ? (otroServicio || 'Otro') : servicio;

    console.log('📧 Datos recibidos:', req.body);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
        console.error('❌ Faltan credenciales en .env');
        return res.status(500).json({
            success: false,
            message: 'Faltan credenciales en .env',
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: `"LEXIURIDICUS" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo contacto - ${serviceName}`,
            html: `
        <h2>Nuevo mensaje desde LEXIURIDICUS</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${serviceName}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email enviado correctamente. Message ID:', info.messageId);
        res.json({ success: true, message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('❌ Error al enviar email:', error);
        res.status(500).json({
            success: false,
            message: 'Error al enviar el email',
            error: error.message,
        });
    }
});

// ====================== BLOG ROUTES ======================

// Obtener todos los posts publicados
app.get('/api/blog', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                image: true,
                category: true,
                author: true,
                createdAt: true,
            },
        });

        res.json(posts);
    } catch (error) {
        console.error('Error al obtener posts:', error);
        res.status(500).json({
            error: 'Error al obtener los posts',
            detail: error.message,
        });
    }
});

// Obtener un post por slug
app.get('/api/blog/:slug', async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: { slug: req.params.slug },
        });

        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        res.json(post);
    } catch (error) {
        console.error('Error al obtener post:', error);
        res.status(500).json({
            error: 'Error al obtener el post',
            detail: error.message,
        });
    }
});

// ====================== CIERRE ORDENADO ======================
const shutdown = async () => {
    try {
        await prisma.$disconnect();
        console.log('🔌 Prisma desconectado correctamente');
    } catch (error) {
        console.error('Error al desconectar Prisma:', error);
    } finally {
        process.exit(0);
    }
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

app.listen(PORT, () => {
    console.log(`✅ Servidor LEXIURIDICUS corriendo en http://localhost:${PORT}`);
    console.log('📧 Nodemailer configurado');
    console.log('📊 Prisma 7 conectado correctamente');
});