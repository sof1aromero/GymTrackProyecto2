import React from "react";
import "../../styles/Inventario/TablaInventario.css";

const TablaInventario = () => {
  return (
    <div className="contenedor-tabla">
      <h2 className="titulo-inventario">Inventario GymTrack</h2>
      <p className="subtitulo-inventario">
        Gestiona todo el equipo y accesorios del gimnasio
      </p>

      <div className="tabla-contenedor">
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Ubicación</th>
              <th>Precio Unit.</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Puedes mapear aquí los datos del inventario en el futuro */}
            <tr>
              <td colSpan="7" className="fila-vacia">No hay equipos registrados aún.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaInventario;
