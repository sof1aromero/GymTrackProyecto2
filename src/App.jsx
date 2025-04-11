import { Routes, Route } from "react-router-dom";
import NavBar from "./components/InicioSesionFN/NavBar";
import Registro from "./components/InicioSesion/Registro";
import RecuperarContrasena from "./components/InicioSesion/RecuperarContrasena";
import IniciarSesion from "./components/InicioSesion/IniciarSesion";
import CambiarContrasena from "./components/InicioSesion/CambiarContrasena";
import Footer from "./components/InicioSesionFN/Footer";

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
