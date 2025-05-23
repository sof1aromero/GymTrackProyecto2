import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "../estilos/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; 2025 GymTrack. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://wa.me/tu-numero" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
