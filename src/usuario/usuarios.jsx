import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './usuario.css';

const Usuarios = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const data = [
    { nombre: 'Edson Pérez', perfil: 'Administrador' },
    { nombre: 'Pancho López', perfil: 'Jefe' },
    { nombre: 'Webos Ruiz', perfil: 'Usuario' },
  ];

  const handleAgregar = () => {
    navigate('/usuario/nuevo_user'); // Navega a nuevo_user.jsx
  };

  const handlePagos = () => {
    navigate('/usuario/pagos'); // Navega a pagos.jsx
  };

  const handleMultas = () => {
    navigate('/usuario/multas'); // Navega a multas.jsx
  };

  const handlePermisos = () => {
    navigate('/usuario/permisos'); // Navega a permisos.jsx
  };

  return (
    <div className="usuarios-container">
      <h1>Gestión de Usuarios</h1>
      <button className="btn-agregar" onClick={handleAgregar}>
        <img src="/src/imagenes/mas.png" alt="Agregar" className="btn-icon" />
        Agregar
      </button>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Perfil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario, index) => (
            <tr key={index}>
              <td className="tabla-texto">{usuario.nombre}</td>
              <td className="tabla-texto">{usuario.perfil}</td>
              <td>
                <button className="btn-accion" onClick={handlePagos}>
                  <img src="/src/imagenes/pago.png" alt="Pagos" className="btn-icon" />
                  Pagos
                </button>
                <button className="btn-accion btn-multas" onClick={handleMultas}>
                  <img src="/src/imagenes/multa.png" alt="Multas" className="btn-icon" />
                  Multas
                </button>
                <button className="btn-accion btn-permisos" onClick={handlePermisos}>
                  <img src="/src/imagenes/permiso.png" alt="Permisos" className="btn-icon" />
                  Permisos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
