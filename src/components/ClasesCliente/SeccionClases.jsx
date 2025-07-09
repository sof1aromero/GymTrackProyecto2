import React from "react";
import { useNavigate } from "react-router-dom";
import "../..//styles/ClasesCliente/SeccionClases.css";

const SeccionClases = () => {
  const navigate = useNavigate();

  return (
    <div className="clases-wrapper"> {/* 🔹 Contenedor general */}
      <h2>Sección de clases</h2>

      <div className="clases-grid">
        <div className="clase-card">
          <h3>Agendar nueva clase</h3>
          <p>Reserva una clase disponible según tu horario y preferencia.</p>
          <button onClick={() => navigate("/cliente/agendar")}>
            Agendar
          </button>
        </div>

        <div className="clase-card">
          <h3>Ver mis clases</h3>
          <p>Consulta las clases que ya tienes reservadas.</p>
          <button onClick={() => navigate("/cliente/mis-clases")}>
            Ver clases
          </button>
        </div>

        <div className="clase-card">
          <h3>Ver historial</h3>
          <p>Mira las clases que ya tomaste o cancelaste.</p>
          <button onClick={() => navigate("/cliente/historial")}>
            Ver historial
          </button>
        </div>

        <div className="clase-card">
          <h3>Ver horario de clases</h3>
          <p>Consulta los horarios disponibles en el calendario semanal.</p>
          <button onClick={() => navigate("/cliente/horario")}>
            Ver horario
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeccionClases;
