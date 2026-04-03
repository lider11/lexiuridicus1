require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'https://limegreen-mantis-572477.hostingersite.com',
    'http://localhost:5173',
    'http://localhost:4173',
    'http://127.0.0.1:5173',
    // agrega aquí tu dominio final si usas uno:
    // 'https://tudominio.com',
    // 'https://www.tudominio.com',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        console.log(`CORS bloqueado: ${origin}`);
        return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Backend funcionando' });
});

app.get('/health', (req, res) => {
    res.json({ ok: true });
});

app.post('/api/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({
                ok: false,
                message: 'Nombre, email y mensaje son obligatorios',
            });
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
            },
        });

        await transporter.sendMail({
            from: `"LEXIURIDICUS" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || ''}\nServicio: ${servicio || 'General'}\nMensaje: ${mensaje}`,
        });

        return res.status(200).json({
            ok: true,
            message: 'Mensaje enviado correctamente',
        });
    } catch (error) {
        console.error('Error en /api/contacto:', error);
        return res.status(500).json({
            ok: false,
            message: 'Error al enviar el mensaje',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
