import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const MenuUsuario = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
    };

    return (
        <div className="position-relative">
            <FaUser
                size={58}
                style={{ cursor: "pointer" }}
                onClick={toggleMenu}
            />

            {mostrarMenu && (
            <div
                className="position-absolute bg-white border rounded shadow p-2"
                style={{ top: "100%", right: 0, zIndex: 1000, minWidth: "200px" }}
            >
                <ul className="list-unstyled m-0">
                    <li>
                        <Link to="/perfil" className="dropdown-item">Ver Perfil</Link>
                    </li>
                    <li>
                        <Link to="/pagos" className="dropdown-item">Mis Pagos</Link>
                    </li>
                    <li>
                        <Link to="/mis-servicios" className="dropdown-item">Mis Servicios</Link>
                    </li>
                    <li>
                        <Link to="/notificaciones" className="dropdown-item">Notificaciones</Link>
                    </li>
                    <li>
                        <Link to="/logout" className="dropdown-item text-danger">Cerrar Sesión</Link>
                    </li>
                </ul>
            </div>
        )}
    </div>
);
};

export default MenuUsuario;
