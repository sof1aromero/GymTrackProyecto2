import "../../styles/Administrador/GestionPagos.css";

const GestionPagos = () => {
  return (
    <div className="pagos-container">
      <h2 className="titulo">Gestión de Pagos</h2>
      <p className="subtitulo">Administra los pagos de clientes y la distribución de comisiones</p>

      <div className="resumen-pagos">
        <div className="card-pago azul">
          <p>Ingresos Totales</p>
          <i className="fas fa-dollar-sign"></i>
        </div>
        <div className="card-pago verde">
          <p>Ganancia Gimnasio</p>
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="card-pago morado">
          <p>Pago Entrenadores</p>
          <i className="fas fa-user"></i>
        </div>
        <div className="card-pago rojo">
          <p>Clientes activos</p>
          <i className="fas fa-users"></i>
        </div>
      </div>

      <div className="filtro-pagos">
        <div className="tabs">
          <button className="active">Pagos de Clientes</button>
          <button>Pagos de Entrenadores</button>
          <button>Distribución por Entrenador</button>
        </div>

        <div className="filtros">
          <input type="text" placeholder="Buscar por número del documento" />
          <select>
            <option>Todos los estados</option>
            <option>Pagado</option>
            <option>Pendiente</option>
            <option>Cancelado</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GestionPagos;
