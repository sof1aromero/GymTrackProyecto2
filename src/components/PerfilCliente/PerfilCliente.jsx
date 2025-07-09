import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PerfilCliente/PerfilCliente.css";

const PerfilCliente = () => {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Aquí puedes limpiar datos si estás usando localStorage, por ejemplo:
    // localStorage.removeItem("usuario");
    
    navigate("/iniciar-sesion"); // Cambia la ruta si tu login está en otra
  };

  return (
    <div className="perfil-cliente-container">
      <h2>Mi perfil</h2>

      <div className="perfil-info-box">
        <div className="perfil-item">
          <span>Juana Suarez</span>
        </div>

        <div className="perfil-item">
          <span>Cambiar contraseña</span>
          <button className="btn-azul">Actualizar</button>
        </div>

        <div className="perfil-item">
          <span>Actualizar datos personales</span>
          <button className="btn-azul">Actualizar</button>
        </div>

        <div className="perfil-item">
          <span>Cerrar sesión</span>
          <button className="btn-rojo" onClick={handleCerrarSesion}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilCliente;
