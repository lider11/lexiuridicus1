import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GobiernoCorporativo = () => {
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
                        🏛️
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-6">
                        Gobierno Corporativo
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Estatutos sociales, juntas directivas y cumplimiento normativo para empresas sólidas y bien gobernadas
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Introducción */}
                <div className="prose prose-lg max-w-none mb-20 text-center">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        En un entorno regulatorio cada vez más exigente, contar con un sólido gobierno corporativo
                        no es opcional: es una necesidad estratégica que protege a la empresa, sus socios y directivos.
                    </p>
                </div>

                {/* Servicios Incluidos */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">
                        Servicios que ofrecemos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Elaboración, revisión y actualización de estatutos sociales",
                            "Convocatoria, preparación y actas de juntas de socios y asambleas",
                            "Diseño e implementación de manuales de gobierno corporativo",
                            "Asesoría en estructura de órganos de administración y control",
                            "Cumplimiento normativo (Superintendencia de Sociedades, Cámara de Comercio, etc.)",
                            "Protocolos de conflictos de interés y responsabilidad de administradores",
                            "Secretaría técnica de juntas y comités",
                            "Diagnóstico y mejora continua del gobierno corporativo"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-start gap-5 bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="text-3xl text-emerald-500 mt-1 flex-shrink-0">✓</span>
                                <span className="text-lg text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Beneficios Clave */}
                <div className="bg-white rounded-3xl p-12 md:p-16 mb-20 shadow-xl">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">
                        Beneficios de un buen Gobierno Corporativo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: "🛡️",
                                title: "Protección Legal",
                                desc: "Reduce riesgos de sanciones y responsabilidad de administradores"
                            },
                            {
                                icon: "📈",
                                title: "Atracción de Inversión",
                                desc: "Mejora la confianza de inversionistas y socios estratégicos"
                            },
                            {
                                icon: "🔄",
                                title: "Eficiencia Operativa",
                                desc: "Decisiones más ágiles y procesos internos más claros"
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-6xl mb-6">{benefit.icon}</div>
                                <h3 className="font-semibold text-2xl mb-4 text-[#0A2540]">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center bg-gradient-to-br from-[#0A2540] to-blue-950 text-white rounded-3xl p-16">
                    <h3 className="text-4xl font-serif mb-6">
                        ¿Tus estatutos sociales están actualizados?
                    </h3>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Muchas empresas enfrentan problemas graves por tener documentos desactualizados.
                        Realicemos un diagnóstico sin costo.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-white text-[#0A2540] hover:bg-gray-100 font-semibold px-16 py-6 rounded-2xl text-xl transition-all"
                    >
                        Solicitar diagnóstico de Gobierno Corporativo →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GobiernoCorporativo;