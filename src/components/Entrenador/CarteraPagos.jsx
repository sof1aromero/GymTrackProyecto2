import React, { useState } from 'react';
import '../../styles/Entrenador/CarteraPagos.css';

const pagosSimulados = [
  { id: 1, documento: '001', cliente: 'Vanesa', estado: 'Pendiente', valor: 90000, fecha: '2025-07-01' },
  { id: 2, documento: '002', cliente: 'Carlos', estado: 'Pagado', valor: 70000, fecha: '2025-07-03' },
  { id: 3, documento: '003', cliente: 'Laura', estado: 'Vencido', valor: 50000, fecha: '2025-06-15' },
];

const CarteraPagos = () => {
  const [documentoFiltro, setDocumentoFiltro] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState('');
  const [rango, setRango] = useState('');
  const [pagos] = useState(pagosSimulados);
  const [resultados, setResultados] = useState(pagosSimulados);

  const aplicarFiltros = () => {
    const hoy = new Date();
    let fechaInicio = null;

    if (rango === '30') {
      fechaInicio = new Date();
      fechaInicio.setDate(hoy.getDate() - 30);
    } else if (rango === '7') {
      fechaInicio = new Date();
      fechaInicio.setDate(hoy.getDate() - 7);
    } else if (rango === 'mes') {
      fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    } else if (rango === 'anterior') {
      fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth() - 1, 1);
      hoy.setMonth(hoy.getMonth() - 1);
      hoy.setDate(new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate());
    }

    let filtrados = pagos.filter((pago) => {
      const fechaPago = new Date(pago.fecha);
      return (
        (!documentoFiltro || pago.documento.includes(documentoFiltro)) &&
        (!estadoFiltro || pago.estado === estadoFiltro) &&
        (!fechaInicio || (fechaPago >= fechaInicio && fechaPago <= hoy))
      );
    });

    setResultados(filtrados);
  };

  return (
    <div className="cartera-container">
      <h2>Cartera</h2>
      <p>Gestiona tus pagos pendientes y recibidos</p>

      <div className="cards-resumen">
        <div className="card-pago">
          <h4>Total Pendiente</h4>
          <p className="valor-card">$ 0.00</p>
        </div>
        <div className="card-pago">
          <h4>Total Recibido (Este Mes)</h4>
          <p className="valor-card">$ 0.00</p>
        </div>
        <div className="card-pago">
          <h4>Pagos Pendientes</h4>
          <p className="valor-card">0</p>
        </div>
        <div className="card-pago">
          <h4>Pagos Recibidos (Este Mes)</h4>
          <p className="valor-card">0</p>
        </div>
      </div>

      <div className="filtros-pagos">
        <div className="filtros-inputs">
          <input
            type="text"
            placeholder="Buscar por número de documento"
            value={documentoFiltro}
            onChange={(e) => setDocumentoFiltro(e.target.value)}
          />

          <select value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}>
            <option value="">Estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Pagado">Pagado</option>
            <option value="Vencido">Vencido</option>
          </select>

          <select value={rango} onChange={(e) => setRango(e.target.value)}>
            <option value="">Rango de fechas</option>
            <option value="30">Últimos 30 días</option>
            <option value="7">Últimos 7 días</option>
            <option value="mes">Este mes</option>
            <option value="anterior">Mes anterior</option>
          </select>

          <button className="btn-filtrar" onClick={aplicarFiltros}>Filtrar</button>
        </div>
      </div>

      <div className="historial-pagos">
        <h3>Historial de pagos</h3>
        <table className="tabla-pagos">
          <thead>
            <tr>
              <th>N° Documento</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {resultados.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>No se encontraron resultados</td>
              </tr>
            ) : (
              resultados.map((pago) => (
                <tr key={pago.id}>
                  <td>{pago.documento}</td>
                  <td>{pago.cliente}</td>
                  <td>{pago.estado}</td>
                  <td>${pago.valor.toLocaleString()}</td>
                  <td>{pago.fecha}</td>
                  <td><button className="btn-detalle">Detalle del Pago</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarteraPagos;
