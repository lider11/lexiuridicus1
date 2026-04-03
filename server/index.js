require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for Hostinger
app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MySQL Connection Pool
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

// Test route
app.get('/', (req, res) => {
    res.json({
        ok: true,
        message: '🚀 Backend LEXIURIDICUS funcionando correctamente en Hostinger'
    });
});

// Contact form route
app.post('/api/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({
                ok: false,
                message: 'Nombre, email y mensaje son obligatorios'
            });
        }

        // Save to database
        await pool.query(
            'INSERT INTO contactos (nombre, email, telefono, servicio, mensaje) VALUES (?, ?, ?, ?, ?)',
            [nombre, email, telefono || null, servicio || 'General', mensaje]
        );

        // Send email
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
        <br>
        <small>Enviado: ${new Date().toLocaleString('es-CO')}</small>
      `
        });

        console.log(`✅ Mensaje recibido y enviado de: ${nombre} (${email})`);
        res.json({ ok: true, message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('Error en /api/contacto:', error);
        res.status(500).json({
            ok: false,
            message: 'Error al procesar el mensaje. Inténtalo más tarde.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor LEXIURIDICUS corriendo en puerto ${PORT}`);
});