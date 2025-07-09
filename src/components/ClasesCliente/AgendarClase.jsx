import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ClasesCliente/AgendarClase.css";
import VerHorariosClase from "./VerHorariosClase";

const AgendarClase = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="agendar-clase-container">
      <div className="agendar-card">
        <h2>Spinning</h2>
        <p className="info">Instructora: Ana López</p>
        <p className="info">Duración: 45 minutos</p>
        <button className="btn-gradiente" onClick={() => setMostrarModal(true)}>
          Ver horarios
        </button>
      </div>

      <div className="volver-clases-container">
        <button
          className="btn-gradiente-claro"
          onClick={() => navigate("/cliente/clases")}
        >
          Volver a Clases
        </button>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <VerHorariosClase cerrarModal={() => setMostrarModal(false)} />
      )}
    </div>
  );
};

export default AgendarClase;
