import "../../styles/InicioSesion/Registro.css"; 
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="contenedor">
      <header className="titulo">

      </header>

      <section className="formulario">
        <h2>Crear Cuenta</h2>

        <div className="campo">
          <label htmlFor="primerNombre">Primer Nombre</label>
          <input type="text" id="primerNombre" name="primerNombre" placeholder="Ingrese su primer nombre" required />
        </div>

        <div className="campo">
          <label htmlFor="segundoNombre">Segundo Nombre (opcional)</label>
          <input type="text" id="segundoNombre" name="segundoNombre" placeholder="Ingrese su segundo nombre" />
        </div>

        <div className="campo">
          <label htmlFor="primerApellido">Primer Apellido</label>
          <input type="text" id="primerApellido" name="primerApellido" placeholder="Ingrese su primer apellido" required />
        </div>

        <div className="campo">
          <label htmlFor="segundoApellido">Segundo Apellido (opcional)</label>
          <input type="text" id="segundoApellido" name="segundoApellido" placeholder="Ingrese su segundo apellido" />
        </div>

        <div className="campo">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su número de teléfono" required />
        </div>

        <div className="campo">
          <label htmlFor="tipoDocumento">Tipo de Documento</label>
          <select id="tipoDocumento" name="tipoDocumento" required>
            <option value="">Seleccione...</option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="documento">N° Documento</label>
          <input type="text" id="documento" name="documento" placeholder="Ingrese su documento" required />
        </div>

        <div className="campo">
          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" id="correo" name="correo" placeholder="Ingrese su correo" required />
        </div>

        <div className="campo">
          <label htmlFor="rol">¿Quién eres?</label>
          <select id="rol" name="rol" required>
            <option value="cliente">Cliente</option>
            <option value="entrenador">Entrenador</option>
          </select>
        </div>

        <button className="btnRegistrar">Registrar</button>

        <section className="opciones">
          <p>
            ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión aquí</Link>
          </p>
        </section>
      </section>

    </div>
  );
}

export default Registro;