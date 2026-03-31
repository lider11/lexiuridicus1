import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AsesoriaImagen = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-28"
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.6 }}
                        animate={{ scale: 1 }}
                        className="text-7xl mb-6"
                    >
                        ✨
                    </motion.div>
                    <h1 className="text-5xl font-serif mb-4">Asesoría en Imagen Corporativa</h1>
                    <p className="text-xl max-w-2xl mx-auto">Branding jurídico, protección de reputación y comunicación estratégica para empresas.</p>
                </div>
            </motion.div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-semibold text-primary mb-8">Servicios Incluidos</h2>
                        <ul className="space-y-6">
                            {[
                                "Estrategia de branding jurídico",
                                "Gestión y protección de reputación corporativa",
                                "Comunicación de crisis legal",
                                "Protección de imagen ante stakeholders",
                                "Asesoría en relaciones públicas legales",
                                "Elaboración de protocolos de imagen",
                                "Capacitación directiva en comunicación"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-4 text-lg"
                                >
                                    <span className="text-emerald-500 mt-1 text-2xl">✓</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-primary mb-8">Nuestro Enfoque</h2>
                        <div className="space-y-8">
                            {[
                                "Diagnóstico de percepción actual de la empresa",
                                "Diseño de estrategia de imagen corporativa",
                                "Implementación de protocolos de comunicación",
                                "Monitoreo y gestión de reputación",
                                "Asesoría continua en casos de crisis"
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="flex gap-6"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <p className="text-lg">{step}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Link
                        to="/contacto"
                        className="inline-block bg-primary text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all"
                    >
                        Solicitar este servicio →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AsesoriaImagen;