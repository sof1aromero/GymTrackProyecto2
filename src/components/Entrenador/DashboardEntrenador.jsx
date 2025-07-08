
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "/src/img/logo.png"; // Asegúrate de que esta imagen exista
import "../../styles/Entrenador/DashboardEntrenador.css"; // Estilos que también te doy ahora
import InicioEntrenador from './InicioEntrenador';

const DashboardEntrenador = () => {
  return (
    
    <div className="dashboard-entrenador">
      <Row>
        <Col xs={2} >
          <aside className="sidebar-admin">
      <div className="perfil-entrenador">
        <div className="perfil-icono">
          <i className="fas fa-user-circle"></i>
        </div>
        <p className="perfil-rol">Perfil Entrenadorr</p>
        <p className="perfil-email">entrenador@gymtrack.com</p>
      </div>

      <img src={logo} alt="GymTrack Logo" className="logo-sidebar" />

      <nav className="nav-sidebar">
        <Link to="/entrenador" className="nav-link">Inicio</Link>
        <Link to="/entrenador/calendario" className="nav-link">Calendario</Link>
        <Link to="/entrenador/cartera-pagos" className="nav-link">Pagos</Link>
        <Link to="/entrenador/perfil" className="nav-link">Perfil</Link>
        <Link to="/entrenador/notificaciones" className="nav-link">Notificaciones</Link>
        <Link to="/login" className="logout-link">Cerrar sesión</Link>
      </nav>
    </aside>
        </Col>
        <Col >

          <Routes>
            <Route path='' element={<InicioEntrenador/>}></Route>

          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardEntrenador;