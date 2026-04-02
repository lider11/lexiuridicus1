import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacto from './pages/Contacto';

// Subpáginas de Servicios
import ServiciosMain from './components/services/ServiciosMain';
import TradicionAcciones from './components/services/TradicionAcciones';
import GobiernoCorporativo from './components/services/GobiernoCorporativo';
import AsesoriaImagen from './components/services/AsesoriaImagen';

import Footer from './components/Footer';   // ← Importante: Footer importado

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">   {/* ← flex flex-col es clave */}

        <Navbar />

        {/* Contenido principal que crece */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />

            {/* Servicios */}
            <Route path="/servicios" element={<ServiciosMain />} />
            <Route path="/servicios/tradicion-acciones" element={<TradicionAcciones />} />
            <Route path="/servicios/gobierno-corporativo" element={<GobiernoCorporativo />} />
            <Route path="/servicios/asesoria-imagen-corporativa" element={<AsesoriaImagen />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center text-center px-6">
                <div>
                  <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                  <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
                  <Link
                    to="/"
                    className="inline-block bg-[#0A2540] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#0A2540]/90 transition-all"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer - Aparece en TODAS las páginas */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;