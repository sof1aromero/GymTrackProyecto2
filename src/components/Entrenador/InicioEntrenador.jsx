import "../../styles/Entrenador/InicioEntrenador.css";
import fondo from "/src/img/logo-gymtrack-blanco.png"; 

const InicioEntrenador = () => {
  return (
    <div
      className="inicio-entrenador"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="overlay">
        <div className="contenido animated-fade-in">
          <h1>
            ¡Bienvenido <br />
            <span>Entrenador Rogelio</span>!
          </h1>
          <p className="mensaje">¡Empecemos!</p>
        </div>
      </div>
    </div>
  );
};

export default InicioEntrenador;