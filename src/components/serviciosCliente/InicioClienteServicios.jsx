
import NavBarPriv from "../InicioSesionFN/NavBarPriv";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from "react-router-dom";
import InicioCliente from "./ServicioCliente";

import AgendarClase from "../ClasesCliente/AgendarClase";
import SeccionClases from "../ClasesCliente/SeccionClases";



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

          
        </Routes>
        </Col>
        </Row>


    </>


export default InicioClienteServicios;
