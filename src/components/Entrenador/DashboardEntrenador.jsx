import { NavLink, Outlet } from "react-router-dom";
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
          <NavLink to="/entrenador/inicio" className="nav-link">Inicio</NavLink>
          <NavLink to="/entrenador/calendario" className="nav-link">Calendario</NavLink>
          <NavLink to="/entrenador/cartera-pagos" className="nav-link">Cartera de Pagos</NavLink>
          <NavLink to="/entrenador/perfil-entrenador" className="nav-link">Perfil</NavLink>
          <NavLink to="/entrenador/notificaciones-entrenador" className="nav-link">Notificaciones</NavLink>
          <a href="/login" className="logout-link">Cerrar sesión</a>
        </nav>
      </aside>

      <main className="main-content">
        <div className="contenido-pagina">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardEntrenador;
