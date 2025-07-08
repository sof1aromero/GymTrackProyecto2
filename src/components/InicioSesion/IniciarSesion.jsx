import "../../styles/InicioSesion/IniciarSesion.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavbarLanding from "../InicioSesionFN/NavBar";

function IniciarSesion() {
  
  const navigate = useNavigate();
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");

  // Usuarios simulados
  const usuarios = [
    { documento: "12345678", password: "12345678", rol: "cliente" },
    { documento: "123456789", password: "123456789", rol: "entrenador" },
    { documento: "1234567890", password: "1234567890", rol: "admin" }
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!tipoDocumento || !documento || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    const usuario = usuarios.find(
      (u) => u.documento === documento && u.password === password
    );

    if (usuario) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("rol", usuario.rol);

      // Redirigir según el rol
      if (usuario.rol === "cliente") navigate("/cliente");
      else if (usuario.rol === "entrenador") navigate("/entrenador");
      else if (usuario.rol === "admin") navigate("/admin");

      window.location.reload();
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
    <NavbarLanding/>
    <div className="login-cliente-container">
      <div className="login-overlay">
        <section className="login-box">
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
            <p><Link to="/recuperar-contrasena">Olvidé mi contraseña</Link></p>
          </section>
        </section>
      </div>
    </div>
    </>
  );
}

export default IniciarSesion;