import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/serviciosCliente/DetallesServicio.css";

const DetallesServicio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { servicio } = location.state || {};

  // Información de los servicios
  const infoServicios = {
    spinning: {
      nombre: "Spinning",
      precio: "$80.000 mensual",
      descripcion:
        "Vive sesiones de cardio llenas de energía, música motivadora y quema de calorías.",
      horario: "Lunes a sábado, 5:00 a.m. - 10:00 p.m.",
      beneficios: [
        "Grupos energizantes",
        "Mejora tu resistencia cardiovascular",
      ],
    },
    pilates: {
      nombre: "Gym Pilates",
      precio: "$90.000 mensual",
      descripcion:
        "Mejora tu postura, equilibrio y flexibilidad con sesiones de Pilates guiadas y relajantes.",
      horario: "Lunes a viernes, 6:00 a.m. - 8:00 p.m.",
      beneficios: [
        "Acceso a clases grupales",
        "Perfecto para tonificar y relajar",
      ],
    },
    gymLibre: {
      nombre: "Gym Libre",
      precio: "$110.000 mensual",
      descripcion:
        "Acceso total a máquinas, peso libre y cardio. No incluye clases ni guía. Ideal para entrenar por tu cuenta.",
      horario: "Disponible 24/7",
      beneficios: [
        "Acceso 24/7",
        "Acceso completo a todas las zonas",
        "Ideal para cualquier objetivo fitness",
      ],
    },
  };

  const servicioSeleccionado = infoServicios[servicio];

  // Si el servicio no existe
  if (!servicioSeleccionado) {
    return (
      <div className="detalle-servicio-container">
        <div className="detalle-servicio-card">
          <h2>Servicio no encontrado</h2>
          <button onClick={() => navigate("/cliente/inicio")}>Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-servicio-container">
      <div className="detalle-servicio-card">
        <h2>Detalle del servicio → {servicioSeleccionado.nombre}</h2>
        <p>{servicioSeleccionado.descripcion}</p>
        <p>
          <strong>Horario:</strong> {servicioSeleccionado.horario}
        </p>
        <p>
          <strong>Precio:</strong> {servicioSeleccionado.precio}
        </p>

        <div className="detalle-beneficios">
          <strong>Beneficios:</strong>
          <ul>
            {servicioSeleccionado.beneficios.map((b, i) => (
              <li key={i}>
                <span className="check">✅</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => navigate("/cliente/inicio")}>
          Volver a mis servicios
        </button>
      </div>
    </div>
  );
};

export default DetallesServicio;
