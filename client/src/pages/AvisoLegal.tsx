import React from 'react';
import { Link } from 'react-router-dom';

const AvisoLegal = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-[#0A2540] mb-6">Aviso Legal</h1>
                    <p className="text-gray-600">Última actualización: Abril 2026</p>
                </div>

                <div className="prose prose-lg max-w-none bg-white p-12 rounded-3xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">1. Datos de la Firma</h2>
                    <p>
                        <strong>LEXIURIDICUS</strong><br />
                        Abogados Especializados en Derecho Corporativo<br />
                        Dirección: Bogotá, Colombia<br />
                        Correo electrónico: info@lexiuridicus.com<br />
                        Teléfono: +57 (300) 123-4567
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">2. Objeto</h2>
                    <p>
                        El presente Aviso Legal regula el uso del sitio web www.lexiuridicus.com (en adelante, el "Sitio Web"),
                        propiedad de LEXIURIDICUS.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">3. Propiedad Intelectual</h2>
                    <p>
                        Todos los contenidos del Sitio Web (textos, imágenes, logos, diseño, etc.) son propiedad de LEXIURIDICUS
                        o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación
                        sin autorización expresa.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">4. Limitación de Responsabilidad</h2>
                    <p>
                        LEXIURIDICUS no se hace responsable de los daños y perjuicios que puedan derivarse del uso indebido
                        del Sitio Web ni de la información contenida en el mismo. La información proporcionada tiene carácter
                        general y no constituye asesoría legal personalizada.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">5. Ley Aplicable</h2>
                    <p>
                        El presente Aviso Legal se rige por la legislación colombiana. Cualquier controversia será sometida
                        a los tribunales de la ciudad de Bogotá.
                    </p>

                    <div className="mt-16 text-sm text-gray-500 border-t pt-8">
                        El uso del Sitio Web implica la aceptación plena de todas las condiciones establecidas en este Aviso Legal.
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0A2540] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#0A2540]/90 transition-all"
                    >
                        Contactarnos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AvisoLegal;