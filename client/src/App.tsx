import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

// Importamos las subpáginas de Servicios
import TradicionAcciones from './components/services/TradicionAcciones';
import GobiernoCorporativo from './components/services/GobiernoCorporativo';
import AsesoriaImagen from './components/services/AsesoriaImagen';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={<Home />} />

            {/* Servicios con sub-rutas */}
            <Route path="/servicios" element={<Servicios />}>
              <Route path="tradicion-acciones" element={<TradicionAcciones />} />
              <Route path="gobierno-corporativo" element={<GobiernoCorporativo />} />
              <Route path="asesoria-imagen-corporativa" element={<AsesoriaImagen />} />
            </Route>

            {/* Otras páginas */}
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Ruta por defecto (404) */}
            <Route path="*" element={<div className="text-center py-20">Página no encontrada</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;