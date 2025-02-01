import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Trash } from "lucide-react"; // Ícono de campana y eliminar

const Navbar = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del panel
  const userId = localStorage.getItem("userId");

  useEffect(() => {
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
        console.error("Error al obtener notificaciones:", error);
      }
    };

    if (userId) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 5000);
      return () => clearInterval(interval);
    }
  }, [userId]);

  // Función para eliminar notificaciones
  const handleDeleteNotification = async (notificacionId) => {
    try {
      await fetch(`https://apicondominio-p4vc.onrender.com/api/notificaciones/${notificacionId}`, {
        method: "PUT",
      });
      setNotificaciones((prev) => prev.filter((notif) => notif._id !== notificacionId));
    } catch (error) {
      console.error("Error al marcar notificación como leída:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">🏠 Condominio</div>
      <ul className="nav-links">
        <li><Link to="/usuario/inicio">Inicio</Link></li>
        <li><Link to="/usuario/multauser">Multas</Link></li>
        <li><Link to="/usuario/permisouser">Permisos</Link></li>
      </ul>
      <div className="notifications">
        {/* Ícono de campana con contador */}
        <div className="bell-container" onClick={() => setIsOpen(!isOpen)}>
          <Bell className={`notification-icon ${notificaciones.length > 0 ? "new-notification" : ""}`} />
          {notificaciones.length > 0 && <span className="badge">{notificaciones.length}</span>}
        </div>

        {/* Panel de notificaciones */}
        {isOpen && (
          <div className="notifications-panel">
            <h3>Notificaciones</h3>
            {notificaciones.length === 0 ? (
              <p>No hay notificaciones</p>
            ) : (
              <ul>
                {notificaciones.map((notif) => (
                  <li key={notif._id} className="notification-item">
                    <span>{notif.mensaje}</span>
                    <button className="delete-btn" onClick={() => handleDeleteNotification(notif._id)}>
                      <Trash size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
