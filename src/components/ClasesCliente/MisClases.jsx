import React, { useEffect, useState } from "react";
import "../../styles/ClasesCliente/MisClases.css";
import { useNavigate } from "react-router-dom";
import ModalVerDetalles from "./ModalVerDetalles"; // ✅ Importa el componente nuevo

const MisClases = () => {
    const navigate = useNavigate();
    const [clases, setClases] = useState([]);
    const [claseDetalle, setClaseDetalle] = useState(null);
    const [claseACancelar, setClaseACancelar] = useState(null);

    useEffect(() => {
        const clasesGuardadas = JSON.parse(localStorage.getItem("clasesReservadas")) || [];
        setClases(clasesGuardadas);
    }, []);

    const mostrarDetalles = (clase) => {
        setClaseDetalle(clase);
    };

    const cerrarDetalles = () => {
        setClaseDetalle(null);
    };

    const confirmarCancelacion = () => {
        const clasesActualizadas = clases.map((clase) =>
        clase.id === claseACancelar.id ? { ...clase, estado: "Cancelada" } : clase
        );
        setClases(clasesActualizadas);
        setClaseACancelar(null);
        localStorage.setItem("clasesReservadas", JSON.stringify(clasesActualizadas));
    };

    return (
        <div className="misclases-container">
        <h2>Mis clases reservadas</h2>

        {clases.length === 0 ? (
            <p>No tienes clases reservadas aún.</p>
        ) : (
            clases.map((clase) => (
            <div className="card-clase" key={clase.id}>
                <h3>{clase.nombre}</h3>
                <p><strong>Fecha:</strong> {clase.horario}</p>
                <p><strong>Instructor:</strong> {clase.instructora}</p>
                <p><strong>Estado:</strong> {clase.estado}</p>
                <div className="botones-clase">
                <button onClick={() => mostrarDetalles(clase)}>Ver detalles</button>
                {clase.estado !== "Cancelada" && (
                    <button className="btn-cancelar" onClick={() => setClaseACancelar(clase)}>
                    Cancelar clase
                    </button>
                )}
                </div>
            </div>
            ))
        )}

        <button className="btn-volver" onClick={() => navigate("/cliente/clases")}>
            Volver a Clases
        </button>

        {/* ✅ Modal de Ver Detalles */}
        {claseDetalle && (
            <ModalVerDetalles clase={claseDetalle} onClose={cerrarDetalles} />
        )}

        {/* Modal Cancelar */}
        {claseACancelar && (
            <div className="modal-cancelar">
            <div className="modal-contenido">
                <p>¿Seguro que deseas cancelar esta clase?</p>
                <div className="opciones-cancelar">
                <button onClick={confirmarCancelacion}>Sí, cancelar</button>
                <button onClick={() => setClaseACancelar(null)}>No, volver</button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default MisClases;
