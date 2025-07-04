import "../../styles/Administrador/RegistroEntrenadores.css";

const RegistroEntrenadores = () => {
  return (
    <div className="gestion-container">
      <h2>Gestión de Entrenadores</h2>
      <p className="subtitulo">Agrega nuevos entrenadores a la plataforma.</p>

      <form className="formulario">
        <h3>➕ Agregar Nuevo Entrenador</h3>

        <div className="grid-datos-personales">
          <div>
            <label>Nombre*</label>
            <input type="text" placeholder="Nombre" />
          </div>
          <div>
            <label>Apellido*</label>
            <input type="text" placeholder="Apellido" />
          </div>
          <div>
            <label>Email*</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label>Teléfono*</label>
            <input type="tel" placeholder="Teléfono" />
          </div>
        </div>

        <div className="info-laboral">
          <div>
            <label>Fecha de inicio de la cuenta*</label>
            <input type="date" />
          </div>
          <div>
            <label>Fecha de finalización de la cuenta*</label>
            <input type="date" />
          </div>
          <div>
            <label>Experiencia</label>
            <select>
              <option value="">Seleccionar...</option>
              <option value="1">1 año</option>
              <option value="2">2 años</option>
              <option value="3">3+ años</option>
            </select>
          </div>
          <div>
            <label>Hoja de Vida (PDF)*</label>
            <input type="file" accept=".pdf" />
          </div>
        </div>

        <div className="especialidades">
          <label>Especialidades</label>
          <div className="chips">
            <label><input type="checkbox" /> Pilates</label>
            <label><input type="checkbox" /> Yoga</label>
            <label><input type="checkbox" /> Boxeo</label>
            <label><input type="checkbox" /> Spinning</label>
            <label><input type="text" placeholder="Otro..." /></label>
          </div>
        </div>

        <div className="botones">
          <button type="submit" className="btn-agregar">Agregar entrenador</button>
          <button type="reset" className="btn-limpiar">Limpiar formulario</button>
        </div>
      </form>

      <div className="tabla-entrenadores">
        <h4>📋 Entrenadores registrados</h4>
        <p className="mensaje-vacio">No hay entrenadores registrados aún</p>
      </div>
    </div>
  );
};

export default RegistroEntrenadores;
