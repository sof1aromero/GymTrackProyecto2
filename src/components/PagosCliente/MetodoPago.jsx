// src/components/PagosCliente/MetodoPago.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PagosCliente/MetodoPago.css";

const MetodoPago = () => {
    const navigate = useNavigate();
    const [metodo, setMetodo] = useState("Tarjeta de crédito");
    const [numero, setNumero] = useState("**** **** **** 1234");
    const [editando, setEditando] = useState(false);

    const guardarCambios = () => {
        setEditando(false);
        alert("✅ Método de pago actualizado");
    };

    return (
        <div className="metodo-pago-container">
        <h2>Método de Pago</h2>
        {!editando ? (
            <>
            <p><strong>Tipo:</strong> {metodo}</p>
            <p><strong>Número:</strong> {numero}</p>
            <button onClick={() => setEditando(true)}>Editar</button>
            </>
        ) : (
            <div className="editar-formulario">
            <label>
                Tipo de método:
                <select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
                <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                <option value="Tarjeta débito">Tarjeta débito</option>
                <option value="PSE">PSE</option>
                </select>
            </label>

            <label>
                Número:
                <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                />
            </label>

            <div className="editar-botones">
                <button onClick={guardarCambios}>Guardar</button>
                <button onClick={() => setEditando(false)}>Cancelar</button>
            </div>
            </div>
        )}
        <button className="btn-volver" onClick={() => navigate("/cliente/pagos")}>
            Volver a Mis pagos
        </button>
        </div>
    );
};

export default MetodoPago;
