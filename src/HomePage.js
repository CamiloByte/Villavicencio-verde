// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import { Recycle, School, Phone } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();  // Usa useNavigate para la redirección

  const handleRegisterResiduos = () => {
    navigate('/registro-residuos');  // Redirige a la página de RegistroResiduos
  };

  const handleLogin = () => {
    navigate('/iniciar-sesion');  // Redirige a la página de Iniciar Sesión
  };

  const handleUser = () => {
    navigate('/usuario');  // Redirige a la página de Usuario
  };

  const handleEducacionAmbiental = () => {
    navigate('/EducacionAmbiental');  // Redirige a la página de Usuario
  };

  const handleContacto = () => {
    navigate('/Contacto');  // Redirige a la página de Usuario
  };



  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Encabezado con botones */}
      <header className="bg-green-600 text-white py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Villavicenio Verde</div>
        <div className="space-x-4">
          <button
            onClick={handleLogin}
            className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={handleUser}
            className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Usuario
          </button>
        </div>
      </header>

      {/* Banner Principal */}
      <div className="bg-green-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Villavicencio Verde: Transformando Residuos, Cuidando el Planeta</h1>
          <p className="text-xl mb-8">Cada residuo que reciclas es un paso hacia un futuro más sostenible</p>
        </div>
      </div>

      {/* Botones de Acceso Rápido */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
          <Recycle className="mx-auto text-green-600 mb-4" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Registrar Residuos</h2>
          <button
            onClick={handleRegisterResiduos}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Comenzar
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
          <School className="mx-auto text-blue-600 mb-4" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Educación Ambiental</h2>
          <button 
          onClick={handleEducacionAmbiental}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Aprender
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
          <Phone className="mx-auto text-purple-600 mb-4" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <button 
          onClick={handleContacto}
          className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
            Contáctanos
          </button>
        </div>
      </section>

      {/* Estadísticas Destacadas */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestro Impacto Ambiental</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-4xl font-bold text-green-600">100</span>
              <p className="text-lg">Toneladas de Residuos Reciclados</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-4xl font-bold text-blue-600">250</span>
              <p className="text-lg">Usuarios Activos</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-4xl font-bold text-purple-600">50</span>
              <p className="text-lg">Comunidades Impactadas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

