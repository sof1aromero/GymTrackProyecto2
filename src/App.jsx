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
import MisServicios from "./components/ClienteServicios/MisServicios";
import NavBarPriv from "./components/InicioSesionFN/NavBarPriv";
import DashboardAdmin from './components/Administrador/DashboardAdmin';

import './App.css'
import Perfil from '../src/components/Cliente/Perfil';
import CentroNotificaciones from '../src/components/ClienteNotificaciones/CentroNotificaciones';
import MenuNotificaciones from './components/ClienteNotificaciones/MenuNotificaciones';
import AgregarServicio from './components/ClienteServicios/AgregarServicio';
/*import  "./styles/estilos/LAYOUTT.css"*/


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

        <Route element={<NavBarPriv />}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/mis-servicios' element={<MisServicios/>}/>
        <Route path='/agregar-servicio' element={<AgregarServicio/>}/>
        <Route path='/menuNotificaciones' element={<MenuNotificaciones/>}/>
        <Route path='/notificaciones' element={<CentroNotificaciones/>}/>

        </Routes>
      <Footer />
    </>
  );
}

export default App;
