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
                            Firma especializada en derecho corporativo con más de 12 años de experiencia.
                            Excelencia, seguridad jurídica y visión estratégica para empresas.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/servicios/tradicion-acciones" className="hover:text-white transition-colors">Tradición de Acciones</Link></li>
                            <li><Link to="/servicios/gobierno-corporativo" className="hover:text-white transition-colors">Gobierno Corporativo</Link></li>
                            <li><Link to="/servicios/asesoria-imagen-corporativa" className="hover:text-white transition-colors">Asesoría en Imagen Corporativa</Link></li>
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

                    {/* Contacto + Redes Sociales */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">Contáctanos</h4>
                        <div className="space-y-4 text-sm mb-10">
                            <p>📍 Barranquilla, Colombia</p>
                            <p>
                                ✉️{' '}
                                <a href="mailto:info@lexiuridicus.com" className="hover:text-white transition-colors">
                                    info@lexiuridicus.com
                                </a>
                            </p>
                            <p>📞 +57 (300) 839-3985</p>
                        </div>

                        {/* Redes Sociales con SVG */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-lg">Síguenos</h4>
                            <div className="flex gap-6 text-3xl">
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com/lexiuridicus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#1877F2] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/company/lexiuridicus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#0A66C2] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/lexiuridicus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E4405F] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>

                                {/* TikTok */}
                                <a
                                    href="https://tiktok.com/@lexiuridicus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors"
                                    aria-label="TikTok"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.68 2.9 2.9 0 0 1 1.04.2V9.5a5.78 5.78 0 0 0-4.15 5.56 5.78 5.78 0 0 0 5.78 5.78 5.78 5.78 0 0 0 5.78-5.78V8.5a7.4 7.4 0 0 0 4.44 1.4z" />
                                    </svg>
                                </a>

                                {/* Pinterest */}
                                <a
                                    href="https://pinterest.com/lexiuridicus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E60023] transition-colors"
                                    aria-label="Pinterest"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13 2a9 9 0 0 0-5.5 16.3c.4.1.8-.1.9-.5l.4-1.6c.1-.4.1-.5.3-.7-.6-.7-1-1.6-1-2.6 0-2.2 1.6-4.3 3.7-4.3 1.9 0 2.8 1.4 2.8 3.1 0 2.4-1.3 4.4-3.1 4.4-1 0-1.7-.7-1.7-1.8 0-.5.2-1 .5-1.3.1-.2.1-.4 0-.6l-.2-.8c-.1-.3-.4-.4-.7-.3-2.1.8-3.4 2.9-3.4 5.3 0 3 2.4 5.4 5.4 5.4 3.2 0 5.7-2.6 5.7-5.9 0-3.1-2.2-5.3-5.3-5.3z" />
                                    </svg>
                                </a>
                            </div>
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