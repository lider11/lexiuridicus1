import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { buildApiUrl } from '../lib/api';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    image: string | null;
    category: string | null;
    author: string | null;
    createdAt: string;
    comments: Comment[];
}

interface Comment {
    id: number;
    author: string;
    email: string;
    content: string;
    approved: boolean;
    createdAt: string;
}

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        author: '',
        email: '',
        content: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        if (!slug) return;

        axios.get(buildApiUrl(`/api/blog/${slug}`))
            .then(res => setPost(res.data))
            .catch(() => setError("No se pudo cargar el artículo."))
            .finally(() => setLoading(false));
    }, [slug]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.author || !formData.email || !formData.content) return;

        setSubmitting(true);
        setSubmitMessage(null);

        try {
            await axios.post(buildApiUrl(`/api/blog/${slug}/comments`), formData);

            setSubmitMessage({
                type: 'success',
                text: '✅ Comentario enviado correctamente. Será revisado antes de publicarse.'
            });

            const refreshed = await axios.get(buildApiUrl(`/api/blog/${slug}`));
            setPost(refreshed.data);

            setFormData({ author: '', email: '', content: '' });
        } catch {
            setSubmitMessage({
                type: 'error',
                text: '❌ Error al enviar el comentario. Inténtalo de nuevo.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    const getKeyPoints = (currentSlug: string) => {
        switch (currentSlug) {
            case "imagen-corporativa-reputacion-legal":
                return [
                    { title: "Protección Legal", description: "La reputación debe estar respaldada por estrategias jurídicas sólidas." },
                    { title: "Valor para Inversionistas", description: "Una buena imagen corporativa aumenta el múltiplo de valoración." },
                    { title: "Gestión de Crisis", description: "Ayuda a mitigar daños en situaciones de crisis reputacional." },
                    { title: "Confianza Institucional", description: "Genera credibilidad ante socios, clientes y reguladores." }
                ];
            case "gobierno-corporativo-estatutos-actualizacion":
                return [
                    { title: "Estatutos Modernos", description: "Evita conflictos internos y sanciones con estatutos actualizados." },
                    { title: "Buena Gobernanza", description: "Mejora la toma de decisiones y la transparencia empresarial." },
                    { title: "Cumplimiento Normativo", description: "Reduce riesgos legales y fortalece la imagen corporativa." },
                    { title: "Sostenibilidad", description: "Prepara la empresa para un crecimiento sólido y duradero." }
                ];
            case "tradicion-acciones-guia-completa":
                return [
                    { title: "Cesión Segura", description: "Evita disputas futuras con una correcta formalización legal." },
                    { title: "Documentación Completa", description: "Garantiza validez y seguridad en la transferencia de acciones." },
                    { title: "Cumplimiento Fiscal", description: "Evita sanciones tributarias mediante el procedimiento correcto." },
                    { title: "Transparencia", description: "Fortalece la confianza entre socios e inversionistas." }
                ];
            default:
                return [
                    { title: "Excelencia Jurídica", description: "Asesoría especializada en derecho societario." },
                    { title: "Protección Estratégica", description: "Defendemos los intereses de tu empresa." },
                    { title: "Cumplimiento Normativo", description: "Evitamos riesgos legales innecesarios." },
                    { title: "Crecimiento Sostenible", description: "Acompañamos tu empresa hacia el futuro." }
                ];
        }
    };

    if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-xl">Cargando artículo...</div>;

    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
                <p className="text-red-600 text-xl mb-6">{error || "Artículo no encontrado"}</p>
                <Link to="/blog" className="text-[#0A2540] hover:underline text-lg">← Volver al Blog</Link>
            </div>
        );
    }

    const paragraphs = post.content ? post.content.split('\n\n') : [];
    const allComments = post.comments || [];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Mejorado */}
            <div className="relative h-[580px] overflow-hidden">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm mb-6">
                        {post.category || "Derecho Corporativo"}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm opacity-90">
                        <span>Por {post.author || "LEXIURIDICUS"}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{new Date(post.createdAt).toLocaleDateString('es-CO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                </div>
            </div>

            {/* Contenido del Artículo */}
            <div className="max-w-4xl mx-auto px-6 py-20 prose prose-lg text-gray-700 leading-relaxed">
                {paragraphs.map((paragraph, i) => (
                    <p key={i} className="mb-10">{paragraph}</p>
                ))}
            </div>

            {/* Infografía Elegante */}
            <div className="max-w-4xl mx-auto px-6 pb-24">
                <div className="bg-white rounded-3xl shadow-sm p-14 md:p-20 border border-gray-100">
                    <h3 className="text-4xl font-serif text-[#0A2540] mb-16 text-center">Puntos Clave</h3>
                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
                        {getKeyPoints(post.slug).map((point, index) => (
                            <div key={index} className="flex gap-8 group">
                                <div className="w-14 h-14 bg-[#0A2540] text-white rounded-2xl flex items-center justify-center font-bold text-3xl flex-shrink-0 transition-transform group-hover:scale-110">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-2xl text-[#0A2540] mb-4">{point.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comentarios - Diseño Profesional */}
            <div className="max-w-4xl mx-auto px-6 pb-28">
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-12">
                        Comentarios ({allComments.length})
                    </h2>

                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmitComment}
                        className="bg-white p-12 rounded-3xl shadow-xl mb-20 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-3xl font-semibold mb-10 text-[#0A2540]">Deja tu comentario</h3>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Nombre completo</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] text-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    required
                                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540] text-lg"
                                />
                            </div>
                        </div>

                        <div className="mb-10">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Tu comentario</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={7}
                                placeholder="Escribe tu opinión o consulta sobre el artículo..."
                                required
                                className="w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:border-[#0A2540] resize-y text-lg"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 disabled:bg-gray-400 text-white py-5 rounded-2xl font-semibold text-xl transition-all"
                        >
                            {submitting ? "Enviando comentario..." : "Publicar comentario"}
                        </button>

                        {submitMessage && (
                            <p className={`mt-8 text-center font-medium text-lg ${submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {submitMessage.text}
                            </p>
                        )}
                    </motion.form>

                    {/* Lista de Comentarios */}
                    <div className="space-y-10">
                        {allComments.length > 0 ? (
                            allComments.map((comment) => (
                                <motion.div
                                    key={comment.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="font-semibold text-2xl text-[#0A2540]">{comment.author}</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                {new Date(comment.createdAt).toLocaleDateString('es-CO', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>

                                        {!comment.approved && (
                                            <span className="px-7 py-2.5 text-sm bg-amber-100 text-amber-700 font-medium rounded-full border border-amber-300">
                                                ● Pendiente de aprobación
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed text-[17.5px]">{comment.content}</p>
                                </motion.div>
                            ))
                        ) : (
                            <div className="bg-white p-24 rounded-3xl text-center border border-dashed border-gray-200">
                                <p className="text-gray-500 text-xl">
                                    Aún no hay comentarios.<br />
                                    ¡Sé el primero en compartir tu opinión!
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center mt-24">
                    <Link to="/blog" className="text-[#0A2540] hover:underline text-xl font-medium flex items-center justify-center gap-3">
                        ← Volver a todos los artículos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
