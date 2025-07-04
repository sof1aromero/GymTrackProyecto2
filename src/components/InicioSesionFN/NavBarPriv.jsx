import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaBars } from "react-icons/fa";
import "../../styles/InicioSesionFN/NavBarPriv.css";

const NavBarPriv = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tieneNotificaciones, setTieneNotificaciones] = useState(true);

  const toggleNotification = () => {
    setShowNotifications(!showNotifications);
    setTieneNotificaciones(false);
    setShowMenu(false); // Cierra menú si estaba abierto
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowNotifications(false); // Cierra notificaciones si estaban abiertas
  };

  return (
    <nav className="navbar-priv">
      <div className="navbar-logo">GYM TRACK</div>

      <div className="navbar-links">
        <Link to="/cliente/inicio" className="nav-link">Mis Servicios</Link>
        <Link to="/cliente/pagos" className="nav-link">Mis Pagos</Link>
      </div>

      <div className="navbar-icons">
        {/* 🔔 Notificación */}
        <div className="icon-wrapper" onClick={toggleNotification}>
          <FaBell className="icon" />
          {tieneNotificaciones && <span className="notification-dot" />}
          {showNotifications && (
            <div className="dropdown notificaciones">
              <p>No tienes notificaciones nuevas.</p>
            </div>
          )}
        </div>

        {/* ☰ Menú */}
        <div className="icon-wrapper" onClick={toggleMenu}>
          <FaBars className="icon" />
          {showMenu && (
            <div className="dropdown menu-flotante">
              <Link to="/cliente/inicio">Mis Servicios</Link>
              <Link to="/cliente/clases">Clases</Link>
              <Link to="/cliente/pagos">Pagos</Link>
              <Link to="/cliente/notificaciones">Notificaciones</Link>
              <Link to="/cliente/incidencias">Incidencias</Link>
              <Link to="/cliente/perfil">Perfil</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarPriv;
