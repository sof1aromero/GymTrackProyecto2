import React from 'react';
import '../../styles/ClienteEntrenador/ConfirmacionReserva.css';


function ConfirmacionReserva() {
  return (
    <div className="container">
      <h1>Reserva Confirmada</h1>

      <table>
        <thead>
          <tr>
            <th>DIA</th>
            <th>HORA</th>
            <th>ENTRENADOR</th>
            <th>SERVICIO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/04/2025</td>
            <td>10AM-11AM</td>
            <td>Juan Zapata</td>
            <td>GymBox</td>
          </tr>
        </tbody>
      </table>

      <a href="#" className="button">
        Modificar Reserva
      </a>

      <p>¡Gracias por reservar con nosotros!</p>

    </div>
  );
}

export default ConfirmacionReserva;