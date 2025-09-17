import React from "react";
import "../../styles/Administrador/VerMiembros.css";

const VerMiembros = () => {
  return (
    <div className="ver-miembros-container">
      <h2>Ver Miembros</h2>
      <p className="subtexto">Gestiona y consulta la información de los miembros del gimnasio</p>

      <div className="busqueda-container">
        <label htmlFor="tipoBusqueda">Tipo de Búsqueda</label>
        <div className="filtro-busqueda">
          <select id="tipoBusqueda">
            <option>Todos los Miembros</option>
            <option>Por Documento</option>
            <option>Por Nombre</option>
            <option>Por Teléfono</option>
          </select>
          <input type="text" placeholder="Digite el valor a buscar" />
          <button className="btn-buscar">Buscar</button>
        </div>
      </div>


      <div className="lista-miembros">
        <div className="encabezado-lista">
          <h3>Lista de Miembros</h3>
          <span>5 miembros registrados</span>
        </div>

        <div className="miembro-card">
          <div className="info">
            <h4>Nombre del miembro</h4>
            <p><strong>Documento:</strong> 12345678</p>
            <p><strong>Teléfono:</strong> 3000000</p>
            <p><strong>Email:</strong> nom12@gmail.com</p>
            <p><strong>Fecha Ingreso:</strong> 00/00/0000</p>
            <span className="estado activo">Activo</span>
          </div>
          <div className="acciones">
            <button className="btn-ver">Ver</button>
            <button className="btn-editar">Editar</button>
            <button className="btn-eliminar">Eliminar</button>
          </div>
        </div>

        {/* Repite .miembro-card para cada miembro */}
      </div>
    </div>
  );
};

export default VerMiembros;
