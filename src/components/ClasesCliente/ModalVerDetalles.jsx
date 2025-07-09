import React from "react";
import "../../styles/ClasesCliente/ModalVerDetalles.css";

const ModalVerDetalles = ({ clase, onClose }) => {
  if (!clase) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-detalles">
        <h3>Detalles de la clase</h3>
        <p><strong>Nombre:</strong> {clase.nombre}</p>
        <p><strong>Fecha:</strong> {clase.fecha}</p>
        <p><strong>Hora:</strong> {clase.hora}</p>
        <p><strong>Instructora:</strong> {clase.instructora}</p>
        <p><strong>Duración:</strong> {clase.duracion}</p>
        <p><strong>Lugar:</strong> {clase.lugar}</p>
        <p><strong>Estado:</strong> {clase.estado}</p>
        <div className="btn-detalles-container">
          <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalVerDetalles;
