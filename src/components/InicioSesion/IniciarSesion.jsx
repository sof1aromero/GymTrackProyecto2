import "../../styles/InicioSesion/IniciarSesion.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function IniciarSesion({ onLogin }) {
  const navigate = useNavigate();

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!tipoDocumento || !documento || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (documento === '12345678' && password === '12345678') {
      localStorage.setItem('authToken', 'fake_token');
      navigate("/admin");
    }else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="contenedor">
      <section className="formulario">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleLoginSubmit}>
          <div className="campo">
            <label htmlFor="tipoDocumento">Tipo de Documento</label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
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
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btnIniciarSesion">
            Ingresar
          </button>
        </form>

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