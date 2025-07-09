// src/components/PagosCliente/HistorialPagos.jsx
import React, { useState } from "react";
import "../../styles/PagosCliente/HistorialPagos.css";
import { useNavigate } from "react-router-dom";

const pagosEjemplo = [
    {
        id: 1,
        servicio: "Spinning",
        fecha: "2025-06-15",
        monto: "$80.000",
        metodo: "Tarjeta de crédito",
        cliente: "Juana Suarez",
    },
    {
        id: 2,
        servicio: "Pilates",
        fecha: "2025-06-21",
        monto: "$90.000",
        metodo: "Tarjeta de crédito",
        cliente: "Juana Suarez",
    },
    ];

    const HistorialPagos = () => {
    const [mesSeleccionado, setMesSeleccionado] = useState("2025-06");
    const [modalFactura, setModalFactura] = useState(null);
    const [descargado, setDescargado] = useState(false);

    const pagosFiltrados = pagosEjemplo.filter((pago) =>
        pago.fecha.startsWith(mesSeleccionado)
    );

    const manejarDescarga = () => {
        setDescargado(true);
        setTimeout(() => {
        setDescargado(false);
        setModalFactura(null);
        }, 2000);
    };

    const navigate = useNavigate();

    return (
        <div className="historial-pagos-container">
        <h2>Historial de pagos</h2>

        <div className="filtro-mes">
            <label>Filtrar por mes: </label>
            <select
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(e.target.value)}
            >
            <option value="2025-06">Junio 2025</option>
            <option value="2025-07">Julio 2025</option>
            </select>
        </div>

        {pagosFiltrados.length === 0 ? (
            <p className="mensaje-sin-registros">No hay registros para este mes.</p>
        ) : (
            pagosFiltrados.map((pago) => (
            <div className="pago-item" key={pago.id}>
                <h3>{pago.servicio}</h3>
                <p>
                <strong>Fecha:</strong> {pago.fecha}
                </p>
                <p>
                <strong>Monto:</strong> {pago.monto}
                </p>
                <button
                className="btn-ver-factura"
                onClick={() => setModalFactura(pago)}
                >
                Ver factura
                </button>
            </div>
            ))
        )}

        {/* Modal Factura */}
        {modalFactura && (
            <div className="modal-factura">
            <div className="modal-contenido-factura">
                {!descargado ? (
                <>
                    <h4>Factura #{modalFactura.id.toString().padStart(4, "0")}</h4>
                    <p>
                    <strong>Cliente:</strong> {modalFactura.cliente}
                    </p>
                    <p>
                    <strong>Fecha:</strong> {modalFactura.fecha}
                    </p>
                    <p>
                    <strong>Servicio:</strong> {modalFactura.servicio}
                    </p>
                    <p>
                    <strong>Método:</strong> {modalFactura.metodo}
                    </p>
                    <p>
                    <strong>Estado:</strong> Pagado
                    </p>
                    <p>
                    <strong>Total:</strong> {modalFactura.monto}
                    </p>
                    <div className="modal-buttons">
                    <button className="btn-descargar" onClick={manejarDescarga}>
                        Descargar PDF
                    </button>
                    <button className="btn-volver" onClick={() => setModalFactura(null)}>
                        Volver
                    </button>
                    </div>
                </>
                ) : (
                <>
                    <h4>📥 Tu factura ha sido descargada correctamente</h4>
                    <button className="btn-volver" onClick={() => setModalFactura(null)}>
                    Volver
                    </button>
                </>
                )}
            </div>
            </div>
        )}
            <button className="btn-volver-pagos" onClick={() => navigate("/cliente/pagos")}>
                Volver a Mis pagos
            </button>
        </div>
    );
};

export default HistorialPagos;
