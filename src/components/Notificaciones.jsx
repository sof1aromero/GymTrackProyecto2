import React from 'react';
import '../estilos2.css';

const Notificaciones = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">GYMTRACK</div>
        <div className="menu">
          <a href="#">METODO DE PAGO</a>
          <a href="#">FACTURAS</a>
          <a href="#">NOTIFICACIONES</a>
        </div>
      </div>

      <div className="container">
        <h2>NOTIFICACIONES A USUARIO</h2>
        <div className="notificaciones-box">
          {[
            { texto: 'Cancelación de clase', fecha: '02/09/2025' },
            { texto: 'Pago exitoso!', fecha: '02/02/2025' },
            { texto: 'Mantenimiento, zona zumba', fecha: '03/03/2025' },
            { texto: 'Su membresía expira en tres días', fecha: '29/05/2025' },
            { texto: 'Su entrenador ha sido asignado con éxito', fecha: '04/03/2025' },
          ].map((n, i) => (
            <div className="notificacion" key={i}>
              <span className="texto">NOTIFICACIÓN - {n.texto}</span>
              <span className="admin">GYMTRACK - Administración</span>
              <span className="fecha">FECHA - {n.fecha}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
