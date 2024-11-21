import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de usar react-router-dom para la navegación

const UserLogin = () => {
  const [loginData, setLoginData] = useState({
    correo: '',
    contrasena: '',
  });
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Datos de inicio de sesión:', loginData);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de Correo */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={loginData.correo}
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
              value={loginData.contrasena}
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
          {/* Botón de Inicio de Sesión */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
        {/* Botón para Registro */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            ¿No tienes una cuenta?
          </p>
          <button
            onClick={() => navigate('/Registro')}
            className="mt-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
