import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    content: string;
    createdAt: string;
    approved: boolean;
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

    // Cargar artículo
    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blog/${slug}`);
                setPost(response.data);
            } catch (err) {
                console.error("Error cargando artículo:", err);
                setError("No se pudo cargar el artículo.");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
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
            await axios.post(`http://localhost:5000/api/blog/${slug}/comments`, formData);

            setSubmitMessage({
                type: 'success',
                text: '✅ Comentario enviado correctamente. Será revisado antes de publicarse.'
            });

            // Recargar el post para actualizar comentarios
            const refreshed = await axios.get(`http://localhost:5000/api/blog/${slug}`);
            setPost(refreshed.data);

            setFormData({ author: '', email: '', content: '' });
        } catch (err) {
            console.error("Error enviando comentario:", err);
            setSubmitMessage({
                type: 'error',
                text: '❌ Error al enviar el comentario. Inténtalo de nuevo.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    // === INFROGRAFÍA DINÁMICA (RESPECTANDO TU LÓGICA) ===
    const getKeyPoints = (slug: string) => {
        switch (slug) {
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="relative h-[520px] overflow-hidden">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 text-white max-w-5xl mx-auto">
                    <span className="px-6 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
                        {post.category || "Derecho Corporativo"}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mt-6 leading-tight">{post.title}</h1>
                    <div className="mt-6 flex items-center gap-6 text-sm">
                        <span>Por {post.author || "LEXIURIDICUS"}</span>
                        <span>•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString('es-CO')}</span>
                    </div>
                </div>
            </div>

            {/* Contenido del artículo */}
            <div className="max-w-4xl mx-auto px-6 py-16 prose prose-lg text-gray-700">
                {paragraphs.map((paragraph, i) => (
                    <p key={i} className="mb-8">{paragraph}</p>
                ))}
            </div>

            {/* INFROGRAFÍA DINÁMICA - RESPETANDO TU FUNCIÓN */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-sm p-12 md:p-16 border border-gray-100">
                    <h3 className="text-4xl font-serif text-[#0A2540] mb-12 text-center">Puntos Clave del Artículo</h3>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {getKeyPoints(post.slug).map((point, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="w-12 h-12 bg-[#0A2540] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-xl text-[#0A2540] mb-3">{point.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comentarios */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-4xl font-serif text-[#0A2540] mb-10">
                        Comentarios ({post.comments?.length || 0})
                    </h2>

                    {/* Formulario de comentarios */}
                    <motion.form
                        onSubmit={handleSubmitComment}
                        className="bg-white p-10 md:p-14 rounded-3xl shadow-sm mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-2xl font-semibold mb-8">Deja tu comentario</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    required
                                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tu comentario</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Escribe tu opinión o consulta sobre el artículo..."
                                required
                                className="w-full px-5 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-[#0A2540] resize-y"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 text-white py-4 rounded-2xl font-semibold text-lg transition-all disabled:opacity-70"
                        >
                            {submitting ? "Enviando comentario..." : "Publicar comentario"}
                        </button>

                        {submitMessage && (
                            <p className={`mt-6 text-center font-medium ${submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {submitMessage.text}
                            </p>
                        )}
                    </motion.form>

                    {/* Lista de comentarios */}
                    <div className="space-y-10">
                        {post.comments && post.comments.length > 0 ? (
                            post.comments
                                .filter(comment => comment.approved)
                                .map((comment) => (
                                    <motion.div
                                        key={comment.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white p-8 rounded-3xl shadow-sm"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-lg">{comment.author}</p>
                                                <p className="text-sm text-gray-500">
                                                    {new Date(comment.createdAt).toLocaleDateString('es-CO', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-gray-700 leading-relaxed text-[17px]">{comment.content}</p>
                                    </motion.div>
                                ))
                        ) : (
                            <p className="text-center text-gray-500 py-16 text-lg">
                                Aún no hay comentarios aprobados. ¡Sé el primero en compartir tu opinión!
                            </p>
                        )}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link to="/blog" className="text-[#0A2540] hover:underline text-lg font-medium">
                        ← Volver a todos los artículos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;