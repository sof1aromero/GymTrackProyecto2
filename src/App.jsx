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
import DashboardEntrenador from "./components/Entrenador/DashboardEntrenador";
import InicioEntrenador from "./components/Entrenador/InicioEntrenador";
import CalendarioEntrenador from "./components/Entrenador/CalendarioEntrenador";
import CarteraPagos from "./components/Entrenador/CarteraPagos";
import PerfilEntrenador from "./components/Entrenador/PerfilEntrenador";
import InicioInformativo from "./components/Visualizacion/InicioInformativo";
import ServiciosGymVisu from "./components/Visualizacion/ServiciosGymVisu";
import VisitarGym from "./components/Visualizacion/Visitar";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // 🔍 Solo para depuración en consola
  useEffect(() => {
    console.log("¿Autenticado?", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      {/* NavBar público o privado según sesión */}
      {isAuthenticated ? <NavBarPriv /> : <NavBar />}

      <div className="app-layout">
        <Routes>
          {/* Página de inicio: landing pública o dashboard de cliente */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <InicioClienteServicios />
              ) : (
                <>
                  <InicioInformativo />
                  <ServiciosGymVisu />
                  <VisitarGym />
                </>
              )
            }
          />

          {/* Rutas públicas */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />

          {/* Cliente */}
          <Route path="/cliente/inicio" element={<InicioClienteServicios />} />
          <Route path="/calendario" element={<CalendarioCliente />} />
          <Route path="/historial-clases" element={<HistorialClases />} />
          <Route path="/confirmacion-reserva" element={<ConfirmacionReserva />} />

          {/* Admin */}
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/inicio" element={<InicioAdmin />} />

          {/* Entrenador */}
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
