import React from "react";
import "../../styles/serviciosCliente/InicioClienteServicios.css";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, statusColor, statusText, startDate, nextPayment, price, action }) => {
    const navigate = useNavigate();

    return (
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
            <button onClick={() => navigate("/cliente/detalles")}>Ver detalles</button>
            {action === "reactivar" ? (
            <button onClick={() => navigate("/cliente/reactivar")}>Reactivar servicio</button>
            ) : (
            <>
                <button onClick={() => navigate("/cliente/cancelar")}>Cancelar servicio</button>
                <button onClick={() => navigate("/cliente/pago")}>Pagar ahora</button>
            </>
            )}
        </div>
        </div>
    );
};

const InicioClienteServicios = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="services-container">
            <ServiceCard
            title="Spinning"
            statusColor="green"
            statusText="Activo"
            startDate="2025-06-18"
            nextPayment="2025-07-18"
            price="$80.000 mensual"
            action="pagar"
            />
            <ServiceCard
            title="Gym Libre"
            statusColor="yellow"
            statusText="Pago pendiente"
            startDate="2025-06-10"
            nextPayment="2025-07-10"
            price="$110.000 mensual"
            action="pagar"
            />
            <ServiceCard
            title="Gym Pilates"
            statusColor="red"
            statusText="Cancelado"
            price="$90.000 mensual"
            action="reactivar"
            />
            <div className="ver-mas">
            <button className="ver-mas-btn" onClick={() => navigate("/cliente/servicios")}>
                Ver más servicios +
            </button>
            </div>
        </div>
        </>
    );
};

export default InicioClienteServicios;
