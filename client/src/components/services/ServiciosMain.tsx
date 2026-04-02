import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiciosMain: React.FC = () => {
    const services = [
        {
            title: "Tradición de Acciones",
            description: "Cesión, transferencia y formalización legal de acciones con total seguridad jurídica.",
            icon: "📜",
            link: "/servicios/tradicion-acciones",
            color: "from-blue-600 to-blue-700"
        },
        {
            title: "Gobierno Corporativo",
            description: "Estatutos sociales, juntas directivas, cumplimiento normativo y buena gobernanza.",
            icon: "🏛️",
            link: "/servicios/gobierno-corporativo",
            color: "from-emerald-600 to-emerald-700"
        },
        {
            title: "Asesoría en Imagen Corporativa",
            description: "Protección reputacional, branding jurídico y gestión estratégica de comunicación.",
            icon: "🛡️",
            link: "/servicios/asesoria-imagen-corporativa",
            color: "from-amber-600 to-amber-700"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Servicios | LEXIURIDICUS Abogados Corporativos Bogotá</title>
                <meta
                    name="description"
                    content="Servicios especializados en Tradición de Acciones, Gobierno Corporativo y Asesoría en Imagen Corporativa. Soluciones legales estratégicas para empresas en Colombia."
                />
                <meta
                    name="keywords"
                    content="tradición de acciones, gobierno corporativo, imagen corporativa, abogados societarios, derecho empresarial colombia"
                />
                <meta property="og:title" content="Servicios - LEXIURIDICUS Abogados Corporativos" />
                <meta property="og:description" content="Protección y crecimiento estratégico de tu empresa." />
            </Helmet>

            {/* Hero */}
            <div className="bg-[#0A2540] text-white py-28" role="banner" aria-labelledby="servicios-hero-title">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 id="servicios-hero-title" className="text-6xl font-serif font-bold mb-6">Nuestros Servicios</h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Soluciones jurídicas especializadas que protegen y potencian el crecimiento de tu empresa
                    </p>
                </div>
            </div>

            {/* Servicios Grid - Accesible */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full"
                            role="article"
                        >
                            <div className={`h-3 bg-gradient-to-r ${service.color}`} aria-hidden="true" />

                            <div className="p-10 flex flex-col flex-1">
                                <div className="text-6xl mb-8" aria-hidden="true">{service.icon}</div>

                                <h2 className="text-3xl font-semibold text-[#0A2540] mb-5 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-10 flex-1">
                                    {service.description}
                                </p>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center text-[#0A2540] font-medium group-hover:gap-3 transition-all mt-auto"
                                    aria-label={`Conocer más sobre ${service.title}`}
                                >
                                    Conocer más
                                    <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-2xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-6">¿Necesitas asesoría especializada?</h2>
                    <p className="text-lg text-gray-600 mb-10">Agenda una consulta estratégica sin costo con nuestro equipo.</p>

                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0A2540] text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-[#0A2540]/90 transition-all"
                        aria-label="Solicitar consulta gratuita"
                    >
                        Solicitar consulta gratuita
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServiciosMain;