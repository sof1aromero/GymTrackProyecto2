import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Perfil() {
    return (
        <div className="container mt-4">
            <div className="card p-4">
                <div className="d-flex align-items-center mb-3">
                    <FaUser size={58} className="me-3" />
                    <div>
                        <h5>
                            User_name
                            <Link to="/editar-perfil" className="ms-2">
                                <i className="bi bi-pencil"></i> Editar
                            </Link>
                        </h5>
                        <p>
                            <i className="bi bi-lock"></i> Cambiar contraseña
                        </p>
                    </div>
                </div>

                <ul className="list-group">
                    <Link to="/metodos-pago" className="list-group-item list-group-item-action">
                        <i className="bi bi-credit-card me-2"></i> Métodos de Pago o Actualizar Método de pago
                    </Link>

                    <Link to="/historial-pagos" className="list-group-item list-group-item-action">
                        <i className="bi bi-calendar me-2"></i> Historial de Pagos
                    </Link>

                    <Link to="/ayuda" className="list-group-item list-group-item-action">
                        <i className="bi bi-question-circle me-2"></i> Centro de ayuda
                    </Link>

                    <Link to="/logout" className="list-group-item list-group-item-action text-danger">
                        <i className="bi bi-box-arrow-right me-2"></i> Cerrar Sesión
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Perfil;
