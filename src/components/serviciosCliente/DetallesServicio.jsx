import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/serviciosCliente/DetallesServicio.css";

const DetallesServicio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { servicio } = location.state || {};

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
      beneficios: ["Acceso a clases grupales", "Perfecto para tonificar y relajar"],
    },
    gymLibre: {
      nombre: "Gym Libre",
      precio: "$110.000 mensual",
      descripcion:
        "Acceso total a máquinas, peso libre y cardio. No incluye clases ni guía.",
      horario: "Disponible 24/7",
      beneficios: [
        "Acceso 24/7",
        "Acceso completo a todas las zonas",
        "Ideal para cualquier objetivo fitness",
      ],
    },
  };

  const datos = infoServicios[servicio];

  if (!datos) {
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
        <h2>{datos.nombre}</h2>
        <p className="descripcion">{datos.descripcion}</p>
        <p><strong>Horario:</strong> {datos.horario}</p>
        <p><strong>Precio:</strong> {datos.precio}</p>
        <div className="detalle-beneficios">
          <strong>Beneficios:</strong>
          <ul>
            {datos.beneficios.map((beneficio, i) => (
              <li key={i}><span className="check">✅</span>{beneficio}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => navigate("/cliente/inicio")}>← Volver a mis servicios</button>
      </div>
    </div>
  );
};

export default DetallesServicio;
