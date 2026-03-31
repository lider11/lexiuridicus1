const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
    <h1>🚀 Servidor de LEXIURIDICUS - Nodemailer</h1>
    <p>Backend funcionando correctamente con Gmail</p>
  `);
});

// Ruta para el formulario de contacto
app.post('/api/contacto', async (req, res) => {
    const { nombre, email, telefono, servicio, otroServicio, mensaje } = req.body;

    const serviceName = servicio === 'otro' ? (otroServicio || 'Otro') : servicio;

    console.log('📧 Datos recibidos:', req.body);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
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
        <br>
        <small>Enviado desde el formulario del sitio web LEXIURIDICUS</small>
      `,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email enviado correctamente. Message ID:', info.messageId);

        res.json({ success: true, message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('❌ Error al enviar el email:', error);
        res.status(500).json({
            success: false,
            message: 'Error al enviar el email',
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📧 Nodemailer configurado con Gmail`);
});