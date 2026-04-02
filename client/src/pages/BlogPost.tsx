import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string | null;
    category: string;
    author: string;
    createdAt: string;
}

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        axios.get(`http://localhost:5000/api/blog/${slug}`)
            .then((response) => setPost(response.data))
            .catch(() => setError("No se pudo cargar el artículo"))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Cargando artículo...</p>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 text-xl mb-4">{error || "Artículo no encontrado"}</p>
                    <Link to="/blog" className="mt-6 inline-block text-primary hover:underline text-lg">
                        ← Volver al Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Image */}
            <div className="relative h-[560px] overflow-hidden">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="px-6 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                            {post.category}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mt-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="mt-6 flex items-center gap-6 text-sm md:text-base opacity-90">
                            <span>Por {post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.createdAt).toLocaleDateString('es-CO', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                >
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-8 text-[17.5px] leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* === SECCIÓN DE INFOGRAFÍA === */}
                <div className="mt-20 bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                        Puntos clave del artículo
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">1</div>
                                <div>
                                    <p className="font-medium">La reputación es un activo estratégico</p>
                                    <p className="text-sm text-gray-600 mt-1">Impacta directamente en la valoración y atractivo para inversionistas.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">2</div>
                                <div>
                                    <p className="font-medium">Los inversionistas evalúan gobernanza y reputación</p>
                                    <p className="text-sm text-gray-600 mt-1">Una due diligence reputacional puede definir el éxito o fracaso de una ronda.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">3</div>
                                <div>
                                    <p className="font-medium">La prevención es más efectiva que la reacción</p>
                                    <p className="text-sm text-gray-600 mt-1">Construir una reputación sólida reduce riesgos y aumenta el valor de la empresa.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">4</div>
                                <div>
                                    <p className="font-medium">Una buena imagen corporativa acelera el cierre de inversiones</p>
                                    <p className="text-sm text-gray-600 mt-1">Empresas bien posicionadas logran mejores múltiplos y condiciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón volver */}
                <div className="mt-16 pt-12 border-t border-gray-200 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-3 text-primary font-medium hover:text-primary/80 transition-colors text-lg"
                    >
                        ← Volver a todos los artículos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;