import { Link, Outlet } from "react-router-dom";
import logo from "/src/img/logo.png";
import "../../styles/Entrenador/DashboardEntrenador.css";

const DashboardEntrenador = () => {
  return (
    <div className="layout-entrenador">
      <aside className="sidebar-entrenador">
         <img src={logo} alt="GymTrack Logo" className="logo-sidebar" />
        <div className="perfil-entrenador">
          <div className="perfil-icono">
            <i className="fas fa-user-circle"></i>
          </div>
          <p className="perfil-rol">Perfil Entrenador</p>
          <p className="perfil-email">entrenador@gymtrack.com</p>
        </div>


        <nav className="nav-sidebar">
          <Link to="/entrenador/inicio" className="nav-link">Inicio</Link>
          <Link to="/entrenador/calendario" className="nav-link">Calendario</Link>
          <Link to="/entrenador/cartera-pagos" className="nav-link">Cartera de Pagos</Link>
          <Link to="/entrenador/perfil-entrenador" className="nav-link">Perfil</Link>
          <Link to="/entrenador/notificaciones-entrenador" className="nav-link">Notificaciones</Link>
          <Link to="/login" className="logout-link">Cerrar sesión</Link>
        </nav>
      </aside>

      <div className="main-content">
        <div className="contenido-pagina">
          <Outlet /> {/* Aquí se renderiza el contenido dinámico */}
        </div>


      </div>
    </div>
  );
};

export default DashboardEntrenador;
