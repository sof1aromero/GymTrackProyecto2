import "../../styles/InicioSesion/CambiarContrasena.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CambiarContrasena() {
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleCambiar = () => {
    if (!nuevaContrasena || !confirmarContrasena) {
      setMensaje("Por favor, completa ambos campos.");
      return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    setMensaje("¡Contraseña cambiada exitosamente!");

    setTimeout(() => {
      navigate("/iniciar-sesion");
    }, 2000);
  };

  return (
    <div className="contenedor">
      <section className="formulario">
        <h2>Cambiar contraseña</h2>

        <div className="campo">
          <label htmlFor="nueva">Nueva contraseña</label>
          <input
            type="password"
            id="nueva"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            placeholder="Escribe tu nueva contraseña"
          />
        </div>

        <div className="campo">
          <label htmlFor="confirmar">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmar"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            placeholder="Confirma la contraseña"
          />
        </div>

        <button className="btnReestablecer" onClick={handleCambiar}>
          Cambiar contraseña
        </button>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
}

export default CambiarContrasena;