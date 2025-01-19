import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import './usuario.css';

const Login = () => {
  const navigate = useNavigate(); // Inicializa el hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    navigate('/usuario/usuarios'); // Redirige a la página de usuarios
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="telefono">Num. telefónico:</label>
          <input type="text" id="telefono" name="telefono" required />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
