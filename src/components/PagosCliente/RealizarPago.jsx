// src/components/PagosCliente/RealizarPago.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PagosCliente/RealizarPago.css";

const RealizarPago = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const servicio = {
        nombre: "Spinning",
        precio: "$80.000 mensual",
        estado: "Pendiente de pago",
        proximoPago: "2025-08-30",
    };

    const confirmarPago = () => {
        setMostrarModal(false);
        setMostrarConfirmacion(true);
    };

    return (
        <div className="realizar-pago-container">
        <h2>Servicios pendientes de pago</h2>

        <div className="pago-card">
            <p><strong>Servicio:</strong> {servicio.nombre}</p>
            <p><strong>Precio:</strong> {servicio.precio}</p>
            <p><strong>Estado:</strong> <span className="pendiente">{servicio.estado}</span></p>
            <p><strong>Próximo pago:</strong> {servicio.proximoPago}</p>
            <button className="pagar-btn" onClick={() => setMostrarModal(true)}>
            Pagar ahora
            </button>
        </div>

        {/* Modal de Confirmación */}
        {mostrarModal && (
            <div className="modal-overlay">
            <div className="modal-pago">
                <div className="modal-header">
                <h4>Confirmar Pago</h4>
                <button onClick={() => setMostrarModal(false)}>✕</button>
                </div>
                <p><strong>Servicio:</strong> {servicio.nombre}</p>
                <p><strong>Total:</strong> {servicio.precio}</p>
                <p>¿Deseas realizar el pago ahora?</p>
                <div className="modal-buttons">
                <button className="cancelar" onClick={() => setMostrarModal(false)}>Cancelar</button>
                <button className="confirmar" onClick={confirmarPago}>Confirmar Pago</button>
                </div>
            </div>
            </div>
        )}

        {/* Modal de Éxito */}
        {mostrarConfirmacion && (
            <div className="modal-overlay">
            <div className="modal-pago">
                <h4>✅ ¡Pago realizado con éxito!</h4>
                <div className="modal-buttons vertical">
                <button className="confirmar">Ver factura</button>
                <button className="confirmar">Descargar factura</button>
                <button className="cancelar" onClick={() => navigate("/cliente/pagos")}>
                    Volver al área de pagos
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default RealizarPago;
