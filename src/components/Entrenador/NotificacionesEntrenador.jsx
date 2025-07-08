import React, { useState } from 'react';
import '../../styles/Entrenador/NotificacionesEntrenador.css';

const notificationsData = [
  {
    title: 'Pago recibido',
    description: 'Has recibido un pago de $50.000 COP de María González por el plan mensual de entrenamiento personal.',
    time: 'Hace 15 minutos',
    type: 'pago',
  },
  {
    title: 'Sesión próxima a vencer',
    description: 'La sesión con Ana López está programada para dentro de 30 minutos. Recuerda preparar el equipo necesario.',
    time: 'Hace 2 horas',
    type: 'sistema',
  },
  {
    title: 'Reporte semanal disponible',
    description: 'Tu reporte de actividades de la semana está listo. Revisa tus estadísticas de entrenamiento y ganancias.',
    time: 'Hace 2 días',
    type: 'sistema',
  }
];

function Notifications() {
  const [filter, setFilter] = useState('todas');

  const filteredNotifications = notificationsData.filter((n) => {
    if (filter === 'todas') return true;
    return n.type === filter;
  });

  return (
    <div className="full-screen-container">
      <div className="notifications-container">
        <h2 className="notifications-title">NOTIFICACIONES</h2>

        <div className="filters">
          <button className={filter === 'todas' ? 'active' : ''} onClick={() => setFilter('todas')}>TODAS(5)</button>
          <button className={filter === 'noLeidas' ? 'active' : ''} onClick={() => setFilter('noLeidas')}>NO LEÍDAS(5)</button>
          <button className={filter === 'sistema' ? 'active' : ''} onClick={() => setFilter('sistema')}>SISTEMA(1)</button>
          <button className={filter === 'pago' ? 'active' : ''} onClick={() => setFilter('pago')}>PAGOS(2)</button>
        </div>

        <div className="notifications-list">
          {filteredNotifications.map((n, index) => (
            <div key={index} className="notification-card">
              <h3 className="notification-title">{n.title}</h3>
              <p className="notification-description">{n.description}</p>
              <p className="notification-time">{n.time}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default Notifications;
