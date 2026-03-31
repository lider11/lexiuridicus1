import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiciosMain from '../components/services/ServiciosMain';
import TradicionAcciones from '../components/services/TradicionAcciones';
import GobiernoCorporativo from '../components/services/GobiernoCorporativo';
import AsesoriaImagen from '../components/services/AsesoriaImagen';

const Servicios = () => {
    return (
        <Routes>
            <Route index element={<ServiciosMain />} />
            <Route path="tradicion-acciones" element={<TradicionAcciones />} />
            <Route path="gobierno-corporativo" element={<GobiernoCorporativo />} />
            <Route path="asesoria-imagen-corporativa" element={<AsesoriaImagen />} />
        </Routes>
    );
};

export default Servicios;