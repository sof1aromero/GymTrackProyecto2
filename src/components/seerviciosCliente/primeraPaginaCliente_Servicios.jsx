import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ title, status, startDate, nextPayment, price, statusText, buttonVariant }) => {
    return (
        <div className="col-md-4 mb-4">
        <div className="card">
            <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">{title}</h5>
                <span className={`badge ${status}`} style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                display: 'inline-block' 
                }}></span>
            </div>
            
            {status === 'bg-danger' && (
                <p className="text-danger">Cancelado por el cliente</p>
            )}
            
            <p className="mb-1">Inicio: {startDate}</p>
            <p className="mb-1">Próximo Pago: {nextPayment}</p>
            <p className="mb-3">Precio: {price}</p>
            
            <div className="d-grid gap-2">
                <button className="btn btn-primary">Ver detalles</button>
                <button className="btn btn-outline-danger">Cancelar servicio</button>
                <button className={`btn ${buttonVariant}`}>{buttonText}</button>
            </div>
            </div>
        </div>
        </div>
    );
};

const GymManagement = () => {
    return (
        <div className="container">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center py-3">
            <div className="logo">GYM TRACK</div>
            <nav>
            <ul className="nav">
                <li className="nav-item">Mis Servicios</li>
                <li className="nav-item">Mis Pagos</li>
                <li className="nav-item">Entrenadores</li>
            </ul>
            </nav>
            <div className="notification">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
        </header>

        {/* Services Grid */}
        <div className="row">
            <ServiceCard
            title="Clases de Spinning"
            status="bg-success"
            startDate="2025-06-18"
            nextPayment="2025-07-18"
            price="$80.000 mensual"
            buttonVariant="btn-success"
            buttonText="Pagar ahora"
            />
            
            <ServiceCard
            title="Gym Libre"
            status="bg-warning"
            startDate="2025-06-10"
            nextPayment="2025-07-10"
            price="$110.000 mensual"
            buttonVariant="btn-warning"
            buttonText="Pagar ahora"
            />
            
            <ServiceCard
            title="Gym Pilates"
            status="bg-danger"
            startDate="2025-06-18"
            nextPayment="2025-07-18"
            price="$90.000 mensual"
            buttonVariant="btn-danger"
            buttonText="Reactivar servicio"
            />
        </div>

        {/* Bottom Button */}
        <div className="text-center my-4">
            <button className="btn btn-outline-primary">Ver más servicios +</button>
        </div>
        </div>
    );
};

export default GymManagement;