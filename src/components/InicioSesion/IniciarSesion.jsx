import "../../styles/InicioSesion/IniciarSesion.css"; 
import { Link } from "react-router-dom";

function IniciarSesion() {
  return (
    <div className="contenedor">
    

      <section className="formulario">
        <h2>Iniciar Sesión</h2>

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

        <div className="campoDoc">
          <label htmlFor="documento">N° Documento</label>
          <input
            type="text"
            id="documento"
            name="documento"
            placeholder="Ingrese su documento"
          />
        </div>

        <div className="campoPass">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            placeholder="Mínimo 8 caracteres"
            required
          />
        </div>

        <button className="btnIniciarSesion">Ingresar</button>

        <section className="opciones">
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
          <p>
            <Link to="/recuperar-contrasena">Olvidé mi contraseña</Link>
          </p>
        </section>
      </section>

      <div style={{ marginTop: "20px" }}>
        <Link to="/calendario" className="ver-calendario-link">
          Ver calendario de clases
        </Link>
      </div>

    </div>
  );
}

export default IniciarSesion;