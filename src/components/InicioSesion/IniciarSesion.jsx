import "../../styles/InicioSesion/IniciarSesion.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../InicioSesionFN/Footer"; // Asegúrate de que la ruta sea correcta

function IniciarSesion({ onLogin }) {
  const navigate = useNavigate();

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!tipoDocumento || !documento || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (documento === "12345678" && password === "12345678") {
      localStorage.setItem("authToken", "fake_token");
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-cliente-container">
      <div className="login-overlay">
        <section className="formulario login-box">
          <h2 className="login-title">Inicia Sesión</h2>

          <form onSubmit={handleLoginSubmit}>
            <div className="campo">
              <label htmlFor="tipoDocumento">Tipo de documento</label>
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

            <div className="campo campoDoc">
              <label htmlFor="documento">Nº Documento</label>
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

            <div className="campo campoPass">
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

            <div className="recordar">
              <input type="checkbox" id="recuerdame" />
              <label htmlFor="recuerdame">Recuérdame</label>
            </div>

            <button type="submit" className="btnIniciarSesion">
              Login
            </button>
          </form>

          <section className="opciones login-links">
            <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
            <p>
              <Link to="/recuperar-contrasena">Olvidé mi contraseña</Link>
            </p>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default IniciarSesion;
