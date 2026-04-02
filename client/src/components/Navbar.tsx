import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="flex flex-col">
                            <div className="font-serif text-3xl font-bold tracking-tight text-[#0A2540]">
                                LEXIURIDICUS
                            </div>
                            <div className="text-[10px] text-gray-400 -mt-1 tracking-[2px] font-medium">
                                ABOGADOS CORPORATIVOS
                            </div>
                        </div>
                    </Link>

                    {/* Menú de navegación */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-[#0A2540] ${location.pathname === link.path
                                    ? 'text-[#0A2540] font-semibold'
                                    : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Botón Contacto */}
                    <Link to="/contacto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#0A2540] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#0A2540]/90 transition-all"
                        >
                            Contáctanos
                        </motion.button>
                    </Link>

                    {/* Menú móvil (placeholder por ahora) */}
                    <div className="md:hidden">
                        <button className="text-2xl">☰</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;