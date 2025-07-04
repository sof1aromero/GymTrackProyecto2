import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaBars } from "react-icons/fa";
import "../../styles/InicioSesionFN/NavBarPriv.css";

const NavBarPriv = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tieneNotificaciones, setTieneNotificaciones] = useState(true); // 🔴 Punto rojo

  const toggleNotification = () => {
    setShowNotifications(!showNotifications);
    setTieneNotificaciones(false); // Oculta 🔴 al abrir
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
            <div className="dropdown">
              <p>No tienes notificaciones nuevas.</p>
            </div>
          )}
        </div>

        {/* ☰ Menú */}
        <div className="icon-wrapper" onClick={toggleMenu}>
          <FaBars className="icon" />
          {showMenu && (
            <div className="dropdown">
              <Link to="/cliente/perfil">Perfil</Link>
              <Link to="/cliente/configuracion">Configuración</Link>
              <Link to="/logout">Cerrar sesión</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarPriv;
