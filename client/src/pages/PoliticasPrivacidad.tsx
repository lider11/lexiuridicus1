import React from 'react';
import { Link } from 'react-router-dom';

const PoliticasPrivacidad = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-[#0A2540] mb-6">Política de Privacidad</h1>
                    <p className="text-gray-600">Última actualización: Abril 2026</p>
                </div>

                <div className="prose prose-lg max-w-none bg-white p-12 rounded-3xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">1. Introducción</h2>
                    <p>
                        En LEXIURIDICUS respetamos su privacidad y nos comprometemos a proteger sus datos personales.
                        Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">2. Información que recopilamos</h2>
                    <p>Podemos recopilar los siguientes datos personales:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Nombre completo y cargo</li>
                        <li>Correo electrónico y número de teléfono</li>
                        <li>Información de la empresa que representa</li>
                        <li>Datos proporcionados a través del formulario de contacto</li>
                        <li>Información técnica (dirección IP, tipo de navegador, páginas visitadas)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">3. Finalidad del tratamiento</h2>
                    <p>Utilizamos sus datos para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Responder a sus consultas y solicitudes de servicios</li>
                        <li>Enviar información sobre nuestros servicios legales</li>
                        <li>Cumplir con obligaciones legales y regulatorias</li>
                        <li>Mejorar la experiencia en nuestro sitio web</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">4. Derechos del titular de los datos</h2>
                    <p>De acuerdo con la Ley 1581 de 2012 y su Decreto Reglamentario 1377 de 2013, usted tiene derecho a:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Conocer, actualizar y rectificar sus datos personales</li>
                        <li>Solicitar prueba de la autorización otorgada</li>
                        <li>Ser informado sobre el uso que se le ha dado a sus datos</li>
                        <li>Revocar la autorización y/o solicitar la supresión de sus datos</li>
                        <li>Acceder de forma gratuita a sus datos personales</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#0A2540] mt-10 mb-4">5. Contacto</h2>
                    <p>
                        Para ejercer sus derechos o cualquier consulta sobre esta Política de Privacidad, puede contactarnos a:
                    </p>
                    <p className="font-medium">Correo: info@lexiuridicus.com</p>
                    <p className="font-medium">Teléfono: +57 (300) 123-4567</p>

                    <div className="mt-16 text-sm text-gray-500 border-t pt-8">
                        LEXIURIDICUS se reserva el derecho de modificar esta Política de Privacidad en cualquier momento.
                        Las modificaciones serán publicadas en este sitio web.
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0A2540] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#0A2540]/90 transition-all"
                    >
                        Contactarnos para más información
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PoliticasPrivacidad;