import React from "react";
import "../../styles/Entrenador/DetallePagoModal.css";

const DetallePagoModal = ({ pago, onClose }) => {
  if (!pago) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-detalle">
        <h2>Detalles del Pago</h2>
        <div className="detalle-info">
          <p><strong>Documento:</strong> {pago.documento}</p>
          <p><strong>Nombre:</strong> {pago.nombre}</p>
          <p><strong>Monto:</strong> ${pago.monto}</p>
          <p><strong>Estado:</strong> {pago.estado}</p>
          <p><strong>Fecha de Inicio del Pago:</strong> {pago.fecha}</p>
          <p><strong>Fecha de Vencimiento del Pago:</strong> {pago.fecha}</p>
          <p><strong>Método de Pago:</strong> {pago.metodo}</p>
        </div>
        <div className="modal-buttons">
          <button className="cerrar-btn" onClick={onClose}>Cerrar</button>
          <button className="descargar-btn">Descargar Factura PDF</button>
        </div>
      </div>
    </div>
  );
};

export default DetallePagoModal;