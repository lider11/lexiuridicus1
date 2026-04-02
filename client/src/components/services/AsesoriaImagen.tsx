import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AsesoriaImagen = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-[#0A2540] text-white py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-8xl mb-8"
                    >
                        ✨
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-6">
                        Asesoría en Imagen Corporativa
                    </h1>
                    <p className="text-2xl text-amber-100 max-w-3xl mx-auto">
                        Branding jurídico, protección de reputación y comunicación estratégica para fortalecer
                        la imagen y valor de tu empresa.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Introducción */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        En un mundo donde la percepción lo es todo, la imagen corporativa se ha convertido en uno de los activos más valiosos de cualquier empresa.
                        Una crisis reputacional mal manejada puede destruir años de esfuerzo en cuestión de horas.
                    </p>
                </div>

                {/* Servicios Incluidos */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">Servicios que ofrecemos</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Estrategia integral de branding jurídico",
                            "Gestión y monitoreo de reputación corporativa",
                            "Diseño y ejecución de planes de comunicación de crisis",
                            "Protección de imagen ante medios, stakeholders y redes sociales",
                            "Elaboración de protocolos de imagen y manuales de comunicación",
                            "Capacitación a directivos en manejo de imagen y entrevistas",
                            "Asesoría en posicionamiento institucional y reputacional",
                            "Auditoría de percepción y diagnóstico de riesgos reputacionales"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-5 bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
                            >
                                <span className="text-3xl text-amber-500 mt-1 flex-shrink-0">✦</span>
                                <span className="text-lg text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Enfoque Estratégico */}
                <div className="bg-white rounded-3xl p-12 md:p-16 mb-20 shadow-xl">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">Nuestro Enfoque</h2>
                    <div className="space-y-10">
                        {[
                            "Diagnóstico profundo de la percepción actual de la empresa",
                            "Diseño de estrategia de imagen alineada con los objetivos corporativos",
                            "Implementación de protocolos claros de comunicación",
                            "Monitoreo continuo y gestión proactiva de riesgos reputacionales",
                            "Asesoría inmediata en situaciones de crisis"
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700">{step}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center">
                    <h3 className="text-4xl font-serif text-[#0A2540] mb-6">
                        Protege y fortalece la imagen de tu empresa
                    </h3>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        No esperes a una crisis. Construyamos una estrategia de imagen sólida desde ahora.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-16 py-6 rounded-2xl font-semibold text-xl transition-all"
                    >
                        Iniciar estrategia de imagen corporativa →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AsesoriaImagen;