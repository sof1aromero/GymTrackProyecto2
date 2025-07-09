import "../../styles/InicioSesion/Registro.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    tipoDocumento: "",
    documento: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistro = (e) => {
    e.preventDefault();

    const {
      nombre,
      tipoDocumento,
      documento,
      email,
      password,
      confirmarPassword,
    } = formData;

    if (
      !nombre ||
      !tipoDocumento ||
      !documento ||
      !email ||
      !password ||
      !confirmarPassword
    ) {
      setMensaje({
        tipo: "danger",
        texto: "Por favor, completa todos los campos.",
      });
      return;
    }

    if (password !== confirmarPassword) {
      setMensaje({
        tipo: "danger",
        texto: "Las contraseñas no coinciden.",
      });
      return;
    }

    // Simular éxito
    setMensaje({
      tipo: "success",
      texto: "🎉 Registro exitoso. Ahora puedes iniciar sesión.",
    });

    // Reiniciar formulario
    setFormData({
      nombre: "",
      tipoDocumento: "",
      documento: "",
      email: "",
      password: "",
      confirmarPassword: "",
    });
  };

  return (
    <div className="registro-container">
      <div className="registro-box">
        <h2 className="titulo-registro">📝 Crear Cuenta</h2>

        {mensaje.texto && (
          <Alert variant={mensaje.tipo} onClose={() => setMensaje({ texto: "" })} dismissible>
            {mensaje.texto}
          </Alert>
        )}

        <form onSubmit={handleRegistro}>
          <div className="campo-registro">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="campo-registro">
            <label>Tipo de documento</label>
            <select
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="campo-registro">
            <label>Número de documento</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
            />
          </div>

          <div className="campo-registro">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="campo-registro">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Mínimo 8 caracteres"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="campo-registro">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-registrar">
            Registrarse
          </button>
        </form>

        <div className="link-login">
          ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Registro;
