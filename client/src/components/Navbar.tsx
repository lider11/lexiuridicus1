import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Blog', path: '/blog' },           // ← Agregado
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav className="bg-[#0A2540] text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A2540] font-bold text-2xl">
                            L
                        </div>
                        <div>
                            <div className="font-serif text-2xl font-bold tracking-tight">LEXIURIDICUS</div>
                            <div className="text-[10px] text-gray-400 -mt-1">ABOGADOS CORPORATIVOS</div>
                        </div>
                    </Link>

                    {/* Menú Desktop */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-[#D4AF37] ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Botón CTA */}
                    <div className="hidden md:block">
                        <Link
                            to="/contacto"
                            className="bg-[#D4AF37] text-[#0A2540] px-6 py-3 rounded-full font-semibold hover:bg-[#D4AF37]/90 transition-all"
                        >
                            Consulta de agenda
                        </Link>
                    </div>

                    {/* Botón menú móvil */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menú Móvil */}
                {isOpen && (
                    <div className="md:hidden py-6 border-t border-white/10">
                        <div className="flex flex-col gap-6 text-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#D4AF37] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contacto"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#D4AF37] text-[#0A2540] px-6 py-3 rounded-full font-semibold text-center mt-4"
                            >
                                Consulta de agenda
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;