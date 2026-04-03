import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buildApiUrl, CONTACT_API_PATHS, IS_CROSS_ORIGIN_API } from '../lib/api';

const Contacto: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitMessage(null);

        try {
            let response: Response | null = null;

            for (const path of CONTACT_API_PATHS) {
                const candidate = await fetch(buildApiUrl(path), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (candidate.ok) {
                    response = candidate;
                    break;
                }

                if (candidate.status !== 404 && candidate.status !== 405) {
                    response = candidate;
                    break;
                }
            }

            if (!response && IS_CROSS_ORIGIN_API) {
                const body = new URLSearchParams({
                    nombre: formData.nombre,
                    email: formData.email,
                    telefono: formData.telefono,
                    servicio: formData.servicio,
                    mensaje: formData.mensaje,
                });

                await fetch(buildApiUrl('/api/contact'), {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                    body: body.toString(),
                });

                setSubmitMessage({
                    type: 'success',
                    text: '✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
                });
                setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
                return;
            }

            if (response?.ok) {
                setSubmitMessage({
                    type: 'success',
                    text: '✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
                });
                setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
            } else {
                throw new Error('Error en el servidor');
            }

            setSubmitMessage({
                type: 'success',
                text: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                servicio: '',
                mensaje: '',
            });

        } catch (error: unknown) {
            const message = error instanceof Error
                ? error.message
                : 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';

            setSubmitMessage({ type: 'error', text: message });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contacto | LEXIURIDICUS</title>
                <meta name="description" content="Formulario de contacto para solicitar asesoría jurídica corporativa." />
            </Helmet>

            <section className="min-h-screen bg-gray-50 py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl p-10"
                    >
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-serif text-[#0A2540] mb-3">Contáctenos</h1>
                            <p className="text-gray-600">Completa el formulario y te responderemos lo antes posible.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0A2540]"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0A2540]"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0A2540]"
                                        placeholder="300 123 4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés</label>
                                    <select
                                        name="servicio"
                                        value={formData.servicio}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0A2540]"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="Tradición de acciones">Tradición de acciones</option>
                                        <option value="Gobierno corporativo">Gobierno corporativo</option>
                                        <option value="Asesoría de imagen corporativa">Asesoría de imagen corporativa</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje / Consulta *</label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] resize-y"
                                    placeholder="Cuéntanos sobre tu caso o consulta..."
                                ></textarea>
                            </div>

                            {submitMessage && (
                                <div className={`p-4 rounded-xl text-center font-medium ${submitMessage.type === 'success'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}>
                                    {submitMessage.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 disabled:bg-gray-400 text-white py-4 rounded-2xl font-semibold text-lg transition-all"
                            >
                                {submitting ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                            </button>
                        </form>

                        <p className="text-center text-xs text-gray-500 mt-8">
                            Tus datos serán tratados con absoluta confidencialidad.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contacto;
