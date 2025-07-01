
import { Link } from "react-router-dom";
import logo from "/src/img/logo.png"; // Asegúrate de que esta imagen exista
import "../../styles/Administrador/SidebarAdmin.css"; // Estilos que también te doy ahora

const SidebarAdmin = () => {
  return (
    <aside className="sidebar-admin">
      <div className="perfil-admin">
        <div className="perfil-icono">
          <i className="fas fa-user-circle"></i>
        </div>
        <p className="perfil-rol">Perfil Administrador</p>
        <p className="perfil-email">admin@gymtrack.com</p>
      </div>

      <img src={logo} alt="GymTrack Logo" className="logo-sidebar" />

      <nav className="nav-sidebar">
        <Link to="/admin/inicio" className="nav-link">Inicio</Link>
        <Link to="/admin/registro" className="nav-link">Registrar Entrenadores</Link>
        <Link to="/admin/pagos" className="nav-link">Pagos</Link>
        <Link to="/admin/inventario" className="nav-link">Inventario</Link>
        <Link to="/admin/miembros" className="nav-link">Ver Miembros</Link>
        <Link to="/admin/coaches" className="nav-link">Entrenadores</Link>
        <Link to="/admin/reportes" className="nav-link">Reportes</Link>
        <Link to="/login" className="logout-link">Cerrar sesión</Link>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;