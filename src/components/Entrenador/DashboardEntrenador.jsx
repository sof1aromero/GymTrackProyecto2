
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "/src/img/logo.png"; // Asegúrate de que esta imagen exista
import "../../styles/Entrenador/DashboardEntrenador.css"; // Estilos que también te doy ahora
import InicioEntrenador from './InicioEntrenador';
import CalendarioEntrenador from './CalendarioEntrenador';
import CarteraPagosEntrenador from './CarteraPagos';
import PerfilEntrenador from './PerfilEntrenador';
import NotificacionesEntrenador from './NotificacionesEntrenador';

const DashboardEntrenador = () => {
  return (
    
    <div className="dashboard-entrenador">
      <Row>
        <Col xs={2} >
          <aside className="sidebar-entrenador">
      <div className="perfil-entrenador">
        <div className="perfil-icono">
          <i className="fas fa-user-circle"></i>
        </div>
        <p className="perfil-rol">Perfil Entrenador</p>
        <p className="perfil-email">entrenador@gymtrack.com</p>
      </div>

      <img src={logo} alt="GymTrack Logo" className="logo-sidebar" />

      <nav className="nav-sidebar">
        <Link to="/entrenador" className="nav-link">Inicio</Link>
        <Link to="/entrenador/calendario" className="nav-link">Calendario</Link>
        <Link to="/entrenador/cartera-pagos" className="nav-link">Pagos</Link>
        <Link to="/entrenador/perfil-entrenador" className="nav-link">Perfil</Link>
        <Link to="/entrenador/notificaciones-entrenador" className="nav-link">Notificaciones</Link>
        <Link to="/" className="logout-link">Cerrar sesión</Link>
      </nav>
    </aside>
        </Col>
        <Col >

          <Routes>
            <Route path='' element={<InicioEntrenador/>}></Route>
            <Route path='/calendario' element={<CalendarioEntrenador/>}></Route>
            <Route path='/cartera-pagos' element={<CarteraPagosEntrenador/>}></Route>
            <Route path='/perfil-entrenador' element={<PerfilEntrenador/>}></Route>
            <Route path='/notificaciones-entrenador' element={<NotificacionesEntrenador/>}></Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardEntrenador;