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
import DashboardEntrenador from "./components/Entrenador/DashboardEntrenador";
import InicioEntrenador from "./components/Entrenador/InicioEntrenador";
import CalendarioEntrenador from "./components/Entrenador/CalendarioEntrenador";
import CarteraPagos from "./components/Entrenador/CarteraPagos";
import PerfilEntrenador from "./components/Entrenador/PerfilEntrenador";
import InicioInformativo from "./components/Visualizacion/InicioInformativo";
import ServiciosGymVisu from "./components/Visualizacion/ServiciosGymVisu";
import VisitarGym from "./components/Visualizacion/Visitar";
import SeccionClases from "./components/ClasesCliente/SeccionClases";
import AgendarClase from "./components/ClasesCliente/AgendarClase";
import DetallesServicio from "./components/serviciosCliente/DetallesServicio";
import VerMasServicios from "./components/serviciosCliente/VerMasServicios";
import InicioAdmin from "./components/Administrador/InicioAdmin";
import RegistroEntrenadores from "./components/Administrador/RegistroEntrenadores";
import GestionPagos from "./components/Administrador/GestionPagos";
import PagosClientes from "./components/Administrador/PagosClientes";
import PagosEntrenadores from "./components/Administrador/PagosEntrenadores";
import DistribucionEntre from "./components/Administrador/DistribucionEntre";
import InventarioAdmin from "./components/Administrador/InventarioAdmin";



function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "false";

  // 🔍 Solo para depuración en consola
  useEffect(() => {
    console.log("¿Autenticado?", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter basename="/">
      {/* NavBar según sesión */}
      {isAuthenticated ? <NavBarPriv /> : <NavBar />}

      <div className="app-layout">
        <Routes>

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
          <Route path="/calendario" element={<CalendarioCliente />} />
          <Route path="/historial-clases" element={<HistorialClases />} />
          <Route path="/confirmacion-reserva" element={<ConfirmacionReserva />} />
          <Route path="/cliente/inicio" element={<InicioClienteServicios />} />
          <Route path="/cliente/clases" element={<SeccionClases />} />
          <Route path="/cliente/clases/agendar" element={<AgendarClase />} />
          <Route path="/cliente/detalles" element={<DetallesServicio />} />
          <Route path="/cliente/servicios" element={<VerMasServicios />} />

          {/* Admin */}
          <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/registro" element={<RegistroEntrenadores />}/>
        <Route path="/admin/pagos" element={<GestionPagos />}/>
        <Route path="/admin/clientes" element={<PagosClientes />}/>
        <Route path="/admin/entrenadores" element={<PagosEntrenadores />}/>
        <Route path="/admin/distribucion" element={<DistribucionEntre />}/>
        <Route path="/admin/inventario" element={<InventarioAdmin />}/>
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
