import React, { useState } from "react";
import "../../styles/ClienteEntrenador/CalendarioCliente.css";
import { Link } from 'react-router-dom';

function Calendario() {
  const [selectedDate, setSelectedDate] = useState(null);

  const servicios = {
    "8": { nombre: "GymBox", entrenador: "Carlos", inicio: "08/04/2025", hora: "10AM-11AM", fin: "08/04/2025", estado: "disponible" },
    "10": { nombre: "Zumba", entrenador: "Laura", inicio: "10/04/2025", hora: "9AM-10AM", fin: "10/04/2025", estado: "disponible" },
    "20": { nombre: "Yoga", entrenador: "Andrea", inicio: "20/04/2025", hora: "10AM-11AM", fin: "20/04/2025", estado: "disponible" },
    "4": { nombre: "Spinning", entrenador: "Pedro", inicio: "04/04/2025", hora: "7AM-8AM", fin: "04/04/2025", estado: "finalizado" }
  };

  const handleDateClick = (day) => {
    setSelectedDate(servicios[day] || null);
  };

  const getDayClassName = (day) => {
    if (servicios[day]) {
      return servicios[day].estado === "disponible" ? "disponible" : "finalizado";
    }
    return "";
  };

  return (
    <div className="calendario-container">
      <div className="enlace-historial">
        <Link to="/historial-clases">Ver mi historial de clases</Link>
      </div>
      <h2>Calendario de servicios/clases disponibles</h2>
      <div className="calendario-contenido">
        <div className="calendario">
          <h3>ABRIL 2025</h3>
          <table>
            <thead>
              <tr><th>D</th><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th></tr>
            </thead>
            <tbody>
              <tr>
                <td onClick={() => handleDateClick("30")}>30</td>
                <td onClick={() => handleDateClick("31")}>31</td>
                <td onClick={() => handleDateClick("1")}>1</td>
                <td onClick={() => handleDateClick("2")}>2</td>
                <td onClick={() => handleDateClick("3")}>3</td>
                <td className={getDayClassName("4")} onClick={() => handleDateClick("4")}>4</td>
                <td onClick={() => handleDateClick("5")}>5</td>
              </tr>
              <tr>
                <td onClick={() => handleDateClick("6")}>6</td>
                <td onClick={() => handleDateClick("7")}>7</td>
                <td className={getDayClassName("8")} onClick={() => handleDateClick("8")}>8</td>
                <td onClick={() => handleDateClick("9")}>9</td>
                <td className={getDayClassName("10")} onClick={() => handleDateClick("10")}>10</td>
                <td onClick={() => handleDateClick("11")}>11</td>
                <td onClick={() => handleDateClick("12")}>12</td>
              </tr>
              <tr>
                <td onClick={() => handleDateClick("13")}>13</td>
                <td onClick={() => handleDateClick("14")}>14</td>
                <td onClick={() => handleDateClick("15")}>15</td>
                <td onClick={() => handleDateClick("16")}>16</td>
                <td onClick={() => handleDateClick("17")}>17</td>
                <td onClick={() => handleDateClick("18")}>18</td>
                <td onClick={() => handleDateClick("19")}>19</td>
              </tr>
              <tr>
                <td className={getDayClassName("20")} onClick={() => handleDateClick("20")}>20</td>
                <td onClick={() => handleDateClick("21")}>21</td>
                <td onClick={() => handleDateClick("22")}>22</td>
                <td onClick={() => handleDateClick("23")}>23</td>
                <td onClick={() => handleDateClick("24")}>24</td>
                <td onClick={() => handleDateClick("25")}>25</td>
                <td onClick={() => handleDateClick("26")}>26</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="detalle-servicio">
          {selectedDate ? (
            <div className="detalle-servicio-contenido">
              <div className="detalle-servicio-info">
                <p><strong>Estado:</strong> <span className={selectedDate.estado === "disponible" ? "disponible-texto" : "finalizado-texto"}>{selectedDate.estado === "disponible" ? "Disponible" : "Finalizado"}</span></p>
                <p><strong>Entrenador:</strong> {selectedDate.entrenador}</p>
                <p><strong>Nombre del servicio/clase:</strong> {selectedDate.nombre}</p>
                <p><strong>Fecha de inicio:</strong> {selectedDate.inicio}</p>
                <p><strong>Hora:</strong> {selectedDate.hora}</p>
                <p><strong>Fecha de finalización:</strong> {selectedDate.fin}</p>
              </div>
              {selectedDate.estado === "disponible" && (
                <div className="btn-reservar-container">
                  <Link
                    to="/confirmacion-reserva">
                    Reservar
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="info-calendario">
              <p className="texto-importante">¡Ten en cuenta!</p>
              <ul>
                <li>- Las fechas en <span className="disponible-color">verde</span> son las disponibles.</li>
                <li>- Las fechas en <span className="finalizado-color">rojo</span> son las finalizadas.</li>
              </ul>
              <p className="texto-recordatorio">¡RECUERDA! Si no estás seguro de tu reserva puedes modificarla.</p>
              <p className="texto-agradecimiento">¡Gracias por reservar con nosotros!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendario;