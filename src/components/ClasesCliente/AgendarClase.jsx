import React from "react";
import "../../styles/ClasesCliente/AgendarClase.css";
import { useNavigate } from "react-router-dom";

const AgendarClase = () => {
  const navigate = useNavigate();

  return (
    <div className="agendar-clase-container">
      <div className="card-agendar">
        <h2>Spinning</h2>
        <p>Instructora: Ana Lopez</p>
        <p>Duración: 45 minutos</p>

        <button
          className="btn-ver-horarios"
          onClick={() => navigate("/cliente/clases/spinning-horarios")}
        >
          Ver horarios
        </button>
      </div>

      <div className="volver-clases">
        <button
          className="btn-volver-clases"
          onClick={() => navigate("/cliente/clases")}
        >
          Volver a Clases
        </button>
      </div>
    </div>
  );
};

export default AgendarClase;