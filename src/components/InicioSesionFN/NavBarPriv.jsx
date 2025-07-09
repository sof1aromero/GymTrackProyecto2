import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaBars } from "react-icons/fa";
import Notificaciones from "../Notificaciones/Notificaciones"; // Importa el componente
import "../../styles/InicioSesionFN/NavBarPriv.css";

const NavBarPriv = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tieneNotificaciones, setTieneNotificaciones] = useState(true);

  // Lista de notificaciones de ejemplo
  const notificaciones = [
    {
      id: 1,
      titulo: "Clase de spinning",
      detalle: "Hoy a las 11:00 a.m.",
      tiempo: "Hace 30 minutos",
    },
    {
      id: 2,
      titulo: "Pago pendiente",
      detalle: "Servicio con vencimiento el 28 de junio",
      tiempo: "Hace 2 días",
    },
  ];

  const toggleNotification = () => {
    setShowNotifications(!showNotifications);
    setTieneNotificaciones(false);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowNotifications(false);
  };

  return (
    <nav className="navbar-priv">
      <div className="navbar-logo">GYM TRACK</div>

      <div className="navbar-links">
        <Link to="/cliente" className="nav-link">Mis Servicios</Link>
        <Link to="/cliente/pagos" className="nav-link">Mis Pagos</Link>
      </div>

      <div className="navbar-icons">
        {/* 🔔 Ícono de notificaciones */}
        <div className="icon-wrapper" onClick={toggleNotification}>
          <FaBell className="icon" />
          {tieneNotificaciones && <span className="notification-dot" />}
          {showNotifications && (
            <Notificaciones
              notificaciones={notificaciones}
              onClose={() => setShowNotifications(false)}
            />
          )}
        </div>

        {/* ☰ Menú lateral */}
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
