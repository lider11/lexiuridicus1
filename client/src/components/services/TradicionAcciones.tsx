import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TradicionAcciones = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Estilo premium */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white py-28 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_70%)]" />

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.5, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        className="text-8xl mb-8 inline-block"
                    >
                        📋
                    </motion.div>

                    <h1 className="text-6xl font-serif font-bold mb-6 tracking-tight">
                        Tradición de Acciones
                    </h1>
                    <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                        Cesión, transferencia y formalización legal de acciones con total seguridad jurídica,
                        transparencia y cumplimiento registral.
                    </p>
                </div>
            </motion.div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-12 gap-16">
                    {/* Columna izquierda - Contenido principal */}
                    <div className="md:col-span-7">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl font-semibold text-primary mb-10"
                        >
                            ¿Qué incluye nuestro servicio?
                        </motion.h2>

                        <div className="space-y-10">
                            {[
                                "Cesión y transferencia de acciones entre socios o terceros",
                                "Elaboración y revisión de contratos de cesión",
                                "Formalización notarial de la operación",
                                "Inscripción en el Registro Mercantil y actualización de libros",
                                "Due diligence completo de los títulos valores",
                                "Resolución de conflictos accionarios y disputas societarias",
                                "Asesoría en valoración económica de las acciones",
                                "Actualización del libro de socios y registro de accionistas"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex gap-5"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                        ✓
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Columna derecha - Proceso */}
                    <div className="md:col-span-5">
                        <div className="sticky top-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl font-semibold text-primary mb-10"
                            >
                                Nuestro Proceso
                            </motion.h2>

                            <div className="space-y-10">
                                {[
                                    "Análisis detallado de la situación accionaria y documentación actual",
                                    "Preparación de contratos, minutas y documentación legal requerida",
                                    "Revisión y formalización ante notario público",
                                    "Gestión de inscripción en el Registro Mercantil",
                                    "Actualización final de libros societarios y entrega de títulos"
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium text-lg text-gray-800">{step}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16">
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white py-4 px-10 rounded-2xl font-semibold text-lg transition-all"
                                >
                                    Solicitar este servicio →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradicionAcciones;