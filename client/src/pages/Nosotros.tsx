import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nosotros: React.FC = () => {
    const values = [
        {
            icon: "⚖️",
            title: "Excelencia Jurídica",
            desc: "Asesoría de alto nivel con más de 15 años de experiencia en derecho societario."
        },
        {
            icon: "🔒",
            title: "Confidencialidad Total",
            desc: "Protegemos la información de nuestros clientes con los más altos estándares éticos y legales."
        },
        {
            icon: "📈",
            title: "Enfoque Estratégico",
            desc: "No solo resolvemos problemas, diseñamos soluciones que impulsan el crecimiento de tu empresa."
        },
        {
            icon: "🤝",
            title: "Relación de Confianza",
            desc: "Construimos relaciones a largo plazo basadas en transparencia y resultados concretos."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[620px] bg-[#0A2540] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#1e3a8a_0%,transparent_70%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6"
                        >
                            Conocemos el derecho.<br />
                            Entendemos tu empresa.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                        >
                            Somos LEXIURIDICUS, un equipo de abogados corporativos especializados en proteger y hacer crecer tu empresa.
                        </motion.p>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white text-sm flex flex-col items-center"
                    >
                        Conócenos
                        <span className="text-2xl mt-2">↓</span>
                    </motion.div>
                </div>
            </div>

            {/* Quiénes Somos */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-serif text-[#0A2540] mb-8">Más que abogados,<br />socios estratégicos</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Fundada con la visión de ofrecer un servicio jurídico de excelencia para empresas colombianas,
                                LEXIURIDICUS combina conocimiento profundo del derecho societario con una comprensión real de los desafíos del mundo empresarial.
                            </p>
                            <p>
                                No solo redactamos documentos. Diseñamos estrategias legales que protegen tu patrimonio,
                                optimizan tu estructura corporativa y te permiten crecer con seguridad.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                        <div className="text-6xl mb-6">📍</div>
                        <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Nuestra sede</h3>
                        <p className="text-gray-600">Barranquilla, Colombia</p>
                        <p className="text-sm text-gray-500 mt-8">Más de 15 años acompañando a empresas en su consolidación y expansión.</p>
                    </div>
                </div>
            </div>

            {/* Valores */}
            <div className="bg-white py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-serif text-[#0A2540]">Nuestros Valores</h2>
                        <p className="text-xl text-gray-600 mt-4">Lo que nos define como firma</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 p-10 rounded-3xl hover:shadow-xl transition-all group"
                            >
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{value.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-[#0A2540] text-white py-28">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-serif mb-8">¿Listo para proteger y hacer crecer tu empresa?</h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Agenda una consulta estratégica sin costo. Nuestro equipo te acompañará desde el primer momento.
                    </p>

                    <Link
                        to="/contacto"
                        className="inline-block bg-white text-[#0A2540] hover:bg-amber-400 hover:text-white px-12 py-5 rounded-2xl font-semibold text-xl transition-all duration-300"
                    >
                        Agenda tu consulta gratuita
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;