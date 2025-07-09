import React from 'react';
import '../../styles/Visualizacion/InicioInformativo.css';
import logo from '/src/img/logotrans.png';
import chicaFitness from '/src/img/chica-fitness.png';
import { Navbar } from 'react-bootstrap';
import NavbarLanding from '../InicioSesionFN/NavBar';

const InicioInformativo = () => {
  return (
    <>  
     <NavbarLanding/>
    <div className="inicio-informativo">
      
      <div className="imagen-encabezado">
        <img src={logo} alt="GymTrack Logo" className="logo-inicio" />
      </div>

      <div className="contenido-info">
        <div className="texto-info">
          <h4 className="subtitulo">Nuestros Servicios</h4>
          <h2 className="titulo">GYMTRACK</h2>
          <p className="descripcion">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita facere, reprehenderit repudiandae quo incidunt aperiam voluptates illo delectus fugit. Assumenda fugiat veniam dolore aliquam dolor dolorem vel quidem possimus?
          </p>

          <h3 className="ofrecemos">Que ofrecemos:</h3>
          <div className="ofertas">
            <div className="card-oferta">
              <p className="grande">24<br /><span className="pequeño">/7</span></p>
              <p>Gestión</p>
            </div>
            <div className="card-oferta">
              <p>1 a 1</p>
              <p>Con entrenadores</p>
            </div>
            <div className="card-oferta">
              <p>Clases </p>
              <p>Personalizadas</p>
            </div>
          </div>
        </div>

        <div className="imagen-chica">
          <img src={chicaFitness} alt="Chica Fitness" />
        </div>
      </div>
    </div>
    </>
  );
};

export default InicioInformativo;