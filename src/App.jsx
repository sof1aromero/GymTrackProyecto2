import { Routes, Route, Router } from "react-router-dom";


import './App.css'
import MisServicios from './components/ServiciosNotificacionesMas/MisServicios';
import Perfil from './components/ServiciosNotificacionesMas/Perfil';
import CentroNotificaciones from './components/ServiciosNotificacionesMas/CentroNotificaciones';
import MenuNotificaciones from './components/ServiciosNotificacionesMas/MenuNotificaciones';
import AgregarServicio from './components/ServiciosNotificacionesMas/AgregarServicio';
import  "./styles/estilos/LAYOUTT.css"

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
        
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/mis-servicios' element={<MisServicios/>}/>
        <Route path='/agregar-servicio' element={<AgregarServicio/>}/>
        <Route path='/menuNotificaciones' element={<MenuNotificaciones/>}/>
        <Route path='/notificaciones' element={<CentroNotificaciones/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
