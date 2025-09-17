import "../../styles/Administrador/PagosEntrenadores.css";

const PagosEntrenadores = () => {
  return (
    <div className="pagos-container">
      <h2 className="titulo">Gestión de Pagos</h2>
      <p className="subtitulo">Administra los pagos de clientes y la distribución de comisiones</p>

      <div className="tarjeta-pagos">
        <div className="tabs-pagos">
          <button className="tab">Pagos de Clientes</button>
          <button className="tab active ">Pagos de Entrenadores</button>
          <button className="tab">Distribución por Entrenador</button>
        </div>

        <div className="filtros-pagos">
          <div className="buscador">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Buscar por número del documento"
            />
          </div>

          <select className="selector-estado">
            <option>Todos los estados</option>
            <option>Pagado</option>
            <option>Pendiente</option>
            <option>Cancelado</option>
          </select>
        </div>

        <div className="tabla-pagos">
          <table>
            <thead>
              <tr>
                <th>N° DOCUMENTO</th>
                <th>NOMBRE</th>
                <th>SERVICIO</th>
                <th>MONTO TOTAL</th>
                <th>FECHA</th>
                <th>ESTADO</th>
                <th>MÉTODO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="fila-vacia">
                  No hay pagos registrados aún
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PagosEntrenadores;