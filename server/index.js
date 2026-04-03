require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS avanzado
const allowedOrigins = [
    "https://limegreen-mantis-572477.hostingersite.com",
    "https://steelblue-echidna-352094.hostingersite.com",
    "http://localhost:5173",
    "http://localhost:4173",
    "http://127.0.0.1:5173"
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        console.log(`❌ CORS bloqueado: ${origin}`);
        return callback(new Error('Not allowed by CORS'));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pool MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Rutas
app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Backend funcionando' });
});

app.post('/api/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ ok: false, message: 'Nombre, email y mensaje son obligatorios' });
        }

        await pool.query(
            'INSERT INTO contactos (nombre, email, telefono, servicio, mensaje) VALUES (?, ?, ?, ?, ?)',
            [nombre, email, telefono || null, servicio || 'General', mensaje]
        );

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            }
        });

        await transporter.sendMail({
            from: `"LEXIURIDICUS" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo contacto - ${servicio || 'General'}`,
            html: `
        <h2>Nuevo mensaje desde LEXIURIDICUS</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Servicio:</strong> ${servicio || 'General'}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
        });

        console.log(`✅ Mensaje guardado de: ${nombre}`);
        res.json({ ok: true, message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ ok: false, message: 'Error al procesar el mensaje' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});