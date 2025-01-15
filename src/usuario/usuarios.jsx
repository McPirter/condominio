import React from 'react';
import './usuario.css'; // Asegúrate de tener los estilos necesarios

const Usuarios = () => {
  const data = [
    { nombre: 'Edson Pérez', perfil: 'Administrador' },
    { nombre: 'Pancho López', perfil: 'Patron' },
    { nombre: 'Webos Ruiz', perfil: 'Usuario' },
  ]; // Datos de ejemplo para llenar la tabla

  const handleAgregar = () => {
    alert('Agregar nuevo usuario'); // Aquí puedes redirigir a un formulario o realizar otra acción
  };

  const handleEditar = (nombre) => {
    alert(`Editar usuario: ${nombre}`);
  };

  const handleEliminar = (nombre) => {
    alert(`Eliminar usuario: ${nombre}`);
  };

  return (
    <div className="usuarios-container">
      <h1>Gestión de Usuarios</h1>
      <button className="btn-agregar" onClick={handleAgregar}>Agregar</button>
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
              <td>{usuario.nombre}</td>
              <td>{usuario.perfil}</td>
              <td>
                <button
                  className="btn-accion"
                  onClick={() => handleEditar(usuario.nombre)}
                >
                  Editar
                </button>
                <button
                  className="btn-accion btn-eliminar"
                  onClick={() => handleEliminar(usuario.nombre)}
                >
                  Eliminar
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
