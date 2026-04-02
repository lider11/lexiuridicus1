import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.mensaje) {
            setSubmitMessage({
                type: 'error',
                text: 'Por favor completa los campos obligatorios.'
            });
            return;
        }

        setSubmitting(true);
        setSubmitMessage(null);

        try {
            // ←←← CORREGIDO: ahora usa /api/contact (sin la "o")
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage({
                    type: 'success',
                    text: '✅ Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
                });
                setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
            } else {
                throw new Error('Error al enviar');
            }
        } catch (err) {
            setSubmitMessage({
                type: 'error',
                text: '❌ Hubo un error al enviar el mensaje. Por favor intenta de nuevo.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-[#0A2540] mb-4">Contáctenos</h1>
                    <p className="text-xl text-gray-600">Agenda tu consulta gratuita con nuestros especialistas</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-10 md:p-14"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                    placeholder="Juan Pérez"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                    placeholder="+57 300 123 4567"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés</label>
                                <select
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                >
                                    <option value="">Seleccione un servicio</option>
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
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows={6}
                                required
                                className="w-full px-5 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-[#0A2540] resize-y"
                                placeholder="Cuéntenos sobre su caso o consulta..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-[#0A2540] hover:bg-amber-500 text-white py-5 rounded-2xl font-semibold text-lg transition-all duration-300 disabled:opacity-70"
                        >
                            {submitting ? "Enviando mensaje..." : "Enviar Mensaje"}
                        </button>

                        {submitMessage && (
                            <p className={`mt-6 text-center font-medium ${submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {submitMessage.text}
                            </p>
                        )}
                    </form>
                </motion.div>

                <p className="text-center text-xs text-gray-500 mt-10">
                    Tus datos serán tratados con absoluta confidencialidad según nuestra
                    <Link to="/politicas-privacidad" className="underline hover:text-[#0A2540]"> Política de Privacidad</Link>.
                </p>
            </div>
        </div>
    );
};

export default Contacto;