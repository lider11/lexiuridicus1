const Contacto = () => {
    const apiBaseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-primary mb-4">Contáctenos</h1>
                    <p className="text-xl text-secondary">Agenda tu consulta gratuita con nuestros especialistas</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-10">
                    <form id="contactForm" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="300 123 4567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés *</label>
                                <select
                                    id="servicio"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="tradicion-acciones">Tradición de Acciones</option>
                                    <option value="gobierno-corporativo">Gobierno Corporativo</option>
                                    <option value="asesoria-imagen-corporativa">Asesoría en Imagen Corporativa</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                        </div>

                        <div id="otroContainer" className="hidden">
                            <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué servicio necesitas? *</label>
                            <input
                                type="text"
                                id="otroServicio"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                                placeholder="Describe brevemente el servicio"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje / Consulta *</label>
                            <textarea
                                id="mensaje"
                                rows={6}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary resize-y"
                                placeholder="Cuéntanos sobre tu caso o consulta..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            id="submitBtn"
                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-semibold text-lg transition-all disabled:opacity-70"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>

            {/* JavaScript Vanilla para manejar el formulario */}
            <script dangerouslySetInnerHTML={{
                __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const servicioSelect = document.getElementById('servicio');
            const otroContainer = document.getElementById('otroContainer');
            const submitBtn = document.getElementById('submitBtn');

            // Mostrar campo "Otro" si se selecciona "Otro"
            if (servicioSelect) {
              servicioSelect.addEventListener('change', function() {
                if (this.value === 'otro') {
                  otroContainer.classList.remove('hidden');
                } else {
                  otroContainer.classList.add('hidden');
                }
              });
            }

            // Manejar envío del formulario
            if (form) {
              form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                submitBtn.disabled = true;
                submitBtn.textContent = "Enviando...";

                const formData = {
                  nombre: document.getElementById('nombre').value,
                  email: document.getElementById('email').value,
                  telefono: document.getElementById('telefono').value,
                  servicio: servicioSelect.value,
                  otroServicio: document.getElementById('otroServicio') ? document.getElementById('otroServicio').value : '',
                  mensaje: document.getElementById('mensaje').value,
                };

                try {
                  const response = await fetch('${apiBaseUrl}/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                  });

                  const result = await response.json();

                  if (result.success) {
                    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.");
                    form.reset();
                    otroContainer.classList.add('hidden');
                  } else {
                    alert("Error: " + (result.message || "No se pudo enviar el mensaje"));
                  }
                } catch (error) {
                  console.error(error);
                  alert("Error de conexión con el servidor. Asegúrate de que el backend esté corriendo.");
                } finally {
                  submitBtn.disabled = false;
                  submitBtn.textContent = "Enviar Mensaje";
                }
              });
            }
          });
        `
            }} />
        </div>
    );
};

export default Contacto;
