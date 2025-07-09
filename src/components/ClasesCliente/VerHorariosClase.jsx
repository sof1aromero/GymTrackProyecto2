// src/components/ClasesCliente/VerHorariosClase.jsx
import React, { useState } from "react";
import "../../styles/ClasesCliente/VerHorariosClase.css";
import { useNavigate } from "react-router-dom";

const VerHorariosClase = () => {
  const navigate = useNavigate();
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const horarios = {
    hoy: [
      { hora: "9:00 a.m.", disponible: true },
      { hora: "10:00 a.m.", disponible: false },
      { hora: "11:00 a.m.", disponible: true },
    ],
    manana: [
      { hora: "9:00 a.m.", disponible: true },
      { hora: "10:00 a.m.", disponible: true },
      { hora: "11:00 a.m.", disponible: false },
    ],
  };

  const seleccionarHorario = (dia, hora, disponible) => {
    if (disponible) {
      setDiaSeleccionado(dia);
      setHorarioSeleccionado(hora);
    }
  };

  const reservar = () => {
    if (horarioSeleccionado && diaSeleccionado) {
      const fecha = diaSeleccionado === "hoy" ? "10 junio" : "11 junio";
      const nuevaClase = {
        id: Date.now(),
        nombre: "Spinning",
        instructora: "Ana López",
        horario: `${fecha} - ${horarioSeleccionado}`,
        estado: "Programada",
      };

      const clasesGuardadas = JSON.parse(localStorage.getItem("clasesReservadas")) || [];
      const nuevasClases = [...clasesGuardadas, nuevaClase];

      localStorage.setItem("clasesReservadas", JSON.stringify(nuevasClases));
      navigate("/cliente/mis-clases");
    } else {
      alert("Por favor selecciona un horario disponible.");
    }
  };

  const cerrarModal = () => {
    navigate("/cliente/clases/agendar");
  };

  return (
    <div className="modal-overlay">
      <div className="ver-horarios-modal">
        <button className="close-button" onClick={cerrarModal}>✕</button>
        <h3>Selecciona un horario – Spinning</h3>

        <div className="horarios-grid">
          <div className="horario-col">
            <h4>Hoy (10 junio)</h4>
            {horarios.hoy.map(({ hora, disponible }) => (
              <button
                key={`hoy-${hora}`}
                className={`horario-opcion ${diaSeleccionado === "hoy" && horarioSeleccionado === hora ? "selected" : ""} ${!disponible ? "disabled" : ""}`}
                onClick={() => seleccionarHorario("hoy", hora, disponible)}
                disabled={!disponible}
              >
                {hora}{!disponible && " (Sin cupo)"}
              </button>
            ))}
          </div>

          <div className="horario-col">
            <h4>Mañana (11 junio)</h4>
            {horarios.manana.map(({ hora, disponible }) => (
              <button
                key={`manana-${hora}`}
                className={`horario-opcion ${diaSeleccionado === "manana" && horarioSeleccionado === hora ? "selected" : ""} ${!disponible ? "disabled" : ""}`}
                onClick={() => seleccionarHorario("manana", hora, disponible)}
                disabled={!disponible}
              >
                {hora}{!disponible && " (Sin cupo)"}
              </button>
            ))}
          </div>
        </div>

        <button className="reservar-btn" onClick={reservar}>Reservar clase</button>
      </div>
    </div>
  );
};

export default VerHorariosClase;
