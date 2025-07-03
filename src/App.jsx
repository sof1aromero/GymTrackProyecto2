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
import DashboardEntrenador from "./components/Entrenador/DashboardEntrenador";
import InicioEntrenador from "./components/Entrenador/InicioEntrenador";
import CalendarioEntrenador from "./components/Entrenador/CalendarioEntrenador";
import CarteraPagos from "./components/Entrenador/CarteraPagos";
import PerfilEntrenador from "./components/Entrenador/PerfilEntrenador";

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
        <Route path="/entrenador" element={<DashboardEntrenador />}/>
        <Route path="/entrenador/inicio" element={<InicioEntrenador />}/>
        <Route path="/entrenador/calendario" element={<CalendarioEntrenador />}/>
        <Route path="/entrenador/cartera-pagos" element={<CarteraPagos />}/>
        <Route path="/entrenador/perfil-entrenador" element={<PerfilEntrenador />}/>

        </Routes>
        
    </>
  );
}

export default App;
