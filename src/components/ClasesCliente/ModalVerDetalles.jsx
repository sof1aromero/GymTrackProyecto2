// src/components/ClasesCliente/ModalVerDetalles.jsx
import React from "react";
import "../../styles/ClasesCliente/ModalVerDetalles.css";

const ModalVerDetalles = ({ clase, onClose }) => {
    if (!clase) return null;

    return (
        <div className="modal-verdetalles-overlay">
        <div className="modal-verdetalles-content">
            <button className="close-button" onClick={onClose}>✕</button>
            <h3>Detalles de la Clase</h3>
            <p><strong>Clase:</strong> {clase.nombre}</p>
            <p><strong>Fecha:</strong> {clase.horario}</p>
            <p><strong>Hora:</strong> {clase.horario.split(" - ")[1]}</p>
            <p><strong>Instructor:</strong> {clase.instructora}</p>
            <p><strong>Duración:</strong> 45 minutos</p>
            <p><strong>Lugar:</strong> Sala A</p>
            <p><strong>Estado:</strong> {clase.estado}</p>
        </div>
        </div>
    );
};

export default ModalVerDetalles;
