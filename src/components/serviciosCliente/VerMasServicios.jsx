import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/serviciosCliente/VerMasServicios.css";

const servicios = [
  {
    nombre: "Spinnig",
    precio: "$80.000 mensual",
    descripcion: "Vive sesiones de cardio llenas de energía, música motivadora y quema de calorías.",
    horario: "Lunes a sábado, 5:00 a.m. – 10:00 p.m.",
    estado: "activo",
  },
  {
    nombre: "Gym Pilates",
    precio: "$90.000 mensual",
    descripcion: "Mejora tu postura, equilibrio y flexibilidad con sesiones de Pilates guiadas y relajantes.",
    horario: "Lunes a viernes, 6:00 a.m. – 8:00 p.m.",
    estado: "activo",
  },
  {
    nombre: "Gym Boxeo",
    precio: "$85.000 mensual",
    descripcion: "Entrenamientos intensos que combinan técnica de boxeo, cardio y fuerza para liberar el estrés.",
    horario: "Lunes a sábado, 7:00 a.m. – 9:00 p.m.",
    estado: "nuevo",
  },
  {
    nombre: "Gym Libre",
    precio: "$120.000 mensual",
    descripcion: "Acceso total a máquinas, peso libre y cardio. Ideal para entrenar por tu cuenta.",
    horario: "24 horas, todos los días",
    estado: "activo",
  },
  {
    nombre: "Entrenamiento Personalizado",
    precio: "$160.000 mensual",
    descripcion: "Recibe planes de entrenamiento 100% personalizados según tus objetivos y nivel.",
    horario: "A convenir con tu entrenador",
    estado: "nuevo",
  },
  {
    nombre: "Zona funcional",
    precio: "$95.000 mensual",
    descripcion: "Entrena con rutinas dinámicas que combinan fuerza, cardio y coordinación en un espacio libre.",
    horario: "Lunes a sábado, 6:00 a.m. – 8:00 p.m.",
    estado: "nuevo",
  },
];

const VerMasServicios = () => {
  const navigate = useNavigate();

  return (
    <div className="ver-mas-container">
      <h2>¡Elige el servicio que desees!</h2>
      <div className="servicio-grid">
        {servicios.map((s, index) => (
          <div className="servicio-card" key={index}>
            <h3>{s.nombre}</h3>
            <p><strong>Precio:</strong> {s.precio}</p>
            <p>{s.descripcion}</p>
            <p><strong>Horario:</strong> {s.horario}</p>
            {s.estado === "activo" ? (
              <span className="estado-activo">Servicio activo</span>
            ) : (
              <button className="agregar-btn">Agregar servicio</button>
            )}
          </div>
        ))}
      </div>
      <div className="notas-finales">
        <p>
          Los siguientes servicios incluyen clases guiadas por instructores profesionales: <br />
          <b>Gym Pilates, Gym Boxeo, Clases de Spinning y Entrenamiento Personalizado.</b>
        </p>
      </div>
      <button className="volver-btn" onClick={() => navigate("/cliente/inicio")}>
        Volver a Mis servicios
      </button>
    </div>
  );
};

export default VerMasServicios;
