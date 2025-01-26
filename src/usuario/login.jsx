import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './usuario.css';

const Login = () => {
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita recargar la página
  
    try {
      const response = await fetch('https://apicondominio-p4vc.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telefono, contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el userId en localStorage
        console.log(data);  // Verifica que el userId se reciba correctamente
        localStorage.setItem('userId', data.userId);
  
        // Redirigir según el perfil
        if (data.perfil === 'Administrador') {
          navigate('/usuario/usuarios'); // Página de Administrador
        } else {
          navigate('/usuario/inicio'); // Página de Usuario o Jefe
        }
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="telefono">Num. telefónico:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
