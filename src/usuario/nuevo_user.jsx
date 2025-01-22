import React, { useState } from 'react';
import './acciones.css';

const NuevoUser = () => {
  const [formData, setFormData] = useState({
    telefono: '',
    nombre: '',
    contraseña: '',
    confirmarContraseña: '',
    perfil: 'Usuario', // Perfil predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/crear_usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          telefono: formData.telefono,
          nombre: formData.nombre,
          contraseña: formData.contraseña,
          perfil: formData.perfil, // Incluye el perfil
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Usuario agregado exitosamente');
        setFormData({
          telefono: '',
          nombre: '',
          contraseña: '',
          confirmarContraseña: '',
          perfil: 'Usuario',
        });
      } else {
        alert(result.message || 'Error al agregar usuario');
      }
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      alert('Error al agregar usuario');
    }
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
        <div className="form-group">
          <label htmlFor="perfil">Perfil:</label>
          <select
            id="perfil"
            name="perfil"
            value={formData.perfil}
            onChange={handleChange}
            required
          >
            <option value="Usuario">Usuario</option>
            <option value="Jefe">Jefe</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <button type="submit" className="btn-enviar">
          Agregar Usuario
        </button>
      </form>
    </div>
  );
};

export default NuevoUser;
