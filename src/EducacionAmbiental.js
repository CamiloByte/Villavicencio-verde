import React, { useState } from 'react';
import { Book, Video, FileText, Calendar, Trophy, CheckCircle } from 'lucide-react';

const EnvironmentalEducation = () => {
  // Estado para secciones y quiz
  const [seccionActiva, setSeccionActiva] = useState('recursos');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [quizCompletado, setQuizCompletado] = useState(false);

  // Recursos educativos
  const recursos = [
    {
      id: 1,
      titulo: "Introducción al Reciclaje",
      tipo: "articulo",
      descripcion: "Guía completa sobre conceptos básicos de reciclaje",
      duracion: "15 min"
    },
    {
      id: 2,
      titulo: "Separación Correcta de Residuos",
      tipo: "video",
      descripcion: "Tutorial paso a paso para separar residuos",
      duracion: "10 min"
    },
    {
      id: 3,
      titulo: "Impacto del Reciclaje",
      tipo: "infografia",
      descripcion: "Datos visuales sobre el impacto ambiental",
      duracion: "5 min"
    }
  ];

  // Eventos ambientales
  const eventosAmbientales = [
    {
      id: 1,
      nombre: "Limpieza de Parque Metropolitano",
      fecha: "15 Junio 2024",
      lugar: "Parque Central",
      descripcion: "Jornada de limpieza y concientización"
    },
    {
      id: 2,
      nombre: "Taller de Compostaje",
      fecha: "22 Junio 2024",
      lugar: "Centro Comunitario",
      descripcion: "Aprende a crear compost en casa"
    }
  ];

  // Preguntas del Quiz
  const preguntasQuiz = [
    {
      id: 1,
      pregunta: "¿Qué residuos van en el contenedor azul?",
      opciones: ["Papel y cartón", "Restos de comida", "Vidrio", "Plásticos"],
      respuestaCorrecta: "Papel y cartón"
    },
    {
      id: 2,
      pregunta: "¿Cómo se debe lavar un envase antes de reciclarlo?",
      opciones: [
        "No es necesario lavarlo", 
        "Lavarlo con agua y jabón", 
        "Enjuagar rápidamente", 
        "Dejarlo secar sin lavar"
      ],
      respuestaCorrecta: "Enjuagar rápidamente"
    }
  ];

  const handleRespuestaQuiz = (preguntaId, respuesta) => {
    setQuizRespuestas({
      ...quizRespuestas,
      [preguntaId]: respuesta
    });
  };

  const finalizarQuiz = () => {
    const respuestasCorrectas = preguntasQuiz.filter(
      pregunta => quizRespuestas[pregunta.id] === pregunta.respuestaCorrecta
    ).length;

    alert(`Quiz completado. ${respuestasCorrectas} de ${preguntasQuiz.length} respuestas correctas`);
    setQuizCompletado(true);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Educación Ambiental
        </h1>

        {/* Navegación de Secciones */}
        <div className="flex justify-center mb-8 space-x-4">
          {[
            { id: 'recursos', icono: Book, texto: 'Recursos' },
            { id: 'quiz', icono: Trophy, texto: 'Quiz' },
            { id: 'eventos', icono: Calendar, texto: 'Eventos' }
          ].map(seccion => (
            <button
              key={seccion.id}
              onClick={() => setSeccionActiva(seccion.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition ${
                seccionActiva === seccion.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-700 hover:bg-green-100'
              }`}
            >
              <seccion.icono className="mr-2" size={20} />
              {seccion.texto}
            </button>
          ))}
        </div>

        {/* Sección de Recursos */}
        {seccionActiva === 'recursos' && (
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map(recurso => (
              <div 
                key={recurso.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                {recurso.tipo === 'articulo' && <FileText className="text-blue-500 mb-4" size={40} />}
                {recurso.tipo === 'video' && <Video className="text-red-500 mb-4" size={40} />}
                <h3 className="font-bold text-xl mb-2">{recurso.titulo}</h3>
                <p className="text-gray-600 mb-4">{recurso.descripcion}</p>
                <span className="text-sm text-gray-500">Duración: {recurso.duracion}</span>
              </div>
            ))}
          </div>
        )}

        {/* Sección de Quiz */}
        {seccionActiva === 'quiz' && (
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-green-800">
              Quiz de Separación de Residuos
            </h2>
            {preguntasQuiz.map(pregunta => (
              <div key={pregunta.id} className="mb-6">
                <p className="font-semibold mb-4">{pregunta.pregunta}</p>
                <div className="space-y-2">
                  {pregunta.opciones.map(opcion => (
                    <label 
                      key={opcion} 
                      className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-green-50"
                    >
                      <input
                        type="radio"
                        name={`pregunta-${pregunta.id}`}
                        value={opcion}
                        checked={quizRespuestas[pregunta.id] === opcion}
                        onChange={() => handleRespuestaQuiz(pregunta.id, opcion)}
                        className="form-radio text-green-600"
                      />
                      <span>{opcion}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={finalizarQuiz}
              disabled={Object.keys(quizRespuestas).length !== preguntasQuiz.length}
              className={`w-full py-3 rounded-lg transition ${
                Object.keys(quizRespuestas).length === preguntasQuiz.length
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {quizCompletado ? 'Quiz Completado' : 'Finalizar Quiz'}
            </button>
          </div>
        )}

        {/* Sección de Eventos */}
        {seccionActiva === 'eventos' && (
          <div className="grid md:grid-cols-2 gap-6">
            {eventosAmbientales.map(evento => (
              <div 
                key={evento.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <Calendar className="text-green-500 mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">{evento.nombre}</h3>
                <p className="text-gray-600 mb-2">{evento.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-semibold">{evento.fecha}</span>
                  <span className="text-gray-500">{evento.lugar}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentalEducation;