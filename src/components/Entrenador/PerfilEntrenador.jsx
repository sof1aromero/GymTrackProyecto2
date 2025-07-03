import React from 'react';
import '../../styles/Entrenador/PerfilEntrenador.css';
import { FaHome, FaCalendarAlt, FaWallet, FaUser, FaBell, FaSignOutAlt } from 'react-icons/fa'; // Aunque ya no se usen todas, las mantengo por si la sidebar regresa.

function Perfil() {
  return (
    <div className="contenedor-perfil">
      {/* La barra lateral ha sido eliminada de aquí */}

      <main className="contenido-principal">
        <header>
          <h1>Perfil</h1>
        </header>
        <section className="formulario-perfil">
          <h2>Información personal</h2>
          <div className="grupo-formulario">
            <label htmlFor="nombreCompleto">Nombre completo</label>
            <input type="text" id="nombreCompleto" />
          </div>
          <div className="grupo-formulario fila">
            <div className="col-50">
              <label htmlFor="tipoDocumento">Tipo de documento</label>
              <select id="tipoDocumento">
                <option value="">Selecciona un tipo</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="PA">Pasaporte</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div className="col-50">
              <label htmlFor="nDocumento">Nº Documento</label>
              <input type="text" id="nDocumento" />
            </div>
          </div>
          <div className="grupo-formulario">
            <label htmlFor="correoElectronico">Correo electrónico</label>
            <input type="email" id="correoElectronico" />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="telefonoMovil">Teléfono móvil</label>
            <input type="tel" id="telefonoMovil" />
          </div>

          <h2>Información del Contrato</h2>
          <div className="grupo-formulario fila">
            <div className="col-50">
              <label htmlFor="inicioContrato">Inicio del Contrato</label>
              <div className="entrada-fecha">
                <input type="text" id="inicioContrato" placeholder="dd/mm/aaaa" />
                <button className="icono-calendario">🗓️</button>
              </div>
            </div>
            <div className="col-50">
              <label htmlFor="finalizacionContrato">Finalización del Contrato</label>
              <div className="entrada-fecha">
                <input type="text" id="finalizacionContrato" placeholder="dd/mm/aaaa" />
                <button className="icono-calendario">🗓️</button>
              </div>
            </div>
          </div>

          <div className="grupo-botones">
            <button className="boton-primario">Editar Perfil</button>
            <button className="boton-secundario">Cambiar contraseña</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Perfil;