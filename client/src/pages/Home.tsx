import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A2540]">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff15_0%,transparent_60%)]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h1 className="text-7xl md:text-[5.5rem] font-serif font-bold tracking-tighter leading-none mb-6">
                        LEXIURIDICUS
                    </h1>
                    <p className="text-3xl md:text-4xl font-light text-gray-200 mb-3">
                        Abogados Corporativos
                    </p>
                    <div className="h-1 w-28 bg-amber-400 mx-auto mb-10" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12 leading-relaxed"
                >
                    Especialistas en <span className="text-amber-400 font-medium">Tradición de Acciones</span>,
                    <span className="text-amber-400 font-medium"> Gobierno Corporativo</span> y
                    <span className="text-amber-400 font-medium"> Asesoría en Imagen Corporativa</span>.<br />
                    Protegemos y hacemos crecer tu empresa con soluciones jurídicas de excelencia.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Link
                        to="/servicios"
                        className="bg-white text-[#0A2540] hover:bg-amber-400 hover:text-[#0A2540] font-semibold px-12 py-5 rounded-2xl text-lg transition-all duration-300"
                    >
                        Ver nuestros servicios
                    </Link>

                    <Link
                        to="/contacto"
                        className="border-2 border-white/80 hover:border-white hover:bg-white hover:text-[#0A2540] font-semibold px-12 py-5 rounded-2xl text-lg transition-all duration-300"
                    >
                        Agenda consulta gratuita
                    </Link>
                </div>
            </div>

            {/* Indicador de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-xs tracking-[3px] flex flex-col items-center"
            >
                DESPLAZA
                <span className="text-2xl mt-1">↓</span>
            </motion.div>
        </div>
    );
};

export default Hero;