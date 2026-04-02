import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiciosMain = () => {
    const services = [
        {
            id: 'tradicion-acciones',
            title: 'Tradición de Acciones',
            icon: '📋',
            description: 'Cesión, transferencia y formalización legal de acciones societarias con total seguridad jurídica.',
            path: '/servicios/tradicion-acciones',
            accent: 'from-amber-500 to-yellow-600'
        },
        {
            id: 'gobierno-corporativo',
            title: 'Gobierno Corporativo',
            icon: '🏛️',
            description: 'Estatutos sociales, juntas directivas, cumplimiento normativo y mejores prácticas de gobernanza.',
            path: '/servicios/gobierno-corporativo',
            accent: 'from-blue-600 to-[#0A2540]'
        },
        {
            id: 'asesoria-imagen-corporativa',
            title: 'Asesoría en Imagen Corporativa',
            icon: '✨',
            description: 'Branding jurídico, protección de reputación y estrategias de comunicación estratégica.',
            path: '/servicios/asesoria-imagen-corporativa',
            accent: 'from-emerald-600 to-teal-700'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#0A2540] text-white py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-6"
                    >
                        Nuestros Servicios
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Soluciones jurídicas especializadas con excelencia, experiencia y enfoque estratégico
                    </motion.p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:border-[#0A2540]/30 h-full flex flex-col"
                        >
                            {/* Top Accent Bar */}
                            <div className={`h-3 bg-gradient-to-r ${service.accent}`} />

                            {/* Icon */}
                            <div className="pt-12 pb-8 flex justify-center text-7xl transition-transform group-hover:scale-110 duration-500">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="px-10 pb-12 flex flex-col flex-1">
                                <h3 className="text-3xl font-serif font-semibold text-[#0A2540] mb-6 text-center">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-[17px] leading-relaxed flex-1 text-center">
                                    {service.description}
                                </p>

                                <Link
                                    to={service.path}
                                    className="mt-10 inline-flex items-center justify-center gap-3 bg-[#0A2540] hover:bg-[#0A2540]/90 text-white font-medium py-4 px-10 rounded-2xl transition-all group-hover:gap-4"
                                >
                                    Ver detalle completo
                                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-[#0A2540] py-20 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif mb-6">¿Listo para fortalecer tu empresa?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Agenda una consulta inicial sin costo con nuestros especialistas.
                        La primera reunión es completamente gratuita.
                    </p>

                    <Link
                        to="/contacto"
                        className="inline-block bg-white text-[#0A2540] hover:bg-gray-100 font-semibold px-14 py-5 rounded-2xl text-lg transition-all"
                    >
                        Agenda tu consulta ahora →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiciosMain;