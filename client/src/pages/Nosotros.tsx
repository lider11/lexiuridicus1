import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#0A2540] text-white py-28 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6">
                            LEXIURIDICUS
                        </h1>
                        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                            Más de 15 años de experiencia especializada en derecho societario,
                            gobierno corporativo y estrategia de imagen jurídica.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Misión y Visión */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-4xl font-serif text-[#0A2540] mb-6">Nuestra Misión</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Brindar asesoría jurídica estratégica de alto nivel que permita a las empresas
                            tomar decisiones con total seguridad jurídica, fortaleciendo su gobierno corporativo
                            y protegiendo su reputación institucional en un entorno cada vez más exigente.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-4xl font-serif text-[#0A2540] mb-6">Nuestra Visión</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Ser el despacho jurídico de referencia en Colombia para empresas que buscan
                            no solo cumplir con la norma, sino liderar con ética, transparencia y excelencia
                            en el manejo societario y la construcción de una sólida imagen corporativa.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Valores */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-5xl font-serif text-center text-[#0A2540] mb-16">Nuestros Valores</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: "⚖️", title: "Excelencia Jurídica", desc: "Compromiso con la más alta calidad técnica y atención personalizada." },
                            { icon: "🛡️", title: "Integridad", desc: "Actuamos siempre con ética, transparencia y honestidad intelectual." },
                            { icon: "🔄", title: "Innovación", desc: "Combinamos tradición jurídica con soluciones modernas y estratégicas." },
                            { icon: "🔒", title: "Confidencialidad", desc: "La protección absoluta de la información de nuestros clientes es sagrada." },
                            { icon: "📈", title: "Proactividad", desc: "Anticipamos riesgos y ofrecemos soluciones preventivas." },
                            { icon: "🤝", title: "Orientación al Cliente", desc: "El éxito y la tranquilidad de nuestros clientes es nuestro principal objetivo." }
                        ].map((valor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center bg-gray-50 p-10 rounded-3xl hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-5xl mb-6">{valor.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">{valor.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{valor.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trayectoria */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&fit=crop&w=1200&q=80"
                            alt="Equipo LEXIURIDICUS trabajando"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-serif text-[#0A2540] mb-6">Experiencia que inspira confianza</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Durante más de 15 años hemos acompañado a empresas colombianas en su crecimiento,
                                protegiendo sus intereses societarios y fortaleciendo su imagen corporativa.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-[#0A2540]">15+</div>
                                <div className="text-sm text-gray-500 mt-2">Años de experiencia</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#0A2540]">80+</div>
                                <div className="text-sm text-gray-500 mt-2">Empresas asesoradas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-[#0A2540] text-white py-24 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-serif mb-6">¿Listo para fortalecer el futuro de tu empresa?</h2>
                    <p className="text-xl mb-10">Agenda una consulta estratégica sin compromiso con nuestro equipo.</p>

                    <Link
                        to="/contacto"
                        className="inline-block bg-white text-[#0A2540] px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all"
                    >
                        Agenda tu consulta ahora
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;