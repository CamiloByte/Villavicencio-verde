// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RegistroResiduos from './RegistroResiduos'; 
import EducacionAmbiental from './EducacionAmbiental'; 
import IniciarSesion from './IniciarSesion';
import UserPage from './UserPage';
import Registro from './Registro'; 
import Contacto from './Contacto';   // Importa la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro-residuos" element={<RegistroResiduos />} />
        <Route path="/EducacionAmbiental" element={<EducacionAmbiental />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuario" element={<UserPage />} />
        <Route path="/Contacto" element={<Contacto />} />



      </Routes>
    </Router>
  );
}

export default App;


