import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/InicioSesionFN/NavBar";
import NavBarPriv from "./components/InicioSesionFN/NavBarPriv";
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "../src/components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";
import InicioClienteServicios from "./components/serviciosCliente/InicioClienteServicios";
import DetallesServicio from "./components/serviciosCliente/DetallesServicio";
import VerMasServicios from "./components/serviciosCliente/VerMasServicios";
import SeccionClases from "../src/components/ClasesCliente/SeccionClases";
import AgendarClase from "./components/ClasesCliente/AgendarClase";
import Footer from "./components/InicioSesionFN/Footer";
import CalendarioCliente from "./components/ClienteEntrenador/CalendarioCliente";
import HistorialClases from "./components/ClienteEntrenador/HistorialClases";
import ConfirmacionReserva from "./components/ClienteEntrenador/ConfirmacionReserva";
import DashboardAdmin from './components/Administrador/DashboardAdmin';
import InicioAdmin from "./components/Administrador/InicioAdmin";
import DashboardEntrenador from "./components/Entrenador/DashboardEntrenador";
import InicioEntrenador from "./components/Entrenador/InicioEntrenador";
import CalendarioEntrenador from "./components/Entrenador/CalendarioEntrenador";
import CarteraPagos from "./components/Entrenador/CarteraPagos";
import PerfilEntrenador from "./components/Entrenador/PerfilEntrenador";





function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <BrowserRouter>
      {/* ✅ Solo un NavBar, dependiendo del estado */}
      {isAuthenticated ? <NavBarPriv /> : <NavBar />}

      <div className="app-layout">
        <Routes>
          <Route path="/" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/cliente/inicio" element={<InicioClienteServicios />} />
          <Route path="/cliente/clases" element={<SeccionClases />} />
          <Route path="/cliente/clases/agendar" element={<AgendarClase />} />
          <Route path="/cliente/detalles" element={<DetallesServicio />} />
          <Route path="/cliente/servicios" element={<VerMasServicios />} />
          <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />
          <Route path="/calendario" element={<CalendarioCliente />} />
          <Route path="/historial-clases" element={<HistorialClases />} />
          <Route path="/confirmacion-reserva" element={<ConfirmacionReserva />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/inicio" element={<InicioAdmin />} />
          <Route path="/entrenador" element={<DashboardEntrenador />} />
          <Route path="/entrenador/inicio" element={<InicioEntrenador />} />
          <Route path="/entrenador/calendario" element={<CalendarioEntrenador />} />
          <Route path="/entrenador/cartera-pagos" element={<CarteraPagos />} />
          <Route path="/entrenador/perfil-entrenador" element={<PerfilEntrenador />} />
        </Routes> 

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
