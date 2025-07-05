
import React from 'react';
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import '../../styles/Visualizacion/Visitar.css';
import mapa from '../../img/mapa.png';

const VisitarGym = () => {
  return (
    <div className="visit-gym-container">
      <div className="map-container">
        <img src={mapa} alt="Map" className="map-image" />

      </div>
      <div className="info-container">
        <h2>VISITA GYMTRACK</h2>
        <p><span className="label">Dirección:</span> Dg. 1343 #99-00</p>
        <p><span className="label">Email:</span> gymtrack@gmail.com</p>
        <p><span className="label">Número de contacto:</span> 3000000000</p>
        <div className="socials">
          <span className="label">Redes Sociales:</span>
          <div className="icons">
            <FaFacebookF />
            <FaFacebookMessenger />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitarGym;
