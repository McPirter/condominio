import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './usuario/login';
import Usuarios from './usuario/usuarios'; // Importa el archivo usuarios.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/usuario/login" element={<Login />} />
        <Route path="/usuario/usuarios" element={<Usuarios />} /> {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
