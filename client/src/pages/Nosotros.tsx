import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const values = [
    {
        title: "Excelencia Jurídica",
        desc: "Compromiso con la más alta calidad técnica y ética profesional.",
        icon: "⚖️"
    },
    {
        title: "Confidencialidad",
        desc: "Protección absoluta de la información de nuestros clientes.",
        icon: "🔒"
    },
    {
        title: "Enfoque Estratégico",
        desc: "Soluciones preventivas y estratégicas, no solo reactivas.",
        icon: "🎯"
    },
    {
        title: "Proximidad",
        desc: "Relación cercana, personalizada y de confianza con cada cliente.",
        icon: "🤝"
    }
];

const Nosotros = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-24 md:py-32"
            >
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-6 text-7xl"
                    >
                        👨‍💼
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Sobre LEXIURIDICUS</h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                        Firma especializada en derecho corporativo con más de 12 años de experiencia
                        acompañando a empresas en su crecimiento y gobernanza.
                    </p>
                </div>
            </motion.div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-3xl font-semibold text-primary mb-6">Nuestra Misión</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Proporcionar asesoría jurídica de excelencia en derecho corporativo,
                            ayudando a las empresas a crecer de forma segura, cumpliendo con la normativa
                            y protegiendo sus intereses estratégicos.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-3xl font-semibold text-primary mb-6">Nuestra Visión</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Ser reconocidos como la firma de referencia en gobierno corporativo y
                            derecho societario en Colombia, caracterizada por su rigor técnico,
                            ética profesional y cercanía con el cliente.
                        </p>
                    </motion.div>
                </div>

                {/* Valores */}
                <div className="mb-20">
                    <h2 className="text-4xl font-serif text-center text-primary mb-12">Nuestros Valores</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-3xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Historia breve - Versión mejorada */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20"
                >
                    <div className="grid md:grid-cols-5">
                        {/* Columna izquierda - Icono grande */}
                        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-blue-950 p-12 flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="text-center"
                            >
                                <div className="text-8xl mb-6">📜</div>
                                <div className="text-5xl font-serif text-white font-light tracking-wider">12+</div>
                                <p className="text-blue-200 text-sm uppercase tracking-widest mt-2">Años de experiencia</p>
                            </motion.div>
                        </div>

                        {/* Columna derecha - Texto */}
                        <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
                            <h2 className="text-4xl font-serif text-primary mb-8">Más de 12 años de experiencia</h2>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                LEXIURIDICUS nació con la convicción de que el derecho corporativo debe ser un aliado estratégico
                                para el crecimiento sostenible de las empresas.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed mt-6">
                                Desde entonces, hemos acompañado a decenas de sociedades en su estructuración, gobernanza y
                                operaciones diarias, siempre con un enfoque preventivo, riguroso y orientado a resultados concretos.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">●</span>
                                    <span>Fundada en 2013</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-500">●</span>
                                    <span>+50 empresas asesoradas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Final */}
                <div className="text-center">
                    <p className="text-gray-600 mb-6 text-lg">¿Quieres conocer más sobre nuestra firma?</p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-primary text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all active:scale-95"
                    >
                        Contáctenos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;