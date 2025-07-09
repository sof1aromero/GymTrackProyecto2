import React, { useState } from "react";
import "../../styles/serviciosCliente/InicioClienteServicios.css";
import { useNavigate } from "react-router-dom";
import ModalCancelarServicio from "./ModalCancelarServicio";
import NavBarPriv from "../InicioSesionFN/NavBarPriv";
import Stack from 'react-bootstrap/Stack';


const ServiceCard = ({
  title,
  statusColor,
  statusText,
  startDate,
  nextPayment,
  price,
  action,
  servicioKey,
  onCancel,
  showCancelButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <>
     
    <div className="service-card">
      <h2>{title}</h2>
      <div className="status-row">
        <span className={`status-circle ${statusColor}`}></span>
        <span className="status-text">{statusText}</span>
      </div>
      {statusText === "Cancelado" && (
        <p className="cancel-reason">Cancelado por el cliente</p>
      )}
      {startDate && <p><strong>Inicio:</strong> {startDate}</p>}
      {nextPayment && <p><strong>Próximo Pago:</strong> {nextPayment}</p>}
      <p><strong>Precio:</strong> {price}</p>

      <div className="buttons">
        <button onClick={() => navigate("/cliente/detalles", { state: { servicio: servicioKey } })}>
          Ver detalles
        </button>
        {action === "reactivar" ? (
          <button onClick={() => navigate("/cliente/reactivar")}>Reactivar servicio</button>
        ) : (
          showCancelButton && (
            <>
              <button onClick={onCancel}>Cancelar servicio</button>
              <button onClick={() => navigate("/cliente/pago")}>Pagar ahora</button>
            </>
          )
        )}
      </div>
    </div>
    </>
  );
};

const InicioCliente = () => {
  const navigate = useNavigate();

  // Estado de cancelación de servicios
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
        <ServiceCard
          key={key}
          {...data}
          servicioKey={key}
          onCancel={() => handleCancelarClick(key)}
          showCancelButton={data.statusText !== "Cancelado"}
        />
      ))}

      <div className="ver-mas">
        <button className="ver-mas-btn" onClick={() => navigate("/cliente/servicios")}>
          Ver más servicios +
        </button>
      </div>

      {/* Modal para confirmar cancelación */}
      <ModalCancelarServicio
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmarCancelacion}
      />
    </div>
    </>
  );
};

export default InicioCliente;
