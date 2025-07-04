import React from 'react';
import '../../styles/Visualizacion/ServiciosGymVisu.css';
import { useNavigate } from 'react-router-dom';

const servicios = [
  {
    titulo: 'Gym Libre',
    descripcion: 'Disfruta del acceso total a las máquinas, pesas libres y cardio. No incluye clases ni guía.',
    detalles: ['Horario: 24/7', 'Acceso completo', 'Ideal para seguir cualquier objetivo fitness'],
    precio: '$120.000 mensual'
  },
  {
    titulo: 'Gym Pilates',
    descripcion: 'Mejora tu flexibilidad, postura y equilibrio con nuestros equipos de Pilates.',
    detalles: ['Horario: Lunes a viernes', '6 p.m. - 7 p.m.', 'Acceso por tarjeta inteligente', 'Especialistas en Pilates'],
    precio: '$90.000 mensual'
  },
  {
    titulo: 'Gym Boxeo',
    descripcion: 'Quema calorías, fortalece tu cuerpo y libera estrés con entrenamiento de boxeo.',
    detalles: ['Horario: Lunes a viernes', '7 p.m. - 8 p.m.', 'Incluye entrenamiento funcional', 'Espacio adaptado'],
    precio: '$90.000 mensual'
  },
  {
    titulo: 'Entrenamiento Personalizado',
    descripcion: 'Logra tus objetivos con un plan personalizado guiado por nuestros entrenadores.',
    detalles: ['Horario a convenir', 'Asesoría 100% individual', 'Evaluación física'],
    precio: '$160.000 mensual'
  },
  {
    titulo: 'Clases de Spinning',
    descripcion: 'Vive la adrenalina de las bicicletas en grupo con música y luces.',
    detalles: ['Horario: Lunes a sábado', '5:00 a.m. - 10:00 a.m.', 'Grupos dirigidos', 'Cardio intenso'],
    precio: '$80.000 mensual'
  },
  {
    titulo: 'Zona Funcional',
    descripcion: 'Accede a entrenamiento funcional con bandas, cuerdas y estructuras.',
    detalles: ['Horario: Lunes a viernes', '6:00 a.m. - 9:00 a.m.', 'Espacio libre o con guía', 'Ideal para circuito'],
    precio: '$95.000 mensual'
  }
];

const ServiciosGym = () => {
  const navigate = useNavigate(); 

  return (
    <div className="contenedor-servicios">
      <h2>¡Disfruta de nuestros servicios y haz <br /> del entrenamiento tu mejor hábito!</h2>
      <div className="grid-servicios">
        {servicios.map((servicio, index) => (
          <div className="card-servicio" key={index}>
            <h3>{servicio.titulo}</h3>
            <p className="descripcion">{servicio.descripcion}</p>
            <ul>
              {servicio.detalles.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
            <p className="precio">{servicio.precio}</p>
            <button className="btn" onClick={() => navigate('/iniciar-sesion')}>
              ¡Empieza ahora!
            </button>
          </div>
        ))}
      </div>

      <p className="nota">
        Los siguientes servicios incluyen clases guiadas por instructores profesionales: <br />
        Gym Pilates, Gym Boxeo, Clases de Spinning y Entrenamiento Personalizado.
      </p>

      <div className="overlay-degradado"></div>
    </div>
  );
};

export default ServiciosGym;
