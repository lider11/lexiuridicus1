import { Link } from 'react-router-dom';

const ServiciosMain = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif text-primary tracking-tight">
                        Nuestros Servicios
                    </h1>
                    <p className="mt-6 text-xl text-secondary max-w-2xl mx-auto">
                        Soluciones jurídicas especializadas con excelencia y experiencia comprobada
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/servicios/tradicion-acciones" className="group">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-600" />
                            <div className="p-10 flex flex-col flex-1">
                                <div className="text-5xl mb-6">📋</div>
                                <h3 className="text-2xl font-serif text-primary mb-4">Tradición de Acciones</h3>
                                <p className="text-secondary flex-1">Cesión, transferencia y formalización legal de acciones societarias con total seguridad jurídica.</p>
                                <span className="text-accent font-medium mt-8 inline-flex items-center group-hover:gap-2 transition-all">
                                    Ver detalle <span className="text-xl">→</span>
                                </span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/servicios/gobierno-corporativo" className="group">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-gradient-to-r from-blue-600 to-primary" />
                            <div className="p-10 flex flex-col flex-1">
                                <div className="text-5xl mb-6">⚖️</div>
                                <h3 className="text-2xl font-serif text-primary mb-4">Gobierno Corporativo</h3>
                                <p className="text-secondary flex-1">Estatutos sociales, juntas directivas y cumplimiento normativo.</p>
                                <span className="text-accent font-medium mt-8 inline-flex items-center group-hover:gap-2 transition-all">
                                    Ver detalle <span className="text-xl">→</span>
                                </span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/servicios/asesoria-imagen-corporativa" className="group">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600" />
                            <div className="p-10 flex flex-col flex-1">
                                <div className="text-5xl mb-6">✨</div>
                                <h3 className="text-2xl font-serif text-primary mb-4">Asesoría en Imagen Corporativa</h3>
                                <p className="text-secondary flex-1">Branding jurídico, protección de reputación y comunicación estratégica.</p>
                                <span className="text-accent font-medium mt-8 inline-flex items-center group-hover:gap-2 transition-all">
                                    Ver detalle <span className="text-xl">→</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiciosMain;