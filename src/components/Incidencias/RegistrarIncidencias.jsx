import React, { useState } from "react";
import "../../styles/Incidencias/RegistrarIncidencias.css";

const RegistrarIncidencias = () => {
  const [titulo, setTitulo] = useState("");
  const [area, setArea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [video, setVideo] = useState(null);

  const [modalExito, setModalExito] = useState(false);
  const [modalError, setModalError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !area || !descripcion) {
      setModalError(true);
      return;
    }

    setModalExito(true);
    setTitulo("");
    setArea("");
    setDescripcion("");
    setImagen(null);
    setVideo(null);
  };

  return (
    <div className="registrar-incidencia-container">
      <h2>Registrar incidencia</h2>
      <form onSubmit={handleSubmit} className="formulario-incidencia">
        <label>Título breve</label>
        <input
          type="text"
          placeholder="Ej: Máquina dañada, ducha con fuga..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Área afectada</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Seleccione una opción</option>
          <option value="Sala A">Sala A</option>
          <option value="Sala B">Sala B</option>
          <option value="Vestidores">Vestidores</option>
          <option value="Zona cardio">Zona cardio</option>
        </select>

        <label>Descripción detallada</label>
        <textarea
          placeholder="Describe lo ocurrido con detalles"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <label>Subir imagen (opcional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
        />

        <label>Subir video (opcional)</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />

        <button type="submit" className="btn-registrar">
          Registrar incidencia
        </button>
      </form>

      {/* MODAL DE ÉXITO */}
      {modalExito && (
        <div className="modal-overlay" onClick={() => setModalExito(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>✅ ¡Incidencia registrada exitosamente!</p>
            <button onClick={() => setModalExito(false)}>Aceptar</button>
          </div>
        </div>
      )}

      {/* MODAL DE ERROR */}
      {modalError && (
        <div className="modal-overlay" onClick={() => setModalError(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>⚠️ Por favor completa todos los campos obligatorios.</p>
            <button onClick={() => setModalError(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrarIncidencias;