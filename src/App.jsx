import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/InicioSesionFN/NavBar";
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "./components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";
import Footer from "./components/InicioSesionFN/Footer";
import CalendarioCliente from "./components/ClienteEntrenador/CalendarioCliente";
import HistorialClases from "./components/ClienteEntrenador/HistorialClases";
import ConfirmacionReserva from "./components/ClienteEntrenador/ConfirmacionReserva";
import DashboardAdmin from './components/Administrador/DashboardAdmin';
import InicioAdmin from "./components/Administrador/InicioAdmin";
import RegistroEntrenadores from "./components/Administrador/RegistroEntrenadores";
import GestionPagos from "./components/Administrador/GestionPagos";
import PagosClientes from "./components/Administrador/PagosClientes";
import PagosEntrenadores from "./components/Administrador/PagosEntrenadores";
import DistribucionEntre from "./components/Administrador/DistribucionEntre";
import InvetarioAdmin from "./components/Administrador/InventarioAdmin";

function App() {
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
        <Route path="/admin/registro" element={<RegistroEntrenadores />}/>
        <Route path="/admin/pagos" element={<GestionPagos />}/>
        <Route path="/admin/clientes" element={<PagosClientes />}/>
        <Route path="/admin/entrenadores" element={<PagosEntrenadores />}/>
        <Route path="/admin/distribucion" element={<DistribucionEntre />}/>
        <Route path="/admin/inventario" element={<InvetarioAdmin />}/>
        </Routes>
        
    </>
  );
}

export default App;
