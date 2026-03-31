import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string | null;
  category: string;
  author: string;
  createdAt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blog')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar posts:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Cargando artículos del blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold text-primary mb-6 tracking-tight">
            Blog LEXIURIDICUS
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Artículos especializados en derecho corporativo, gobierno societario y asesoría estratégica para empresas.
          </p>
        </motion.div>

        {/* Grid de Posts Mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Imagen con overlay elegante */}
              {post.image && (
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay oscuro suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Categoría */}
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-primary text-xs font-semibold rounded-2xl shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Fecha */}
                  <div className="absolute bottom-6 right-6 text-white text-sm font-medium bg-black/50 px-4 py-1 rounded-xl backdrop-blur-md">
                    {new Date(post.createdAt).toLocaleDateString('es-CO', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              )}

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold leading-tight mb-5 text-gray-900 group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 line-clamp-4 mb-8 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all mt-auto"
                >
                  Leer artículo completo
                  <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;