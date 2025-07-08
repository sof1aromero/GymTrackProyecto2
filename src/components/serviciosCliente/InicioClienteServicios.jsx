
import NavBarPriv from "../InicioSesionFN/NavBarPriv";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from "react-router-dom";
import InicioCliente from "./ServicioCliente";
import PagosClientes from "../Administrador/PagosClientes";
import SeccionClases from "../ClasesCliente/SeccionClases";
import AgendarClase from "../ClasesCliente/AgendarClase";



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
          <Route path="/pagos" element={<PagosClientes/>}></Route>
          <Route path="/clases" element={<SeccionClases/>}></Route>
          <Route path="/agendar" element={<AgendarClase/>}></Route>
          <Route path="/mis-clases" element={<AgendarClase/>}></Route>
          
        </Routes>
        </Col>
        </Row>


    </>


export default InicioClienteServicios;
