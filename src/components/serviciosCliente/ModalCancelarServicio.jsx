import React from "react";
import "../../styles/serviciosCliente/ModalCancelarServicio.css";

const ModalCancelarServicio = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>¿Estás seguro que deseas cancelar este servicio?</h3>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>No</button>
          <button className="confirm-btn" onClick={onConfirm}>Sí, cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelarServicio;
