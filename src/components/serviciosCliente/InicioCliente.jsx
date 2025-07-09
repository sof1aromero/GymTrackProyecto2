// src/components/serviciosCliente/InicioCliente.jsx
import React, { useState } from "react";
import "../../styles/serviciosCliente/InicioClienteServicios.css";
import { useNavigate } from "react-router-dom";
import ModalCancelarServicio from "./ModalCancelarServicio";

const InicioCliente = () => {
  const navigate = useNavigate();

  const [servicios, setServicios] = useState({
    spinning: {
      title: "Spinning",
      statusColor: "green",
      statusText: "Activo",
      startDate: "2025-06-18",
      nextPayment: "2025-07-18",
      price: "$80.000 mensual",
      action: "pagar",
    },
    gymLibre: {
      title: "Gym Libre",
      statusColor: "yellow",
      statusText: "Pago pendiente",
      startDate: "2025-06-10",
      nextPayment: "2025-07-10",
      price: "$110.000 mensual",
      action: "pagar",
    },
    pilates: {
      title: "Gym Pilates",
      statusColor: "red",
      statusText: "Cancelado",
      price: "$90.000 mensual",
      action: "reactivar",
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [detalleServicio, setDetalleServicio] = useState(null); // <- Modal Detalles

  const handleCancelarClick = (key) => {
    setServicioSeleccionado(key);
    setShowModal(true);
  };

  const confirmarCancelacion = () => {
    setServicios((prev) => ({
      ...prev,
      [servicioSeleccionado]: {
        ...prev[servicioSeleccionado],
        statusText: "Cancelado",
        statusColor: "red",
        action: "reactivar",
        nextPayment: null,
        startDate: prev[servicioSeleccionado].startDate ?? null,
      },
    }));
    setShowModal(false);
    alert("✅ Servicio cancelado exitosamente");
  };

  return (
    <>
      <div className="services-container">
        {Object.entries(servicios).map(([key, data]) => (
          <div className="service-card" key={key}>
            <h2>{data.title}</h2>
            <div className="status-row">
              <span className={`status-circle ${data.statusColor}`}></span>
              <span className="status-text">{data.statusText}</span>
            </div>
            {data.statusText === "Cancelado" && (
              <p className="cancel-reason">Cancelado por el cliente</p>
            )}
            {data.startDate && <p><strong>Inicio:</strong> {data.startDate}</p>}
            {data.nextPayment && <p><strong>Próximo Pago:</strong> {data.nextPayment}</p>}
            <p><strong>Precio:</strong> {data.price}</p>

            <div className="buttons">
              <button onClick={() => setDetalleServicio({ ...data, key })}>
                Ver detalles
              </button>
              {data.action === "reactivar" ? (
                <button onClick={() => navigate("/cliente/reactivar")}>Reactivar servicio</button>
              ) : (
                data.statusText !== "Cancelado" && (
                  <>
                    <button onClick={() => handleCancelarClick(key)}>Cancelar servicio</button>
                    <button onClick={() => navigate("/cliente/pago")}>Pagar ahora</button>
                  </>
                )
              )}
            </div>
          </div>
        ))}

        <div className="ver-mas">
          <button className="ver-mas-btn" onClick={() => navigate("/cliente/servicios")}>
            Ver más servicios +
          </button>
        </div>

        <ModalCancelarServicio
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmarCancelacion}
        />

        {/* ✅ Modal de Ver Detalles del Servicio */}
        {detalleServicio && (
          <div className="modal-detalles-overlay">
            <div className="modal-detalles-content">
              <button className="close-button" onClick={() => setDetalleServicio(null)}>✕</button>
              <h3>Detalles del Servicio</h3>
              <p><strong>Servicio:</strong> {detalleServicio.title}</p>
              <p><strong>Estado:</strong> {detalleServicio.statusText}</p>
              {detalleServicio.startDate && (
                <p><strong>Inicio:</strong> {detalleServicio.startDate}</p>
              )}
              {detalleServicio.nextPayment && (
                <p><strong>Próximo pago:</strong> {detalleServicio.nextPayment}</p>
              )}
              <p><strong>Precio:</strong> {detalleServicio.price}</p>
              <p><strong>Método de pago:</strong> Tarjeta de crédito</p>
              <p><strong>Estado del pago:</strong> {detalleServicio.statusText === "Activo" ? "Pagado" : "Pendiente"}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InicioCliente;
