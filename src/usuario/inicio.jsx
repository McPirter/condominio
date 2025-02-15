import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inicio.css';
import Navbar from './navbar';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Navbar />
      <h1>¡Hola, bienvenido a la página de inicio!</h1>
    </div>
  );
};

export default Inicio;
