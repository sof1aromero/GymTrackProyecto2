import React from "react";

const CentroNotificaciones = ({ }) => {
    const notifications = [
        {
            title: "Pago pendiente",
            message: "Tu pago de abril está pendiente.",
            date: "08/04/2025",
            read: false,
        },
        {
            title: "Clase programada",
            message: "Tienes una clase programada mañana a las 7am.",
            date: "07/04/2025",
            read: true,
        },
        {
            title: "Membresía expira",
            message: "Tu membresía expira en 3 días.",
            date: "06/04/2025",
            read: false,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Centro de Notificaciones</h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar notificaciones"
                    className="border rounded px-4 py-2 w-full"
                />
            </div>

            <div className="flex gap-4 mb-4">
                <select className="border rounded px-4 py-2">
                    <option>Todas</option>
                    <option>Pagos</option>
                    <option>Alertas</option>
                    <option>Mantenimiento o incidencias</option>
                </select>
            </div>

            <div className="list-group">
                {notifications.map((notif, index) => (
                    <div key={index} className="list-group-item mb-3 shadow-sm rounded">
                        <h5 className="mb-1 fw-semibol">{notif.title}</h5>
                        <p className="mb-1">{notif.message}</p>
                        <small className="text-sm text-gray-500">
                            {notif.date} • Estado: {notif.read ? "Leída" : "No leída"}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CentroNotificaciones;
