import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TradicionAcciones = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#0A2540] text-white py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-8xl mb-8"
                    >
                        📜
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-6">
                        Tradición de Acciones
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Cesión, transferencia y formalización legal de acciones con máxima seguridad jurídica
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Introducción */}
                <div className="prose prose-lg max-w-none mb-20">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        La tradición de acciones es uno de los procedimientos societarios más importantes y frecuentes en el derecho corporativo colombiano.
                        Una cesión mal estructurada puede generar graves consecuencias fiscales, societarias y patrimoniales.
                    </p>
                </div>

                {/* Servicios Incluidos */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">¿Qué incluye nuestro servicio?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Análisis y revisión de títulos de acciones",
                            "Elaboración de contratos de cesión y transferencia",
                            "Formalización ante notario y registro mercantil",
                            "Asesoría en aspectos tributarios de la operación",
                            "Verificación de derechos de preferencia",
                            "Actualización del libro de accionistas",
                            "Gestión de protocolización y registro",
                            "Asesoría en cesiones internacionales"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-4 bg-white p-8 rounded-3xl shadow-sm"
                            >
                                <span className="text-2xl text-emerald-500 mt-1">✓</span>
                                <span className="text-lg text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Beneficios */}
                <div className="bg-white rounded-3xl p-12 md:p-16 mb-20 shadow-xl">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-10 text-center">¿Por qué trabajar con nosotros?</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Seguridad Total", desc: "Evitamos riesgos de nulidad o conflictos futuros" },
                            { title: "Eficiencia", desc: "Procesos ágiles con plazos claros y controlados" },
                            { title: "Experiencia", desc: "Más de 12 años asesorando operaciones societarias complejas" }
                        ].map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl mb-4">🛡️</div>
                                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-3xl font-serif text-[#0A2540] mb-6">
                        ¿Necesitas formalizar una cesión de acciones?
                    </h3>
                    <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
                        Contáctanos hoy y recibe asesoría especializada en menos de 24 horas.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0A2540] text-white px-14 py-5 rounded-2xl font-semibold text-lg hover:bg-[#0A2540]/90 transition-all"
                    >
                        Solicitar asesoría en Tradición de Acciones →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TradicionAcciones;