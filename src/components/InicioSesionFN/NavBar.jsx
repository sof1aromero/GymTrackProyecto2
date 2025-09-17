// src/components/NavbarLanding.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import '../../styles/InicioSesionFN/NavBar.css';
import {Link} from "react-router-dom"

const NavbarLanding= () => {
  return (
    <Navbar expand="lg" className="py-0" style={{minHeight: "90px"}}>
      <Container fluid className="px-4 px-md-5">
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="/logoGymTrackSinFondo.png"
            alt="GymTrack"
            className="logo-img me-2"
          />
        </Navbar.Brand>

        {/* Botón hamburguesa para móviles */}
        <Navbar.Toggle aria-controls="navbar-landing" />

        <Navbar.Collapse id="navbar-landing" className="justify-content-between">
          {/* Enlaces */}
          <Nav className="ms-auto me-4 navbar-center-links d-flex gap-4 fw-semibold">
            <Nav.Link href="#contacto" className="text-dark">Contáctanos</Nav.Link>
            <Nav.Link href="#servicios" className="text-dark">Nuestros servicios</Nav.Link>
            <Nav.Link href="#visitanos" className="text-dark">Visítanos</Nav.Link>
          </Nav>

          {/* Botones */}
          <div className="d-flex gap-3">
              <Button as={Link} to="/iniciar-sesion" className="btn-login">Iniciar Sesión</Button>
              <Button as={Link} to="/registro" className="btn-registrarse">Registrarse</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLanding;
