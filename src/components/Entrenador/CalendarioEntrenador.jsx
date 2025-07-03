import React from "react";
import "../../styles/Entrenador/CalendarioEntrenador.css";
import { FaBell, FaUserCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendario = () => {
  return (
    <div className="agenda-container">
      <header className="agenda-header">
        <h2>Agenda de clases</h2>
        <div className="icons">
          <FaBell className="icon" />
          <FaUserCircle className="icon user" />
        </div>
      </header>

      <section className="agenda-content">
        <div className="agenda-controls">
          <button><FaChevronLeft /></button>
          <span>Junio del 2025</span>
          <button><FaChevronRight /></button>
        </div>

        <table className="agenda-calendar">
          <thead>
            <tr>
              <th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td>1</td><td className="hoy">2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
            <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
            <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
            <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
            <tr><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>

        <div className="agenda-buttons">
          <button className="btn btn-primary">Programar clase</button>
          <button className="btn btn-secondary">Historial de clase</button>
        </div>
      </section>
    </div>
  );
};

export default Calendario;