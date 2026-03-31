const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} LEXIURIDICUS • Todos los derechos reservados
                </p>
                <p className="text-xs text-gray-500 mt-3">
                    Especialistas en Tradición de Acciones • Gobierno Corporativo • Asesoría en Imagen Corporativa
                </p>
            </div>
        </footer>
    );
};

export default Footer;