import React, { useState } from "react";
import "../../styles/Entrenador/CalendarioEntrenador.css";
import {
  FaBell,
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const Calendario = () => {
  /* ---------- Estados principales ---------- */
  const [mostrarModal, setMostrarModal]       = useState(false);  // Modal crear / editar
  const [mostrarHistorial, setMostrarHistorial] = useState(false); // Modal historial
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);   // Día activo
  const [clases, setClases]                   = useState([]);     // Array de clases
  const [editIndex, setEditIndex]             = useState(null);   // Posición que se edita

  /* ---------- Utilidades ---------- */
  const manejarClickDia = (dia) => dia && setDiaSeleccionado(dia);

  const manejarAbrirModal = () => {
    if (diaSeleccionado) setMostrarModal(true);
    else alert("Por favor selecciona un día antes de programar una clase.");
  };

  /* ---------- Registrar o guardar cambios ---------- */
  const manejarSubmitClase = (e) => {
    e.preventDefault();
    const f = e.target;
    const claseForm = {
      titulo:        f.titulo.value,
      descripcion:   f.descripcion.value,
      fecha:         `Martes, ${diaSeleccionado} de Julio del 2025`,
      horaInicio:    f.horaInicio.value,
      horaFin:       f.horaFin.value,
      dificultad:    f.dificultad.value,
      participantes: f.participantes.value,
      materiales:    f.materiales.value,
    };

    setClases((prev) => {
      const nuevas = [...prev];
      if (editIndex !== null) {
        nuevas[editIndex] = claseForm;   // ⟵ editar
      } else {
        nuevas.push(claseForm);          // ⟵ crear
      }
      return nuevas;
    });

    f.reset();
    setEditIndex(null);
    setMostrarModal(false);
    setMostrarHistorial(true);
  };

  /* ---------- Abrir para editar ---------- */
  const manejarModificar = (i) => {
    const clase = clases[i];
    const dia = +clase.fecha.match(/,\s(\d+)\sde/)[1]; // extrae 7, 8, 9…
    setDiaSeleccionado(dia);
    setEditIndex(i);
    setMostrarHistorial(false);
    setMostrarModal(true);
  };

  /* ---------- Borrar con confirmación ---------- */
  const manejarBorrar = (i) => {
    if (window.confirm("¿Estás seguro de borrar esta clase?")) {
      setClases((prev) => prev.filter((_, idx) => idx !== i));
    }
  };

  /* ---------- Render de cada celda día ---------- */
  const renderDia = (dia) => (
    <td
      key={dia}
      className={dia === diaSeleccionado ? "dia-seleccionado semana-actual" : "semana-actual"}
      onClick={() => manejarClickDia(dia)}
    >
      {dia}
    </td>
  );

  /* ---------- Datos precargados en modo edición ---------- */
  const claseEditando = editIndex !== null ? clases[editIndex] : {};

  return (
    <div className="agenda-container">
      {/* ---------- Encabezado ---------- */}
      <header className="agenda-header">
        <h2>Agenda de clases</h2>
        <div className="icons">
          <FaBell className="icon" />
          <FaUserCircle className="icon user" />
        </div>
      </header>

      {/* ---------- Calendario ---------- */}
      <section className="agenda-content">
        <div className="agenda-controls">
          <button><FaChevronLeft /></button>
          <span>Julio del 2025</span>
          <button><FaChevronRight /></button>
        </div>

        <table className="agenda-calendar">
          <thead><tr><th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th></tr></thead>
          <tbody>
            <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
            <tr>{[7,8,9,10,11,12,13].map(renderDia)}</tr>
            <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
            <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
            <tr><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>

        <div className="agenda-buttons">
          <button className="btn btn-primary" onClick={manejarAbrirModal}>
            Programar clase
          </button>
          <button className="btn btn-secondary" onClick={() => setMostrarHistorial(true)}>
            Historial de clase
          </button>
        </div>
      </section>

      {/* ---------- Modal CREAR / EDITAR ---------- */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3 className="titulo-modal">
                {editIndex !== null ? "MODIFICAR CLASE" : "PROGRAMAR NUEVA CLASE"}
              </h3>
              <p className="subtitulo-modal">
                {editIndex !== null ? "EDITA LOS DETALLES DE TU SESIÓN" : "CREA UNA NUEVA SESIÓN DE ENTRENAMIENTO"}
              </p>
              <button className="close-modal" onClick={() => { setMostrarModal(false); setEditIndex(null); }}>
                <FaTimes />
              </button>
            </div>

            <form className="form-clase" onSubmit={manejarSubmitClase}>
              <label>Título de la Clase:</label>
              <input
                name="titulo"
                type="text"
                defaultValue={claseEditando.titulo}
                placeholder="Ej: Zumba & Rumba Party — Ritmos Latinos 🔥💃"
                required
              />

              <label>Descripción:</label>
              <textarea
                name="descripcion"
                defaultValue={claseEditando.descripcion}
                placeholder="Una clase llena de energía, música latina y mucho movimiento…"
                rows="3"
                required
              />

              <div className="form-fechas">
                <div>
                  <label>Fecha:</label>
                  <input type="text" value={`Martes, ${diaSeleccionado} de Julio del 2025`} readOnly />
                </div>
                <div>
                  <label>Hora inicio:</label>
                  <input name="horaInicio" type="time" defaultValue={claseEditando.horaInicio} required />
                </div>
                <div>
                  <label>Hora fin:</label>
                  <input name="horaFin" type="time" defaultValue={claseEditando.horaFin} required />
                </div>
              </div>

              <label>Nivel de Dificultad:</label>
              <input
                name="dificultad"
                type="text"
                defaultValue={claseEditando.dificultad}
                placeholder="Principiante, intermedio o avanzado"
                required
              />

              <label>Participantes:</label>
              <input
                name="participantes"
                type="text"
                defaultValue={claseEditando.participantes}
                placeholder="Ej: Mínimo 5 — Máximo 15 personas."
                required
              />

              <label>Material Necesario:</label>
              <textarea
                name="materiales"
                defaultValue={claseEditando.materiales}
                placeholder="Ropa cómoda, toalla y botella de agua…"
                rows="2"
                required
              />

              <div className="botones-modal">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => { setMostrarModal(false); setMostrarHistorial(true); setEditIndex(null); }}
                >
                  Historial de clase
                </button>
                <button type="submit" className="btn btn-primary">
                  {editIndex !== null ? "Guardar cambios" : "Registrar clase"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------- Modal HISTORIAL ---------- */}
      {mostrarHistorial && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3 className="titulo-modal">HISTORIAL DE CLASES</h3>
              <button className="close-modal" onClick={() => setMostrarHistorial(false)}>
                <FaTimes />
              </button>
            </div>

            {clases.length === 0 ? (
              <p className="sin-clases">Aún no has registrado ninguna clase.</p>
            ) : (
              <ul className="lista-historial">
                {clases.map((clase, i) => (
                  <li key={i} className="item-historial">
                    <div className="info-clase">
                      <h4>{clase.titulo}</h4>
                      <p>{clase.descripcion}</p>
                      <p><strong>Fecha:</strong> {clase.fecha}</p>
                      <p><strong>Hora:</strong> {clase.horaInicio} – {clase.horaFin}</p>
                      <p><strong>Dificultad:</strong> {clase.dificultad}</p>
                      <p><strong>Participantes:</strong> {clase.participantes}</p>
                    </div>
                    <div className="acciones-historial">
                      <button className="btn btn-primary" onClick={() => manejarModificar(i)}>
                        Modificar
                      </button>
                      <button className="btn btn-danger"  onClick={() => manejarBorrar(i)}>
                        Borrar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendario;
