import React from "react";
import "../../styles/Administrador/VerEntrenadores.css";

const VerEntrenadores = () => {
  return (
    <div className="ver-entrenadores-container">
      <h2>Ver Entrenadores</h2>
      <p className="subtitulo">
        Gestiona y consulta la información del personal de entrenadores del gimnasio
      </p>

      <div className="filtros-entrenador">
        <label>Tipo de Búsqueda</label>
        <div className="busqueda-row">
          <select>
            <option>Todos los Entrenadores</option>
            <option>Por Documento</option>
            <option>Por Nombre</option>
            <option>Por Teléfono</option>
            <option>Todos los Miembros</option>
          </select>
          <input type="text" placeholder="Digite el valor a buscar" />
          <button className="btn-buscar">Buscar</button>
        </div>
      </div>

      <div className="lista-miembros">
        <div className="lista-header">
          <h3>Lista de Miembros</h3>
          <span>5 miembros registrados</span>
        </div>

        <div className="entrenador-card">
          <div className="info-entrenador">
            <p><strong>Nombre del entrenador</strong></p>
            <p><strong>Documento:</strong> 12345678</p>
            <p><strong>Teléfono:</strong> 3000000</p>
            <p><strong>Email:</strong> nom12@gmail.com</p>

            <span className="chip experiencia">experiencia</span>
            <span className="chip categoria">categoria</span>
          </div>

          <div className="info-detalle">
            <p><strong>Salario:</strong> $ 000.000</p>
            <p><strong>Fecha Ingreso:</strong> 00/00/0000</p>
            <p><strong>Fecha Fin:</strong> 00/00/0000</p>
            <span className="estado activo">Activo</span>

            <button className="btn ver">Ver</button>
            <button className="btn editar">Editar</button>
            <button className="btn eliminar">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerEntrenadores;

