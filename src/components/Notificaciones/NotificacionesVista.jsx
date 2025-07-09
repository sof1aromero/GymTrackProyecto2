import React from "react";
import "../../styles/Notificaciones/NotificacionesVista.css";

const NotificacionesVista = () => {
    const notificaciones = [
        {
        id: 1,
        titulo: "Clase de spinning",
        detalle: "Hoy a las 11:00 a.m.",
        tiempo: "Hace 30 minutos",
        },
        {
        id: 2,
        titulo: "Pago pendiente",
        detalle: "Servicio con vencimiento el 28 de junio",
        tiempo: "Hace 2 días",
        },
        {
        id: 3,
        titulo: "Nuevo horario disponible",
        detalle: "Se abrió cupo para clase de Pilates",
        tiempo: "Hace 5 días",
        },
    ];

    return (
        <div className="notificaciones-vista">
        <h2>Mis notificaciones</h2>
        {notificaciones.map((n) => (
            <div key={n.id} className="notificacion-vista-item">
            <p className="titulo">{n.titulo}</p>
            <p className="detalle">{n.detalle}</p>
            <p className="tiempo">{n.tiempo}</p>
            </div>
        ))}
        </div>
    );
};

export default NotificacionesVista;
