import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Componentes comunes
import NavBar from "./components/InicioSesionFN/NavBar";
import NavBarPriv from "./components/InicioSesionFN/NavBarPriv";
import Footer from "./components/InicioSesionFN/Footer";

// Autenticación
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "./components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";

// Cliente
import InicioClienteServicios from "./components/serviciosCliente/InicioClienteServicios";
import CalendarioCliente from "./components/ClienteEntrenador/CalendarioCliente";
import HistorialClases from "./components/ClienteEntrenador/HistorialClases";
import ConfirmacionReserva from "./components/ClienteEntrenador/ConfirmacionReserva";
import SeccionClases from "./components/ClasesCliente/SeccionClases";
import AgendarClase from "./components/ClasesCliente/AgendarClase";
import DetallesServicio from "./components/serviciosCliente/DetallesServicio";
import VerMasServicios from "./components/serviciosCliente/VerMasServicios";

// Entrenador
import DashboardEntrenador from "./components/Entrenador/DashboardEntrenador";
import InicioEntrenador from "./components/Entrenador/InicioEntrenador";
import CalendarioEntrenador from "./components/Entrenador/CalendarioEntrenador";
import CarteraPagos from "./components/Entrenador/CarteraPagos";
import PerfilEntrenador from "./components/Entrenador/PerfilEntrenador";
import NotificacionesEntrenador from "./components/Entrenador/NotificacionesEntrenador";

// Administrador
import DashboardAdmin from "./components/Administrador/DashboardAdmin";
import InicioAdmin from "./components/Administrador/InicioAdmin";
import RegistroEntrenadores from "./components/Administrador/RegistroEntrenadores";
import GestionPagos from "./components/Administrador/GestionPagos";
import PagosClientes from "./components/Administrador/PagosClientes";
import PagosEntrenadores from "./components/Administrador/PagosEntrenadores";
import DistribucionEntre from "./components/Administrador/DistribucionEntre";
import InventarioAdmin from "./components/Administrador/InventarioAdmin";

// Visualización pública
import InicioInformativo from "./components/Visualizacion/InicioInformativo";
import ServiciosGymVisu from "./components/Visualizacion/ServiciosGymVisu";
import VisitarGym from "./components/Visualizacion/Visitar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter basename="/">
      {/* Navbar dinámico */}
      {isAuthenticated ? <NavBarPriv /> : <NavBar />}

      <div className="app-layout">
        <Routes>
          {/* Página principal */}
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

          {/* Rutas Cliente */}
          <Route path="/cliente/inicio" element={isAuthenticated ? <InicioClienteServicios /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/calendario" element={isAuthenticated ? <CalendarioCliente /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/historial-clases" element={isAuthenticated ? <HistorialClases /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/confirmacion-reserva" element={isAuthenticated ? <ConfirmacionReserva /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/cliente/clases" element={isAuthenticated ? <SeccionClases /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/cliente/clases/agendar" element={isAuthenticated ? <AgendarClase /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/cliente/detalles" element={isAuthenticated ? <DetallesServicio /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/cliente/servicios" element={isAuthenticated ? <VerMasServicios /> : <Navigate to="/iniciar-sesion" />} />

          {/* Rutas Admin */}
          <Route path="/admin" element={isAuthenticated ? <DashboardAdmin /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/registro" element={isAuthenticated ? <RegistroEntrenadores /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/pagos" element={isAuthenticated ? <GestionPagos /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/clientes" element={isAuthenticated ? <PagosClientes /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/entrenadores" element={isAuthenticated ? <PagosEntrenadores /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/distribucion" element={isAuthenticated ? <DistribucionEntre /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/admin/inventario" element={isAuthenticated ? <InventarioAdmin /> : <Navigate to="/iniciar-sesion" />} />

          {/* Rutas Entrenador */}
          <Route path="/entrenador" element={isAuthenticated ? <DashboardEntrenador /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/entrenador/inicio" element={isAuthenticated ? <InicioEntrenador /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/entrenador/calendario" element={isAuthenticated ? <CalendarioEntrenador /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/entrenador/cartera-pagos" element={isAuthenticated ? <CarteraPagos /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/entrenador/perfil-entrenador" element={isAuthenticated ? <PerfilEntrenador /> : <Navigate to="/iniciar-sesion" />} />
          <Route path="/entrenador/notificaciones-entrenador" element={isAuthenticated ? <NotificacionesEntrenador /> : <Navigate to="/iniciar-sesion" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
