import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Contacto: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Gestos avanzados
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value.trim() || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value.trim() || '';
        const telefono = (document.getElementById('telefono') as HTMLInputElement)?.value.trim() || '';
        const servicio = (document.getElementById('servicio') as HTMLSelectElement)?.value || '';
        const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement)?.value.trim() || '';

        if (!nombre || !email || !telefono || !servicio || !mensaje) {
            alert("❌ Por favor completa todos los campos obligatorios.");
            return;
        }

        setIsSubmitting(true);

        const formData = { nombre, email, telefono, servicio, mensaje };

        try {
            const response = await fetch('http://localhost:5000/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                e.currentTarget.reset();
            } else {
                alert("❌ Error: " + (result.message || "No se pudo enviar el mensaje"));
            }
        } catch (error) {
            console.error(error);
            alert("❌ No se pudo conectar con el servidor.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Pantalla de éxito con animación avanzada
    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen bg-gray-50 py-20 px-6 flex items-center justify-center"
            >
                <motion.div
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="max-w-md text-center"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
                    >
                        <span className="text-6xl">✅</span>
                    </motion.div>

                    <h1 className="text-5xl font-serif text-primary mb-4">¡Mensaje enviado!</h1>
                    <p className="text-xl text-secondary mb-10">
                        Gracias por confiar en LEXIURIDICUS.<br />
                        Nos pondremos en contacto contigo muy pronto.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSuccess(false)}
                        className="bg-primary text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg"
                    >
                        Enviar otro mensaje
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-serif text-primary mb-4">Contáctenos</h1>
                    <p className="text-xl text-secondary">Agenda tu consulta gratuita con nuestros especialistas</p>
                </motion.div>

                {/* Tarjeta con gesto de tilt */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-3xl shadow-2xl p-10 perspective-1000"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        x.set((e.clientX - centerX) / 8);
                        y.set((e.clientY - centerY) / 8);
                    }}
                    onMouseLeave={() => {
                        x.set(0);
                        y.set(0);
                    }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Daniel Enrique Vergel"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="devergel1980@gmail.com"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="301 237 0047"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés *</label>
                                <select
                                    id="servicio"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="tradicion-acciones">Tradición de Acciones</option>
                                    <option value="gobierno-corporativo">Gobierno Corporativo</option>
                                    <option value="asesoria-imagen-corporativa">Asesoría en Imagen Corporativa</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje / Consulta *</label>
                            <textarea
                                id="mensaje"
                                rows={6}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y transition-all"
                                placeholder="Cuéntanos sobre tu caso o consulta..."
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                        </motion.button>
                    </form>

                    <p className="text-center text-xs text-gray-500 mt-8">
                        Tus datos serán tratados con absoluta confidencialidad según nuestra política de privacidad.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contacto;
