import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/InicioSesionFN/MenuFlotante.css";

const MenuFlotante = ({ show }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="menu-flotante">
      <ul>
        <li onClick={() => navigate("/cliente/inicio")}>Mis Servicios</li>
        <li onClick={() => navigate("/cliente/clases")}>Clases</li>
        <li onClick={() => navigate("/cliente/pagos")}>Pagos</li>
        <li onClick={() => navigate("/cliente/notificaciones")}>Notificaciones</li>
        <li onClick={() => navigate("/cliente/incidencias")}>Incidencias</li>
        <li onClick={() => navigate("/cliente/perfil")}>Perfil</li>
      </ul>
    </div>
  );
};

export default MenuFlotante;
