import React from "react";
import "../../styles/Entrenador/DetallePagoModal.css";

const DetallePagoModal = ({ pago, onClose }) => {
  if (!pago) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-detalle">
        <h3>Detalle del Pago</h3>

        <div className="detalle-info">
          <p><strong>ID Factura:</strong> {pago.id}</p>
          <p><strong>Documento:</strong> {pago.documento}</p>
          <p><strong>Cliente:</strong> {pago.cliente}</p>
          <p><strong>Estado:</strong> {pago.estado}</p>
          <p><strong>Valor:</strong> ${pago.valor.toLocaleString()}</p>
          <p><strong>Fecha:</strong> {pago.fecha}</p>
          <p><strong>Método de Pago:</strong> {pago.metodoPago}</p>
        </div>

        <button className="btn-cerrar" onClick={onClose}>
          Cerrar
        </button>
<button
  className="descargar-btn"
  onClick={() => {
    alert("✅ Factura descargada correctamente");
  }}
>
  Descargar Factura PDF
</button>
      </div>
    </div>
  );
};

export default DetallePagoModal;
