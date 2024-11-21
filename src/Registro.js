import React, { useState } from 'react';
import { User, Mail, Lock, MapPin, Phone } from 'lucide-react';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    direccion: '',
    telefono: '',
    tipoUsuario: 'ciudadano'
  });

  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Datos de registro:', formData);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Registro de Usuario
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selector de Tipo de Usuario */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Tipo de Usuario
            </label>
            <div className="flex justify-between">
              {['ciudadano', 'reciclador', 'empresa'].map((tipo) => (
                <label key={tipo} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tipoUsuario"
                    value={tipo}
                    checked={formData.tipoUsuario === tipo}
                    onChange={handleChange}
                    className="form-radio text-green-600"
                  />
                  <span className="ml-2 capitalize">{tipo}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Campo de Nombre */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Campo de Correo */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={mostrarContrasena ? "text" : "password"}
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              type="button"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          {/* Campo de Dirección */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Campo de Teléfono */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Registrarse
          </button>
        </form>

        {/* Enlace para Iniciar Sesión */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta? {' '}
            <a href="/iniciar-sesion" className="text-green-600 font-bold hover:underline">
              Iniciar Sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;