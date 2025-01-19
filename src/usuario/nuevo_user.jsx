import React, { useState } from 'react';
import './acciones.css';

const NuevoUser = () => {
  const [formData, setFormData] = useState({
    telefono: '',
    nombre: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Usuario agregado exitosamente');
    setFormData({ telefono: '', nombre: '', contraseña: '', confirmarContraseña: '' });
  };

  return (
    <div className="acciones-container">
      <h1>Agregar Nuevo Usuario</h1>
      <form className="form-nuevo-user" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="telefono">Número Telefónico:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmarContraseña"
            name="confirmarContraseña"
            value={formData.confirmarContraseña}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-enviar">
          Agregar Usuario
        </button>
      </form>
    </div>
  );
};

export default NuevoUser;
