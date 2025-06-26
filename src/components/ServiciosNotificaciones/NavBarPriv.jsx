import { Navbar, Nav, Container } from "react-bootstrap";
import LogoGymTrack from "../../img/logo.png";
import MenuUsuario from "../ServiciosNotificaciones/MenuUsuario";
import { Link } from "react-router-dom";
import MenuNotificaciones from "../ServiciosNotificaciones/MenuNotificaciones";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"

const NavBarPriv = () => {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);

    const notificaciones = [
        { tipo: "pago", texto: "Tu pago de abril está pendiente." },
        { tipo: "clase", texto: "Tienes una clase programada mañana." },
        { tipo: "alerta", texto: "Tu membresía expira en 3 días." },
    ];

    const handleVerTodasNotificaciones = () => {
        navigate("/centro-notificaciones");
    };
    return (
        <Navbar expand="lg" className="border p-2 position-relative">
            <Container className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="/">
                    <img
                        src={LogoGymTrack}
                        alt="GymTrack Logo"
                        height="240"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                <Nav className="d-flex gap-4 nav-links">
                    <Link to="/mis-servicios" className="fw-semibold text-decoration-underline nav-link mx-3">
                        Mis Servicios
                    </Link>
                    <Link to="/entrenadores" className="fw-semibold nav-link">
                        Entrenadores
                    </Link>
                    <Link to="/pagos" className="fw-semibold nav-link">
                        Mis Pagos
                    </Link>
                </Nav>

                <MenuNotificaciones
                    notificaciones={notificaciones}
                    onVerTodas={() => navigate("/notificaciones")}
                />
                <MenuUsuario />
            </Container>
        </Navbar>
    );
};

export default NavBarPriv;