import "../../styles/Administrador/InventarioAdmin.css";

const InventarioGym = () => {
  return (
    <div className="inventario-container">
      <h2 className="titulo">Inventario GymTrack</h2>
      <p className="subtitulo">Gestiona todo el equipo y accesorios del gimnasio</p>

      {/* Tarjetas de resumen */}
      <div className="resumen-inventario">
        <div className="card-info c1">Total Artículos</div>
        <div className="card-info c2">Valor Total</div>
        <div className="card-info c3">Stock Bajo</div>
        <div className="card-info c4">Categorías</div>
      </div>

      {/* Filtros */}
      <div className="filtros-inventario">
        <div className="buscador">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Buscar por nombre o ubicación..." />
        </div>

        <select className="selector-categoria">
          <option>Todas</option>
          <option>Pesas</option>
          <option>Máquinas</option>
          <option>Accesorios</option>
        </select>

        <button className="btn-agregar">+ Agregar Equipo</button>
      </div>
    </div>
  );
};

export default InventarioGym;
