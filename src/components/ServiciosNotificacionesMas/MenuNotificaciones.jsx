import { useState } from "react";
import { Bell } from "lucide-react";

const MenuNotificaciones = ({ notificaciones, onVerTodas }) => {
    const [abierto, setAbierto] = useState(false);

    const toggleMenu = () => {
        setAbierto(!abierto);
    };

    return (
        <div className="position-relative me-3">
            <button
                onClick={toggleMenu}
                className="bg-transparent border-0"
                style={{ cursor: "pointer", padding: "6px" }}
            >
                <Bell size={24} color="black" />
            </button>

            {abierto && (
                <div className="position-absolute top-100 end-0 mt-2 bg-white shadow-lg rounded p-3" style={{ width: "280px", zIndex: 1050 }}>
                    <h6 className="fw-semibold mb-2">Notificaciones</h6>
                    {notificaciones.length === 0 ? (
                        <p className="text-muted">No tienes notificaciones nuevas.</p>
                    ) : (
                        <ul className="list-unstyled">
                            {notificaciones.slice(0, 2).map((n, i) => (
                                <li key={i} className="mb-2 text-sm">
                                    {n.texto}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="px-4 py-2 border-t bg-gray-50 text-center">
                        <button
                            onClick={onVerTodas}
                            className="text-sm font-semibold text-blue-600 hover:underline"
                        >
                            Ver todas las notificaciones
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuNotificaciones;
