import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
    const stats = [
        { number: "15+", label: "Años de experiencia" },
        { number: "120+", label: "Empresas asesoradas" },
        { number: "98%", label: "Tasa de éxito" },
        { number: "50+", label: "Casos resueltos" },
    ];

    const services = [
        {
            title: "Tradición de Acciones",
            desc: "Cesión, transferencia y formalización legal de acciones con total seguridad jurídica.",
            icon: "📜",
            link: "/servicios/tradicion-acciones"
        },
        {
            title: "Gobierno Corporativo",
            desc: "Estatutos sociales, juntas directivas y cumplimiento normativo integral.",
            icon: "🏛️",
            link: "/servicios/gobierno-corporativo"
        },
        {
            title: "Asesoría en Imagen Corporativa",
            desc: "Protección reputacional, branding jurídico y gestión de crisis comunicativas.",
            icon: "🛡️",
            link: "/servicios/asesoria-imagen-corporativa"
        }
    ];

    return (
        <>
            <Helmet>
                <title>LEXIURIDICUS | Abogados Corporativos en Bogotá</title>
                <meta name="description" content="Firma especializada en Tradición de Acciones, Gobierno Corporativo y Asesoría en Imagen Corporativa. Protección legal estratégica para empresas colombianas." />
                <meta name="keywords" content="abogados corporativos, derecho societario, gobierno corporativo, tradición de acciones, imagen corporativa" />
            </Helmet>

            {/* Hero */}
            <section className="relative min-h-[100dvh] flex items-center bg-[#0A2540] overflow-hidden" aria-labelledby="hero-title">
                <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#1e40af_0%,transparent_60%)]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-3xl">
                        <h1 id="hero-title" className="text-6xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tighter mb-8">
                            Derecho corporativo<br />
                            con visión estratégica
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
                            Asesoría legal de alto nivel en Tradición de Acciones, Gobierno Corporativo y Protección de Imagen Empresarial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                to="/contacto"
                                className="bg-white text-[#0A2540] hover:bg-amber-400 hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all text-center"
                                aria-label="Agenda tu consulta gratuita"
                            >
                                Agenda tu consulta
                            </Link>
                            <Link
                                to="/servicios"
                                className="border border-white/70 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg transition-all text-center"
                                aria-label="Conocer nuestros servicios"
                            >
                                Conocer servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="servicios-title">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 id="servicios-title" className="text-5xl font-serif text-[#0A2540] mb-4">Nuestros Servicios</h2>
                        <p className="text-xl text-gray-600">Soluciones jurídicas especializadas</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group bg-white/95 border border-slate-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-6xl mb-8">{service.icon}</div>
                                <h3 className="text-3xl font-semibold text-[#0A2540] mb-5">{service.title}</h3>
                                <p className="text-gray-600 mb-8">{service.desc}</p>
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center text-[#0A2540] font-medium group-hover:gap-3 transition-all"
                                    aria-label={`Conocer más sobre ${service.title}`}
                                >
                                    Conocer más <span className="text-xl">→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gray-50" aria-labelledby="estadisticas-title">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                aria-label={`${stat.number} ${stat.label}`}
                            >
                                <div className="text-6xl font-bold text-[#0A2540] mb-3">{stat.number}</div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
