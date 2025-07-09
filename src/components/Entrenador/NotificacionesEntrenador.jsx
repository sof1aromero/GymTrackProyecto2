import React, { useState } from 'react';
import '../../styles/Entrenador/NotificacionesEntrenador.css';

const notificationsData = [
  {
    title: 'Pago recibido',
    description: 'Has recibido un pago de $50.000 COP de María González por el plan mensual de entrenamiento personal.',
    time: 'Hace 15 minutos',
    type: 'pago',
    leida: false
  },
  {
    title: 'Sesión próxima a vencer',
    description: 'La sesión con Ana López está programada para dentro de 30 minutos. Recuerda preparar el equipo necesario.',
    time: 'Hace 2 horas',
    type: 'sistema',
    leida: true
  },
  {
    title: 'Reporte semanal disponible',
    description: 'Tu reporte de actividades de la semana está listo. Revisa tus estadísticas de entrenamiento y ganancias.',
    time: 'Hace 2 días',
    type: 'sistema',
    leida: false
  }
];

function NotificacionesEntrenador() {
  const [filter, setFilter] = useState('todas');

  const filteredNotifications = notificationsData.filter((n) => {
    if (filter === 'todas') return true;
    if (filter === 'noLeidas') return !n.leida;
    return n.type === filter;
  });

  // Conteos dinámicos
  const counts = {
    todas: notificationsData.length,
    noLeidas: notificationsData.filter(n => !n.leida).length,
    sistema: notificationsData.filter(n => n.type === 'sistema').length,
    pago: notificationsData.filter(n => n.type === 'pago').length
  };

  return (
    <div className="full-screen-container">
      <div className="notifications-container">
        <h2 className="notifications-title">NOTIFICACIONES</h2>

        <div className="filters">
          <button className={filter === 'todas' ? 'active' : ''} onClick={() => setFilter('todas')}>
            TODAS({counts.todas})
          </button>
          <button className={filter === 'noLeidas' ? 'active' : ''} onClick={() => setFilter('noLeidas')}>
            NO LEÍDAS({counts.noLeidas})
          </button>
          <button className={filter === 'sistema' ? 'active' : ''} onClick={() => setFilter('sistema')}>
            SISTEMA({counts.sistema})
          </button>
          <button className={filter === 'pago' ? 'active' : ''} onClick={() => setFilter('pago')}>
            PAGOS({counts.pago})
          </button>
        </div>

        <div className="notifications-list">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((n, index) => (
              <div key={index} className="notification-card">
                <h3 className="notification-title">{n.title}</h3>
                <p className="notification-description">{n.description}</p>
                <p className="notification-time">{n.time}</p>
              </div>
            ))
          ) : (
            <p>No hay notificaciones para este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificacionesEntrenador;
