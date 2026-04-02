import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Sección de Servicios */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-serif text-[#0A2540] mb-4">Nuestros Servicios</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Soluciones jurídicas especializadas que protegen y fortalecen tu empresa
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Tradición de Acciones", desc: "Cesión y formalización legal segura", icon: "📜", path: "/servicios/tradicion-acciones" },
                            { title: "Gobierno Corporativo", desc: "Estatutos y gobernanza empresarial", icon: "🏛️", path: "/servicios/gobierno-corporativo" },
                            { title: "Imagen Corporativa", desc: "Branding jurídico y protección reputacional", icon: "✨", path: "/servicios/asesoria-imagen-corporativa" }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all"
                            >
                                <div className="text-6xl mb-8">{service.icon}</div>
                                <h3 className="text-3xl font-serif text-[#0A2540] mb-5">{service.title}</h3>
                                <p className="text-gray-600 mb-10">{service.desc}</p>
                                <Link to={service.path} className="text-[#0A2540] font-medium group-hover:underline flex items-center gap-2">
                                    Ver detalle <span>→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/servicios" className="inline-block bg-[#0A2540] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#0A2540]/90">
                            Ver todos los servicios →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Estadísticas Clave */}
            <div className="py-20 bg-white border-t border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {[
                            { number: "12+", label: "Años de experiencia" },
                            { number: "180+", label: "Operaciones societarias" },
                            { number: "95%", label: "Tasa de satisfacción" },
                            { number: "45", label: "Empresas asesoradas" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-6xl md:text-7xl font-serif font-bold text-[#0A2540] mb-2">{stat.number}</div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonios */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-serif text-[#0A2540] mb-4">Lo que dicen nuestros clientes</h2>
                        <p className="text-xl text-gray-600">Confianza construida con resultados reales</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: "Dr. Carlos Mendoza", position: "Gerente General - Grupo Andes", text: "El proceso de cesión de acciones fue impecable y con total seguridad jurídica.", company: "Grupo Andes" },
                            { name: "María Fernanda López", position: "Directora Jurídica - Constructora Horizonte", text: "Actualizamos nuestros estatutos evitando riesgos importantes. Altamente recomendados.", company: "Constructora Horizonte" },
                            { name: "Roberto Vargas", position: "CEO - PharmaTech Colombia", text: "Su apoyo en protección de imagen corporativa fue clave en una situación delicada.", company: "PharmaTech" }
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-3xl p-10 shadow-sm"
                            >
                                <div className="text-4xl mb-6 text-amber-500">“</div>
                                <p className="text-gray-700 italic mb-8">{t.text}</p>
                                <p className="font-semibold text-[#0A2540]">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.position}</p>
                                <p className="text-xs text-amber-600 mt-1">{t.company}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nueva Sección: ¿Por qué elegir LEXIURIDICUS? */}
            <div className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-serif text-[#0A2540] mb-4">¿Por qué elegir LEXIURIDICUS?</h2>
                        <p className="text-xl text-gray-600 max-w-xl mx-auto">
                            Experiencia, rigor y enfoque estratégico que marcan la diferencia
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: "🛡️",
                                title: "Seguridad Jurídica Total",
                                desc: "Procesos blindados que evitan riesgos futuros y protegen el patrimonio de nuestros clientes."
                            },
                            {
                                icon: "🎯",
                                title: "Enfoque Estratégico",
                                desc: "No solo resolvemos problemas legales, sino que alineamos el derecho con los objetivos de negocio de tu empresa."
                            },
                            {
                                icon: "🤝",
                                title: "Relación de Confianza",
                                desc: "Asesoría cercana, transparente y con respuesta rápida. Somos un socio estratégico, no solo un proveedor."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center bg-gray-50 rounded-3xl p-12 hover:bg-white hover:shadow-xl transition-all border border-gray-100"
                            >
                                <div className="text-6xl mb-8">{item.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#0A2540] mb-5">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;