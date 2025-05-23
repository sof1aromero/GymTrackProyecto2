import React, { useState } from "react";
import AgregarServicio from "./AgregarServicio"; // importa el otro componente

const serviciosUsuario = [
    { id: 1, nombre: "Servicio 1", descripcion: "Gym All" },
    { id: 2, nombre: "Servicio 2", descripcion: "Gym Pilates" },
];

const MisServicios = () => {
    const [mostrarAgregar, setMostrarAgregar] = useState(false);

    const handleMostrarAgregar = () => {
        setMostrarAgregar(true);
    };

    return (
        <div className="container mt-4">
                {!mostrarAgregar && (
                    <>
                        <h2>Mis Servicios</h2>
                        <div className="d-flex flex-wrap gap-3 my-4">
                            {serviciosUsuario.map((servicio) => (
                            <div
                                key={servicio.id}
                                className="card p-3"
                                style={{ width: "250px" }}
                            >
                                <h5>{servicio.nombre}</h5>
                                <p className="text-muted">{servicio.descripcion}</p>
                            </div>
                            ))}
                        </div>

                        <button className="btn btn-dark" onClick={handleMostrarAgregar}>
                            Agregar un nuevo servicio
                        </button>
                    </>
                )}

                {mostrarAgregar && <AgregarServicio />}
        </div>
    );
};

export default MisServicios;
