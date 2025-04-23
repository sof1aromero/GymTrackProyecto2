import React from 'react';
import "../estilos3.css";
const MetodoPago = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1>GymTrack</h1>
          <ul className="nav-links">
            <li><a href="#">Método de Pago</a></li>
            <li><a href="#">Facturas</a></li>
            <li><a href="#">Notificaciones</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section className="payment-section">
          <h2>Método de Pago</h2>
          <p>Selecciona tu método de pago preferido:</p>

          <div className="payment-options">
            <div className="option">
              <h3>Tarjeta</h3>
              <div className="cards">
                <button><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" /></button>
                <button><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Visa_Electron.png" alt="Visa Electron" /></button>
                <button><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" /></button>
                <button><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Maestro_logo.png" alt="Maestro" /></button>
              </div>
            </div>

            <div className="option">
              <h3>Transferencia</h3>
              <div className="transfer-buttons">
                <button className="paypal">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                </button>
                <button className="btn-transferencia">Pago por Transferencia</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MetodoPago;
