# LEXIURIDICUS

**Firma de Servicios Jurídicos Especializada en Derecho Corporativo**

Sitio web profesional desarrollado con **React + TypeScript + Vite + Tailwind CSS + Express.js**

---

## 🎯 Sobre el Proyecto

Plataforma web moderna, elegante y de alto rendimiento para **LEXIURIDICUS**, firma especializada en:

- **Tradición de Acciones** (cesión, transferencia y formalización legal de acciones)
- **Gobierno Corporativo** (estatutos, juntas, cumplimiento normativo)
- **Asesoría en Imagen Corporativa** (branding jurídico, reputación y comunicación corporativa)

---

## 🛠️ Stack Técnico

### Frontend
- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (próximamente)
- **React Router v6**
- **Framer Motion** (animaciones)
- **React Hook Form + Zod** (formularios)
- **React Helmet Async** (SEO)
- **Axios** (consumo de API)

### Backend
- **Node.js + Express.js**
- **CORS**
- **Nodemailer + Resend** (envío de emails)
- Preparado para **MongoDB + Mongoose**

### Otros
- Mobile-first + Totalmente Responsive
- Accesibilidad WCAG 2.1 AA
- Optimización Lighthouse > 95
- Proxy configurado para desarrollo

---

## 📁 Estructura de Carpetas

```bash
/lexiuridicus
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   └── vite.config.ts
│
├── server/                 # Backend Express
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── index.js
│   └── .env
│
├── README.md
└── package.json (root - scripts combinados)