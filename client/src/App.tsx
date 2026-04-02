import { Routes, Route } from 'react-router-dom';

// Importar páginas
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacto from './pages/Contacto';

// Importar Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* Rutas del Blog - Importante: la ruta estática primero */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
              <p className="text-2xl text-gray-600">Página no encontrada</p>
              <a href="/" className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90">
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;