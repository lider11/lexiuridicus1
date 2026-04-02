import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A2540] text-gray-300 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Logo y Descripción */}
                    <div className="md:col-span-1">
                        <h3 className="text-white text-3xl font-serif font-bold tracking-tight mb-4">
                            LEXIURIDICUS
                        </h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Firma de abogados especializados en derecho corporativo.
                            Excelencia, seguridad jurídica y visión estratégica para empresas.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/servicios/tradicion-acciones" className="hover:text-white transition-colors">
                                    Tradición de Acciones
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios/gobierno-corporativo" className="hover:text-white transition-colors">
                                    Gobierno Corporativo
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios/asesoria-imagen-corporativa" className="hover:text-white transition-colors">
                                    Asesoría en Imagen Corporativa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Empresa</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog y Recursos</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Contáctanos</h4>
                        <div className="space-y-4 text-sm">
                            <p>📍 Bogotá, Colombia</p>
                            <p>
                                ✉️{' '}
                                <a href="mailto:info@lexiuridicus.com" className="hover:text-white transition-colors">
                                    info@lexiuridicus.com
                                </a>
                            </p>
                            <p>📞 +57 (300) 839-3987</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {currentYear} LEXIURIDICUS • Todos los derechos reservados</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/politicas-privacidad" className="hover:text-gray-300 transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link to="/aviso-legal" className="hover:text-gray-300 transition-colors">
                            Aviso Legal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;