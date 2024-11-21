import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Phone, 
  Edit, 
  Save, 
  Trash2, 
  Award, 
  BarChart2, 
  Leaf 
} from 'lucide-react';

const UserProfile = () => {
  // Estado de información personal
  const [perfil, setPerfil] = useState({
    nombre: "Cristian Camilo Aranda Sandoval",
    correo: "ccaranda.sandoval@gmail.com",
    direccion: "Av. Ecológica 456, Meta",
    telefono: "+57 3005552635",
    tipoUsuario: "Ciudadano"
  });

  // Estado para edición
  const [modoEdicion, setModoEdicion] = useState(false);

  // Historial de residuos
  const [historialResiduos, setHistorialResiduos] = useState([
    {
      id: 1,
      fecha: "15 May 2024",
      tipo: "Plástico",
      cantidad: 5.2,
      unidad: "kg",
      puntos: 10
    },
    {
      id: 2,
      fecha: "22 May 2024",
      tipo: "Papel",
      cantidad: 3.8,
      unidad: "kg",
      puntos: 7
    }
  ]);

  // Sistema de puntos
  const [puntos, setPuntos] = useState({
    total: 217,
    nivel: "Eco Héroe",
    progreso: 65
  });

  // Niveles de puntos
  const nivelesEcoHeroes = [
    { nombre: "Aprendiz Verde", minimo: 0 },
    { nombre: "Eco Aspirante", minimo: 100 },
    { nombre: "Eco Héroe", minimo: 200 },
    { nombre: "Guardián Ambiental", minimo: 500 }
  ];

  const handleEditarPerfil = () => {
    setModoEdicion(!modoEdicion);
  };

  const handleCambioInput = (e) => {
    const { name, value } = e.target;
    setPerfil(prevPerfil => ({
      ...prevPerfil,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Columna de Información Personal */}
        <div className="md:col-span-1 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Mi Perfil</h2>
            <button 
              onClick={handleEditarPerfil}
              className="text-green-600 hover:text-green-800 transition"
            >
              {modoEdicion ? <Save size={24} /> : <Edit size={24} />}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <User className="text-gray-500 mr-3" />
              {modoEdicion ? (
                <input
                  type="text"
                  name="nombre"
                  value={perfil.nombre}
                  onChange={handleCambioInput}
                  className="w-full border rounded-lg px-3 py-2"
                />
              ) : (
                <span>{perfil.nombre}</span>
              )}
            </div>

            <div className="flex items-center">
              <Mail className="text-gray-500 mr-3" />
              {modoEdicion ? (
                <input
                  type="email"
                  name="correo"
                  value={perfil.correo}
                  onChange={handleCambioInput}
                  className="w-full border rounded-lg px-3 py-2"
                />
              ) : (
                <span>{perfil.correo}</span>
              )}
            </div>

            <div className="flex items-center">
              <MapPin className="text-gray-500 mr-3" />
              {modoEdicion ? (
                <input
                  type="text"
                  name="direccion"
                  value={perfil.direccion}
                  onChange={handleCambioInput}
                  className="w-full border rounded-lg px-3 py-2"
                />
              ) : (
                <span>{perfil.direccion}</span>
              )}
            </div>

            <div className="flex items-center">
              <Phone className="text-gray-500 mr-3" />
              {modoEdicion ? (
                <input
                  type="tel"
                  name="telefono"
                  value={perfil.telefono}
                  onChange={handleCambioInput}
                  className="w-full border rounded-lg px-3 py-2"
                />
              ) : (
                <span>{perfil.telefono}</span>
              )}
            </div>

            <div className="flex items-center">
              <Leaf className="text-gray-500 mr-3" />
              <span>{perfil.tipoUsuario}</span>
            </div>
          </div>
        </div>

        {/* Columna de Historial y Puntos */}
        <div className="md:col-span-2 space-y-6">
          {/* Sistema de Puntos */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-green-800 flex items-center">
                <Award className="mr-3 text-yellow-500" /> 
                Sistema de Puntos
              </h3>
              <div className="text-green-700 font-semibold">
                {puntos.total} Puntos
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{puntos.nivel}</span>
                <span>{puntos.progreso}%</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{width: `${puntos.progreso}%`}}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {nivelesEcoHeroes.map((nivel, index) => (
                <div 
                  key={index}
                  className={`p-2 rounded-lg text-center ${
                    puntos.total >= nivel.minimo 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {nivel.nombre}
                </div>
              ))}
            </div>
          </div>

          {/* Historial de Residuos */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <BarChart2 className="mr-3 text-blue-500" /> 
              Historial de Residuos
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="p-3 text-left">Fecha</th>
                    <th className="p-3 text-left">Tipo</th>
                    <th className="p-3 text-left">Cantidad</th>
                    <th className="p-3 text-left">Puntos</th>
                    <th className="p-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {historialResiduos.map(residuo => (
                    <tr key={residuo.id} className="border-b hover:bg-green-50">
                      <td className="p-3">{residuo.fecha}</td>
                      <td className="p-3">{residuo.tipo}</td>
                      <td className="p-3">
                        {residuo.cantidad} {residuo.unidad}
                      </td>
                      <td className="p-3">{residuo.puntos}</td>
                      <td className="p-3 text-right">
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;