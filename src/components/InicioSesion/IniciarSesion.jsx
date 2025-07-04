import "../../styles/InicioSesion/IniciarSesion.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function IniciarSesion() {
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

    // Simulación de autenticación
    if (documento === "12345678" && password === "12345678") {
    localStorage.setItem("isAuthenticated", "true"); // 👈 Marca que el usuario ha iniciado sesión
    navigate("/cliente/inicio"); // 👈 Redirige
    window.location.reload();    // 👈 Recarga para que App.jsx detecte la sesión activa
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
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder="Ingrese su documento"
                required
              />
            </div>

            <div className="campo campoPass">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                required
                minLength={8}
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

    </div>
  );
}

export default IniciarSesion;
