// RecuperarContrasena.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/InicioSesion/RecuperarContrasena.css";

function RecuperarContrasena() {
  const navigate = useNavigate();
  const [fase, setFase] = useState(1);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEnviar = (e) => {
    e.preventDefault();
    if (!email) {
      setMensaje("Por favor ingrese su correo.");
      return;
    }
    setMensaje("");
    setFase(2);
  };

  const handleCambiar = (e) => {
    e.preventDefault();
    if (!password1 || !password2) {
      setMensaje("Completa ambos campos.");
      return;
    }
    if (password1 !== password2) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }
    setMensaje("✅ Contraseña cambiada con éxito.");
    setTimeout(() => navigate("/iniciar-sesion"), 2000);
  };

  return (
    <div className="recuperar-page">
      <div className="recuperar-formulario">
        <h2>Recuperar contraseña</h2>

        {mensaje && <div className="mensaje">{mensaje}</div>}

        {fase === 1 ? (
          <form onSubmit={handleEnviar}>
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar código</button>
          </form>
        ) : (
          <form onSubmit={handleCambiar}>
            <label>Ingresa la nueva contraseña</label>
            <input
              type="password"
              value={password1}
              placeholder="Nueva contraseña"
              onChange={(e) => setPassword1(e.target.value)}
            />
            <label>Confirma la nueva contraseña</label>
            <input
              type="password"
              value={password2}
              placeholder="Confirmar contraseña"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button type="submit">Confirmar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RecuperarContrasena;
