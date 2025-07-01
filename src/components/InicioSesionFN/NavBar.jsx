import { Link } from "react-router-dom";
import "../../styles/InicioSesionFN/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src="src/img/logo.png" alt="Logo GymTrack" className="logo-navbar" />
        <ul className="nav-links">
          <li><Link to="/entrenadores">ENTRENADORES</Link></li>
          <li><Link to="/servicios">SERVICIOS</Link></li>
          <li><Link to="/contacto">CONTACTANOS</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/iniciar-sesion" className="btn-nav">Iniciar sesión</Link>
        <Link to="/registro" className="btn-nav">Crear cuenta</Link>
      </div>
    </nav>
  );
}

export default NavBar;