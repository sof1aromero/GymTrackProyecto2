import React, { useState } from 'react';
import '../../styles/Entrenador/PerfilEntrenador.css';
import { FaCalendarAlt, FaPen } from 'react-icons/fa';

function PerfilEntrenador() {
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cambios, setCambios] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Estados del modal
  const [passActual, setPassActual] = useState('');
  const [nuevaPass, setNuevaPass] = useState('');
  const [confirmarPass, setConfirmarPass] = useState('');
  const [mensajePass, setMensajePass] = useState('');

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
    setCambios(true);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
    setCambios(true);
  };

  const guardarCambios = () => {
    alert("Cambios guardados exitosamente.");
    setCambios(false);
  };

  const guardarNuevaContrasena = () => {
    if (!passActual || !nuevaPass || !confirmarPass) {
      setMensajePass("Por favor completa todos los campos.");
    } else if (nuevaPass !== confirmarPass) {
      setMensajePass("Las contraseñas no coinciden.");
    } else {
      setMensajePass("¡Contraseña cambiada exitosamente!");
      setTimeout(() => {
        cerrarModal();
      }, 1500);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setPassActual('');
    setNuevaPass('');
    setConfirmarPass('');
    setMensajePass('');
  };

  return (
    <div className="contenedor-perfil">
      <main className="contenido-principal">
        <header>
          <h1>Perfil</h1>
        </header>

        <section className="formulario-perfil">
          <h2>Información personal</h2>

          <div className="grupo-formulario">
            <label htmlFor="nombreCompleto">Nombre completo</label>
            <input type="text" id="nombreCompleto" value="Vanesa Gómez" readOnly />
          </div>

          <div className="grupo-formulario fila">
            <div className="col-50">
              <label htmlFor="tipoDocumento">Tipo de documento</label>
              <select id="tipoDocumento" value="CC" disabled>
                <option value="CC">Cédula de Ciudadanía</option>
              </select>
            </div>
            <div className="col-50">
              <label htmlFor="nDocumento">Nº Documento</label>
              <input type="text" id="nDocumento" value="1234567890" readOnly />
            </div>
          </div>

          <div className="grupo-formulario editable">
            <label>
              Correo electrónico <FaPen className="icono-lapiz" />
            </label>
            <input
              type="email"
              value={correo}
              onChange={handleCorreoChange}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="grupo-formulario editable">
            <label>
              Teléfono móvil <FaPen className="icono-lapiz" />
            </label>
            <input
              type="tel"
              value={telefono}
              onChange={handleTelefonoChange}
              placeholder="3001234567"
            />
          </div>

          <h2>Información del Contrato</h2>
          <div className="grupo-formulario fila">
            <div className="col-50">
              <label>Inicio del Contrato</label>
              <div className="entrada-fecha">
                <input type="text" placeholder="dd/mm/aaaa" />
                <button className="icono-calendario"><FaCalendarAlt /></button>
              </div>
            </div>
            <div className="col-50">
              <label>Finalización del Contrato</label>
              <div className="entrada-fecha">
                <input type="text" placeholder="dd/mm/aaaa" />
                <button className="icono-calendario"><FaCalendarAlt /></button>
              </div>
            </div>
          </div>

          {cambios && (
            <div className="grupo-botones">
              <button className="boton-primario" onClick={guardarCambios}>
                Guardar cambios
              </button>
            </div>
          )}

          <div className="grupo-botones">
            <button className="boton-secundario" onClick={() => setMostrarModal(true)}>
              Cambiar contraseña
            </button>
          </div>
        </section>
      </main>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <h2>Cambiar contraseña</h2>
            <div className="grupo-formulario">
              <label>Contraseña actual</label>
              <input
                type="password"
                value={passActual}
                onChange={(e) => setPassActual(e.target.value)}
              />
            </div>
            <div className="grupo-formulario">
              <label>Nueva contraseña</label>
              <input
                type="password"
                value={nuevaPass}
                onChange={(e) => setNuevaPass(e.target.value)}
              />
            </div>
            <div className="grupo-formulario">
              <label>Confirmar nueva contraseña</label>
              <input
                type="password"
                value={confirmarPass}
                onChange={(e) => setConfirmarPass(e.target.value)}
              />
            </div>

            {mensajePass && <p className="mensaje-password">{mensajePass}</p>}

            <div className="grupo-botones">
              <button className="boton-primario" onClick={guardarNuevaContrasena}>
                Guardar nueva contraseña
              </button>
              <button className="boton-secundario" onClick={cerrarModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilEntrenador;
