import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="nav-center">
          <button className="nav-item">
            <img src="src/imagenes/ubicacion.png" alt="Ubicación" className="nav-icon" />
            <span>Ubicación</span>
          </button>
          <button className="nav-item">
            <img src="src/imagenes/condominio.png" alt="Condominios" className="nav-icon" />
            <span>Condominios</span>
          </button>
          <button className="nav-item">
            <img src="src/imagenes/servicios.png" alt="Servicios" className="nav-icon" />
            <span>Servicios</span>
          </button>
        </div>
        {/* Enlace al login */}
        <Link to="/usuario/login" className="profile-icon">
          <img src="src/imagenes/usuario.png" alt="Perfil" />
          <span>Perfil</span>
        </Link>
      </header>

      {/* Cuerpo Principal */}
      <main className="main-content">
        <img
          src="src/imagenes/fondo.jpg"
          alt="Condominios"
          className="condo-image"
        />
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default App;
