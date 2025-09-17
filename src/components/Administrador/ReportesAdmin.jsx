import React from "react";
import "../../styles/Administrador/Reportes.css";

const ReportesAdmin = () => {
  return (
    <div className="reportes-container">
      <h2>Reportes del Gimnasio</h2>
      <p className="subtexto">Análisis y métricas de rendimiento del gimnasio</p>

      <div className="filtros-reportes">
        <div className="selectores">
          <div className="filtro">
            <label>Tipo de Búsqueda</label>
            <select>
              <option>Reporte General</option>
              <option>Miembros</option>
              <option>Ingresos</option>
              <option>Entrenadores</option>
              <option>Equipamiento</option>
            </select>
          </div>

          <div className="filtro">
            <label>Periodo</label>
            <select>
              <option>Reporte General</option>
              <option>Esta Semana</option>
              <option>Este Mes</option>
              <option>Este Trimestre</option>
              <option>Este Año</option>
            </select>
          </div>
        </div>

        <div className="fechas">
          <div className="filtro">
            <label>Fecha Inicio</label>
            <input type="date" />
          </div>
          <div className="filtro">
            <label>Fecha Fin</label>
            <input type="date" />
          </div>
        </div>

        <button className="btn-reporte">Generar Reporte</button>
      </div>

      <div className="resumen-metricas">
        <div className="card-metrica">Miembros Activos</div>
        <div className="card-metrica">Ingresos al Mes</div>
        <div className="card-metrica">Ocupación Promedio</div>
        <div className="card-metrica">Entrenadores Activos</div>
      </div>

      <div className="tabla-reportes">
        <table>
          <thead>
            <tr>
              <th>N° Documento</th>
              <th>Nombre</th>
              <th>Fecha de Ingreso</th>
              <th>Estado</th>
              <th>Último Pago</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="vacio">No hay datos para mostrar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportesAdmin;
