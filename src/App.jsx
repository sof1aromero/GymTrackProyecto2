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
import MisServicios from "./components/ServiciosNotificaciones/MisServicios";
import NavBarPriv from "./components/ServiciosNotificaciones/NavBarPriv";
import DashboardAdmin from './components/Administrador/DashboardAdmin';

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
        <Route path="/mis-servicios" element={<MisServicios />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
