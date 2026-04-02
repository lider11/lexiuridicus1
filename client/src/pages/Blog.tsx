import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Post {
  id: number;
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setPosts(response.data);
      } catch (err) {
        console.error('Error al cargar posts:', err);
        setError('No se pudieron cargar los artículos. Inténtalo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0A2540] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando artículos del blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-bold text-[#0A2540] mb-6">
            Blog LEXIURIDICUS
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Artículos especializados en derecho corporativo, gobierno societario y asesoría estratégica para empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {post.image && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString('es-CO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight mb-4 text-[#0A2540] group-hover:text-amber-600 transition-colors line-clamp-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 line-clamp-4 mb-8">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#0A2540] font-medium group-hover:gap-3 transition-all"
                >
                  Leer artículo completo
                  <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay artículos publicados todavía.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;