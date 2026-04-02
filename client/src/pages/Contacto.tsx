import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacto: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = {
            nombre: (form.elements.namedItem('nombre') as HTMLInputElement)?.value.trim() || '',
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value.trim() || '',
            telefono: (form.elements.namedItem('telefono') as HTMLInputElement)?.value.trim() || '',
            servicio: (form.elements.namedItem('servicio') as HTMLSelectElement)?.value || '',
            mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement)?.value.trim() || '',
        };

        // Validación básica
        if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio || !formData.mensaje) {
            setErrorMessage("❌ Por favor completa todos los campos obligatorios.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                setErrorMessage(result.error || "No se pudo enviar el mensaje. Inténtalo nuevamente.");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("❌ No se pudo conectar con el servidor. Verifica que el backend esté corriendo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Pantalla de éxito
    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

                    <h1 className="text-5xl font-serif text-[#0A2540] mb-4">¡Mensaje enviado!</h1>
                    <p className="text-xl text-gray-600 mb-10">
                        Gracias por confiar en LEXIURIDICUS.<br />
                        Nos pondremos en contacto contigo muy pronto.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsSuccess(false);
                            setErrorMessage('');
                        }}
                        className="bg-[#0A2540] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-[#0A2540]/90 transition"
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
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-[#0A2540] font-bold mb-4">Contáctenos</h1>
                    <p className="text-xl text-gray-600">Agenda tu consulta gratuita con nuestros especialistas</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-2xl p-10 md:p-14"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] transition-all"
                                    placeholder="Daniel Enrique Vergel"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] transition-all"
                                    placeholder="devergel1980@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    id="telefono"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] transition-all"
                                    placeholder="301 237 0047"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés *</label>
                                <select
                                    name="servicio"
                                    id="servicio"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] bg-white transition-all"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="tradicion-acciones">Tradición de Acciones</option>
                                    <option value="gobierno-corporativo">Gobierno Corporativo</option>
                                    <option value="asesoria-imagen-corporativa">Asesoría en Imagen Corporativa</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje / Consulta *</label>
                            <textarea
                                name="mensaje"
                                id="mensaje"
                                rows={6}
                                required
                                className="w-full px-5 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-[#0A2540] resize-y transition-all"
                                placeholder="Cuéntanos sobre tu caso o consulta..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 disabled:bg-gray-400 text-white py-5 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                        </button>

                        {errorMessage && (
                            <p className="text-red-600 text-center font-medium">{errorMessage}</p>
                        )}
                    </form>

                    <p className="text-center text-xs text-gray-500 mt-8">
                        Tus datos serán tratados con absoluta confidencialidad.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contacto;
