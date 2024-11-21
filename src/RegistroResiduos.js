import React, { useState } from 'react';
import { Trash2, MapPin, Scale, Truck, MapIcon } from 'lucide-react';

const WasteManagement = () => {
  const [residuoData, setResiduoData] = useState({
    tipoResiduo: '',
    cantidad: '',
    unidad: 'kg',
    direccion: '',
  });

  const [puntosRecoleccion] = useState([
    {
      id: 1,
      nombre: "Centro de Reciclaje Central",
      direccion: "Av. Ecológica 123",
      tipos: ["Plástico", "Papel", "Cartón"],
    },
    {
      id: 2,
      nombre: "Estación Verde",
      direccion: "Calle Sostenible 456",
      tipos: ["Electrónicos", "Metales", "Vidrio"],
    },
  ]);

  const tiposResiduo = [
    "Plástico",
    "Papel",
    "Cartón",
    "Orgánico",
    "Electrónico",
    "Metal",
    "Vidrio",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResiduoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!residuoData.tipoResiduo || !residuoData.cantidad || !residuoData.direccion) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    console.log('Datos de Residuo:', residuoData);
    alert('Residuo registrado exitosamente.');
  };

  const solicitarRecolector = () => {
    alert('Recolector solicitado. Será contactado pronto.');
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Formulario de Registro de Residuos */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
            Registro de Residuos
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Selector de Tipo de Residuo */}
            <div className="relative">
              <Trash2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="tipoResiduo"
                value={residuoData.tipoResiduo}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Selecciona el tipo de residuo"
              >
                <option value="">Selecciona un tipo de residuo</option>
                {tiposResiduo.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Cantidad de Residuo */}
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  name="cantidad"
                  placeholder="Cantidad"
                  value={residuoData.cantidad}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Cantidad de residuo"
                />
              </div>
              <select
                name="unidad"
                value={residuoData.unidad}
                onChange={handleChange}
                className="w-24 px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Unidad de medida"
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
                <option value="g">g</option>
              </select>
            </div>

            {/* Dirección */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="direccion"
                placeholder="Dirección de recolección"
                value={residuoData.direccion}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Dirección de recolección"
              />
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              aria-label="Registrar residuo"
            >
              Registrar Residuo
            </button>
          </form>
        </div>

        {/* Puntos de Recolección */}
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
            <MapIcon className="mr-2" /> Puntos de Recolección
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.843300211244!2d-73.6268578!3d4.1422328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2a3f1dcab02d%3A0x3e2e9e7c8f526e07!2sVillavicencio%2C%20Meta%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1700442953554!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              aria-label="Mapa de puntos de recolección"
            ></iframe>
          </div>

          <div className="mt-4 space-y-2">
            {puntosRecoleccion.map((punto) => (
              <div key={punto.id} className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800">{punto.nombre}</h4>
                <p className="text-sm text-gray-600">{punto.direccion}</p>
                <p className="text-xs text-gray-500">Tipos: {punto.tipos.join(', ')}</p>
              </div>
            ))}
          </div>

          <button
            onClick={solicitarRecolector}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center mt-4"
            aria-label="Solicitar recolector"
          >
            <Truck className="mr-2" size={24} />
            Solicitar Recolector
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
