import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import NavBar from "./components/InicioSesionFN/NavBar";
import NavBarPriv from "./components/InicioSesionFN/NavBarPriv";
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "../src/components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";
import InicioClienteServicios from "./components/serviciosCliente/InicioClienteServicios";
import Footer from "./components/InicioSesionFN/Footer";
import CalendarioCliente from "./components/ClienteEntrenador/CalendarioCliente";
import HistorialClases from "./components/ClienteEntrenador/HistorialClases";
import ConfirmacionReserva from "./components/ClienteEntrenador/ConfirmacionReserva";
import DashboardAdmin from "./components/Administrador/DashboardAdmin";
import InicioAdmin from "./components/Administrador/InicioAdmin";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // 🔍 Solo para depuración en consola
  useEffect(() => {
    console.log("¿Autenticado?", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />
        <Route path="/calendario" element={<CalendarioCliente />} />
        <Route path="/historial-clases" element={<HistorialClases />} />
        <Route path="/confirmacion-reserva" element={<ConfirmacionReserva/>} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/inicio" element={<InicioAdmin />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
