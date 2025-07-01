import { Routes, Route, Router } from "react-router-dom";

import './App.css'
import NavBar from '../src/components/ServiciosNotificacionesMas/NavBar'
import Footer from '../src/components/ServiciosNotificacionesMas/Footer'
import  "./styles/estilos/LAYOUTT.css"
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "./components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";
import Footer from "./components/InicioSesionFN/Footer";
import CalendarioCliente from "./components/ClienteEntrenador/CalendarioCliente";
import HistorialClases from "./components/ClienteEntrenador/HistorialClases";
import ConfirmacionReserva from "./components/ClienteEntrenador/ConfirmacionReserva";
import NavBarPriv from "./components/InicioSesionFN/NavBarPriv";
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
        <Route path="/admin" element={<DashboardAdmin />} />

        <Route element={<NavBarPriv />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
