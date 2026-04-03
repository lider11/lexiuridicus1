import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { scrollY } = useScroll();

    // Parallax sutil
    const navbarY = useTransform(scrollY, [0, 100], [0, -8]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            style={{ y: navbarY }}
            className="bg-white/85 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(15,23,42,0.08)] fixed w-full z-50"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <span className="text-3xl font-serif font-bold text-[#0A2540] group-hover:text-amber-600 transition-colors">
                            LEXIURIDICUS
                        </span>
                        <span className="text-[10px] tracking-[2px] text-gray-500 font-medium">ABOGADOS CORPORATIVOS</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-medium text-base py-2 transition-all duration-300 ${isActive(link.path) ? 'text-[#0A2540] font-semibold' : 'text-gray-600 hover:text-[#0A2540]'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-amber-500 rounded-full transition-all duration-300 
                    ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Botón simple como te gustaba */}
                    <div className="hidden md:block">
                        <Link
                            to="/contacto"
                            className="bg-[#0A2540] text-white px-10 py-3.5 rounded-2xl font-semibold text-base 
                         hover:bg-amber-500 hover:text-[#0A2540] 
                         transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Agenda tu consulta
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-[#0A2540] hover:text-amber-600 transition-colors"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t shadow-lg"
                    >
                        <div className="px-6 py-10 flex flex-col gap-6 text-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-medium py-3 block transition-colors ${isActive(link.path) ? 'text-[#0A2540] font-semibold' : 'text-gray-600 hover:text-[#0A2540]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                to="/contacto"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#0A2540] hover:bg-amber-500 text-white text-center py-4 rounded-2xl font-medium mt-6 transition-all"
                            >
                                Agenda tu consulta
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
