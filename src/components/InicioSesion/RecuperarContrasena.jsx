import "../../styles/InicioSesion/RecuperarContrasena.css"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RecuperarContrasena() {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const generarCodigo = () => {
    if (!correo.trim()) {
      alert("Por favor, ingresa un correo electrónico.");
      return;
    }

    const nuevoCodigo = Math.floor(100000 + Math.random() * 900000);
    setCodigo(nuevoCodigo.toString());
  };

  const confirmarCodigo = () => {
    if (!codigo) {
      alert("Debes generar un código primero.");
      return;
    }

    navigate("/cambiar-contrasena");
  };

  return (
    <div className="contenedor">


      <section className="formulario">
        <h2>Recuperar contraseña</h2>

        <div className="campo">
          <label htmlFor="correorecuperar">Ingresar el correo electrónico con el que se registró</label>
          <input
            type="email"
            id="correorecuperar"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </div>

        <button className="btnConfirmar">Enviar código</button>

        <div className="campo">
          <label htmlFor="codigorecuperar">Código enviado al correo</label>
          <div className="grupo-codigo">
            <input
              type="text"
              id="codigorecuperar"
              value={codigo}
              placeholder="Genera un código"
              readOnly
            />
            <button type="button" className="btnGenerar" onClick={generarCodigo}>
              Generar
            </button>
          </div>
        </div>

        <button className="btnReestablecer" onClick={confirmarCodigo}>
          Confirmar
        </button>

        <section className="opciones">
          <p>
            ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión aquí</Link>
          </p>
        </section>
      </section>
    </div>
  );
}

export default RecuperarContrasena;