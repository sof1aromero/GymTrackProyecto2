import React, { useState } from 'react';
import '../../styles/ClienteEntrenador/HistorialClases.css';

function HistorialClases() {
  const historialClasesData = [
    { fecha: '20/04/2025', hora: '10AM - 11AM', servicio: 'GymBox', servicioEstado: 'Cancelada' },
    { fecha: '01/03/2025', hora: '10AM - 11AM', servicio: 'GymBox', servicioEstado: 'Realizada' },
    { fecha: '08/02/2025', hora: '10AM - 11AM', servicio: 'GymPilates', servicioEstado: 'Realizada' },
    { fecha: '23/01/2025', hora: '10AM - 11AM', servicio: 'GymPilates', servicioEstado: 'Realizada' },
    { fecha: '15/04/2025', hora: '10AM - 11AM', servicio: 'Zumba', servicioEstado: 'Realizada' },
    { fecha: '10/04/2025', hora: '10AM - 11AM', servicio: 'Yoga', servicioEstado: 'Cancelada' },
  ];

  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [historialClases, setHistorialClases] = useState(historialClasesData);

  const handleFiltroChange = (event) => {
    const nuevoFiltro = event.target.value;
    setFiltroEstado(nuevoFiltro);

    if (nuevoFiltro === 'Todos') {
      setHistorialClases(historialClasesData);
    } else {
      const clasesFiltradas = historialClasesData.filter(
        (clase) => clase.servicioEstado === nuevoFiltro
      );
      setHistorialClases(clasesFiltradas);
    }
  };

  return (
    <div className="historial-clases-container">
      <h2>Mi Historial De Clases</h2>
      <div className="filtros-historial">
        <label htmlFor="filtro-estado">Filtrar por estado:</label>
        <select id="filtro-estado" value={filtroEstado} onChange={handleFiltroChange}>
          <option value="Todos">Todos</option>
          <option value="Realizada">Realizadas</option>
          <option value="Cancelada">Canceladas</option>
        </select>
      </div>
      <div className="tabla-historial">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Servicio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {historialClases.map((clase, index) => (
              <tr key={index}>
                <td>{clase.fecha}</td>
                <td>{clase.hora}</td>
                <td>{clase.servicio}</td>
                <td className={clase.servicioEstado === 'Cancelada' ? 'cancelada' : 'realizada'}>
                  {clase.servicioEstado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="boton-clases-antiguas">Clases mas Antiguas</button>
    </div>
  );
}

export default HistorialClases;