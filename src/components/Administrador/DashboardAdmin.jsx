
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "/src/img/logo.png"; // Asegúrate de que esta imagen exista
import "../../styles/Administrador/SidebarAdmin.css"; // Estilos que también te doy ahora
import InicioAdmin from './InicioAdmin';

const SidebarAdmin = () => {
  return (
    
    <Container>
      <Row>
        <Col >
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
        <Link to="/admin/clientes" className="nav-link">Pagos Clientes</Link>
        <Link to="/admin/entrenadores" className="nav-link">Pagos Entrenadores</Link>
        <Link to="/admin/distribucion" className="nav-link">Distribucion Entrenadores</Link>
        <Link to="/login" className="logout-link">Cerrar sesión</Link>
      </nav>
    </aside>
        </Col>
        <Col xs={8}>
          <h1>ADMIN</h1>
          <Routes>
            <Route path='' element={<InicioAdmin></InicioAdmin>}></Route>
          </Routes>
        </Col>
      </Row>|
    </Container>
  );
}

export default SidebarAdmin;