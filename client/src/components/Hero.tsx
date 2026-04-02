import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.8px,transparent_1px)] bg-[length:50px_50px] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 pb-16 text-center">
                <div className="max-w-4xl mx-auto">

                    {/* Badge superior - animación retardada */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-white/20"
                    >
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white tracking-widest">EXCELENCIA EN DERECHO CORPORATIVO DESDE 2018</span>
                    </motion.div>

                    {/* Título principal con stagger */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tighter text-white leading-none mb-6"
                    >
                        Derecho Corporativo<br />
                        con <span className="text-accent">Excelencia</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Especialistas en <span className="text-accent font-medium">Tradición de Acciones</span>,
                        <span className="text-accent font-medium"> Gobierno Corporativo</span> y
                        <span className="text-accent font-medium"> Asesoría en Imagen Corporativa</span>.
                    </motion.p>

                    {/* Botones con stagger */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Link
                                to="/servicios"
                                className="block bg-accent hover:bg-amber-500 text-primary font-semibold px-12 py-4.5 rounded-2xl text-lg shadow-xl transition-all"
                            >
                                Explorar Servicios
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Link
                                to="/contacto"
                                className="block border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold px-12 py-4.5 rounded-2xl text-lg transition-all"
                            >
                                Agendar Consulta Gratuita
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Trust signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-gray-400"
                    >
                        <div>✔ Más de 180 empresas asesoradas</div>
                        <div>✔ Cumplimiento normativo 100%</div>
                        <div>✔ Confidencialidad total garantizada</div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator mejorado */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
            >

            </motion.div>
        </section>
    );
};

export default Hero;