import React from "react";
import "../../styles/PagosCliente/MisPagos.css";
import { useNavigate } from "react-router-dom";

const MisPagos = () => {
    const navigate = useNavigate();

    return (
        <div className="mis-pagos-container">
        <h2>Mis pagos</h2>

        <div className="pagos-grid">
            <div className="pago-card">
            <h3>Realizar pago</h3>
            <p>Consulta los servicios pendientes y realiza el pago fácilmente.</p>
            <button className="btn-verde" onClick={() => navigate("/cliente/pagos/realizar")}>
                Ir a pagar
            </button>
            </div>

            <div className="pago-card">
            <h3>Ver historial</h3>
            <p>Consulta tus pagos anteriores por fecha o servicio.</p>
            <button className="btn-verde" onClick={() => navigate("/cliente/pagos/historial")}>
                Ver historial
            </button>
            </div>

            <div className="pago-card">
            <h3>Método de pago</h3>
            <p>Visualiza o actualiza tu método de pago preferido.</p>
            <button className="btn-verde" onClick={() => navigate("/cliente/pagos/metodo")}>
                Gestionar método
            </button>
            </div>
        </div>

        {/* boton de volver a mis pagos
        <div className="btn-volver-pagos-container">
            <button className="btn-volver-pagos" onClick={() => navigate("/")}>
            Volver a <strong>Mis pagos</strong>
            </button>
        </div>*/}
        </div>
    );
};

export default MisPagos;
