import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Factura from './components/Factura';
import Notificaciones from './components/Notificaciones';
import MetodoPago from './components/MetodoPago';

function App() {
  return (
    <Router>
      <div>
        {/* Navegación principal */}
        <nav style={{
          padding: '1rem',
          background: '#f0f0f0',
          borderBottom: '1px solid #ccc'
        }}>
          <Link to="/metodo" style={{ marginRight: '1rem' }}>Método de Pago</Link>
          <Link to="/factura" style={{ marginRight: '1rem' }}>Factura</Link>
          <Link to="/notificaciones">Notificaciones</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<MetodoPago />} />
          <Route path="/metodo" element={<MetodoPago />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
