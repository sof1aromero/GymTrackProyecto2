// src/components/ClasesCliente/VerHistorial.jsx
import React from "react";
import "../../styles/ClasesCliente/VerHistorial.css";
import { useNavigate } from "react-router-dom";

const VerHistorial = () => {
    const navigate = useNavigate();

    const clasesHistorial = [
        {
        id: 1,
        nombre: "Spinning",
        instructora: "Ana López",
        horario: "8 julio - 9:00 a.m.",
        estado: "Finalizada"
        },
        {
        id: 2,
        nombre: "Boxeo",
        instructora: "Carlos Pérez",
        horario: "7 julio - 6:00 p.m.",
        estado: "Cancelada"
        }
    ];

    return (
        <div className="ver-historial-container">
        <h2>Historial de Clases</h2>

        {clasesHistorial.length === 0 ? (
            <p className="mensaje-vacio">No tienes clases en el historial.</p>
        ) : (
            <div className="historial-lista">
            {clasesHistorial.map((clase) => (
                <div className="clase-item" key={clase.id}>
                <h3>{clase.nombre}</h3>
                <p><strong>Instructora:</strong> {clase.instructora}</p>
                <p><strong>Horario:</strong> {clase.horario}</p>
                <span className={`estado ${clase.estado.toLowerCase()}`}>
                    {clase.estado}
                </span>
                </div>
            ))}
            </div>
        )}

        {/* 🔙 Botón de volver */}
        <div className="volver-btn-container">
            <button className="btn-volver" onClick={() => navigate("/cliente/clases")}>
            Volver a Clases
            </button>
        </div>
        </div>
    );
};

export default VerHistorial;
