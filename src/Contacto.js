import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Facebook, Linkedin, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de formulario
    console.log('Datos de contacto:', contactData);
    // Aquí implementarías el envío real del formulario
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Formulario de Contacto */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Contáctanos
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={contactData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-gray-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={contactData.correo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono (Opcional)</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={contactData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="(+52) 55-1234-5678"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={contactData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Escribe tu consulta aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              <Send className="mr-2" size={20} /> Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Información de Contacto y Ubicación */}
        <div className="space-y-6">
          {/* Información de Contacto */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Información de Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-green-600 mr-3" size={24} />
                <span>contacto@plataforma.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-green-600 mr-3" size={24} />
                <span>+57 (324) 6763855</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Facebook size={28} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  <Linkedin size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Nuestra Ubicación
            </h3>
            <div className="flex items-center mb-3">
              <MapPin className="text-green-600 mr-3" size={24} />
              <span> Villavicencio Meta, Colombia</span>
            </div>
            {/* Mapa Integrado (Placeholder de Google Maps) */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.843300211244!2d-73.6268578!3d4.1422328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2a3f1dcab02d%3A0x3e2e9e7c8f526e07!2sVillavicencio%2C%20Meta%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1700442953554!5m2!1ses-419!2sco"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;