import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './usuario.css';
import ProtectedRoute from './protect';
const Login = () => {
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://apicondominio-p4vc.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telefono, contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Respuesta del backend:", data);
        // Se espera que el backend retorne { message, token, userId, perfil }
        // Guarda userId y token en localStorage para facilitar su acceso
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('token', data.token);

        console.log("userId guardado en localStorage:", data.userId);
        console.log("token guardado en localStorage:", data.token);

        // Redirigir según el perfil
        if (data.perfil === 'Administrador') {
          navigate('/usuario/usuarios');
        } else {
          navigate('/usuario/inicio');
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
