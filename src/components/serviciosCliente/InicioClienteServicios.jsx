import NavBarPriv from "../InicioSesionFN/NavBarPriv";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from "react-router-dom";
import InicioCliente from "./InicioCliente";

import AgendarClase from "../ClasesCliente/AgendarClase";
import SeccionClases from "../ClasesCliente/SeccionClases";
import MisClases from "../ClasesCliente/MisClases";
import MisPagos from "../PagosCliente/MisPagos";
import RealizarPago from "../PagosCliente/RealizarPago";
import HistorialPagos from "../PagosCliente/HistorialPagos";
import MetodoPago from "../PagosCliente/MetodoPago";
import NotificacionesVista from "../Notificaciones/NotificacionesVista";
import RegistrarIncidencias from "../Incidencias/RegistrarIncidencias";
import PerfilCliente from "../PerfilCliente/PerfilCliente";


const InicioClienteServicios = () => 

    <>
    <Row>
        <Col >
    <NavBarPriv />
    </Col>
    </Row>
    <Row>
        <Col >
        <Routes>
          <Route path="" element={<InicioCliente/>}></Route>
          <Route path="/clases" element={<SeccionClases/>}></Route>
          <Route path="/agendar" element={<AgendarClase/>}></Route>
          <Route path="/mis-clases" element={<MisClases/>}></Route>
          <Route path="/pagos" element={<MisPagos/>}></Route>
          <Route path="pagos/realizar" element={<RealizarPago/>}></Route>
          <Route path="/pagos/historial" element={<HistorialPagos />} />
          <Route path="/pagos/metodo" element={<MetodoPago />} />
          <Route path="/notificaciones" element={<NotificacionesVista />} />
          <Route path="/notificaciones" element={<NotificacionesVista />} />
          <Route path="/incidencias" element={<RegistrarIncidencias />} />
          <Route path="/perfil" element={<PerfilCliente />} />

          
        </Routes>
        </Col>
        </Row>


    </>


export default InicioClienteServicios;