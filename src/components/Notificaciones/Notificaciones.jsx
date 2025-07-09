import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Notificaciones/Notificaciones.css";

const Notificaciones = ({ notificaciones = [], onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="notificaciones-dropdown">
        {notificaciones.length === 0 ? (
            <p className="sin-notificaciones">No tienes notificaciones nuevas.</p>
        ) : (
            <>
            {notificaciones.slice(0, 2).map((n) => (
                <div className="notificacion" key={n.id}>
                <p className="titulo">{n.titulo}</p>
                <p className="detalle">{n.detalle}</p>
                <span className="tiempo">{n.tiempo}</span>
                </div>
            ))}
            <button
                className="ver-todas-btn"
                onClick={() => {
                navigate("/cliente/notificaciones");
                onClose(); // Cierra el dropdown
                }}
            >
                Ver todas las notificaciones
            </button>
            </>
        )}
        </div>
    );
};

export default Notificaciones;
