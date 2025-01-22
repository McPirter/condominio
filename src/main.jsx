import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Pagar from './pagar';
import Login from './usuario/login';
import Usuarios from './usuario/usuarios';
import NuevoUser from './usuario/nuevo_user';
import Pagos from './usuario/pagos';
import Multas from './usuario/multas';
import AgregarMulta from './usuario/agregarmulta';
import Permisos from './usuario/permisos';
import Condominio from './condominios/condominio';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/usuario/login" element={<Login />} />
        <Route path="/usuario/usuarios" element={<Usuarios />} />
        <Route path="/usuario/nuevo_user" element={<NuevoUser />} />
        <Route path="/usuario/pagos" element={<Pagos />} />
        <Route path="/usuario/multas" element={<Multas />} />
        <Route path="/usuario/agregarmulta" element={<AgregarMulta />} />
        <Route path="/usuario/permisos" element={<Permisos />} />
        <Route path="/condominios/condominio" element={<Condominio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
