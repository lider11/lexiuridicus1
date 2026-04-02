import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Servicios = () => {
    const servicios = [
        {
            id: "tradicion-acciones",
            title: "Tradición de Acciones",
            icon: "📜",
            description: "Cesión, transferencia y formalización legal de acciones. Garantizamos operaciones seguras y libres de conflictos futuros.",
            path: "/servicios/tradicion-acciones",
            color: "from-blue-600 to-indigo-600"
        },
        {
            id: "gobierno-corporativo",
            title: "Gobierno Corporativo",
            icon: "🏛️",
            description: "Elaboración y actualización de estatutos, juntas directivas, cumplimiento normativo y mejores prácticas de gobernanza.",
            path: "/servicios/gobierno-corporativo",
            color: "from-emerald-600 to-teal-600"
        },
        {
            id: "asesoria-imagen-corporativa",
            title: "Asesoría en Imagen Corporativa",
            icon: "🛡️",
            description: "Branding jurídico, gestión de reputación, comunicación corporativa y protección legal de la imagen institucional.",
            path: "/servicios/asesoria-imagen-corporativa",
            color: "from-amber-600 to-orange-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-[#0A2540] mb-6"
                    >
                        Nuestros Servicios
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Soluciones jurídicas especializadas diseñadas para fortalecer el gobierno corporativo
                        y proteger la imagen de su empresa.
                    </p>
                </div>

                {/* Cards de Servicios */}
                <div className="grid md:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={servicio.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden group"
                        >
                            <div className={`h-2 bg-gradient-to-r ${servicio.color}`} />

                            <div className="p-10">
                                <div className="text-6xl mb-6">{servicio.icon}</div>

                                <h3 className="text-3xl font-serif font-semibold text-[#0A2540] mb-4">
                                    {servicio.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-8 min-h-[100px]">
                                    {servicio.description}
                                </p>

                                <Link
                                    to={servicio.path}
                                    className="inline-flex items-center gap-3 text-[#0A2540] font-semibold group-hover:gap-5 transition-all duration-300"
                                >
                                    Conocer más
                                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Final */}
                <div className="mt-20 text-center">
                    <p className="text-xl text-gray-600 mb-8">
                        ¿Necesita asesoría especializada en alguno de estos servicios?
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0A2540] text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-[#0A2540]/90 transition-all"
                    >
                        Agenda una consulta gratuita
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Servicios;