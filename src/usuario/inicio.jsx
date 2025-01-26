import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './inicio.css';

const Inicio = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      // Redirigir al login si no hay un userId en el localStorage
      navigate('./login');
    } else {
      const fetchNotifications = async () => {
        try {
          const response = await fetch(`https://apicondominio-p4vc.onrender.com/api/notificaciones/${userId}`);
          const result = await response.json();

          if (Array.isArray(result)) {
            setNotificaciones(result);
          } else {
            setNotificaciones([]);
          }
        } catch (error) {
          console.error('Error al obtener notificaciones:', error);
        }
      };

      fetchNotifications();

      const interval = setInterval(fetchNotifications, 5000); // Revisar cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [userId, navigate]);

  const toggleNotifications = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const handleDeleteNotification = async (notificacionId) => {
    try {
      await fetch(`https://apicondominio-p4vc.onrender.com/api/notificaciones/${notificacionId}`, { method: 'PUT' });
      setNotificaciones((prev) => prev.filter((notif) => notif._id !== notificacionId));
    } catch (error) {
      console.error('Error al marcar notificación como leída:', error);
    }
  };

  return (
    <div className="inicio-container">
      <h1>¡Hola, bienvenido a la página de inicio!</h1>

      <div className="notifications-container">
        <button className="notifications-toggle" onClick={toggleNotifications}>
          {isNotificationOpen ? 'Cerrar Notificaciones' : 'Abrir Notificaciones'}
        </button>

        {isNotificationOpen && (
          <div className="notifications-panel">
            <h2>Notificaciones</h2>
            <ul>
              {notificaciones.map((notificacion) => (
                <li key={notificacion._id}>
                  {notificacion.mensaje}
                  <button onClick={() => handleDeleteNotification(notificacion._id)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inicio;
