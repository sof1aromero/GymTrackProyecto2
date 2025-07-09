import "../../styles/Administrador/InicioAdmin.css";

const InicioAdmin = () => {
  return (
    <div className="dashboard">
      <div className="card welcome">
        <div className="text-section">
          <h3><strong>Bienvenid@, Krickeberg</strong></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <span className="dot"></span>
        <div className="circle"></div>
      </div>

      <div className="card calendar">Calendario</div>

      <div className="card trainers">
        <h4>Entrenadores</h4>
        <div className="trainer">
          <div className="avatar"></div>
          <span>Juan Dela Cruz</span>
        </div>
        <div className="trainer">
          <div className="avatar"></div>
          <span>Peter</span>
        </div>
      </div>

      <div className="card sales">
        <h4>Sales</h4>
        <div className="progress-circle">
          <span>84%</span>
        </div>
      </div>

      <div className="card members">
        <h4>Miembros activos</h4>
        <div className="search-bar">
          <input type="text" placeholder="search" />
          <button>🔍</button>
        </div>
        <div className="member-list">
          <div className="member">James Medalla</div>
          <div className="member">Kent Charl Mabutas</div>
          <div className="member">John Elmar Rodrigo</div>
        </div>
      </div>

      <div className="card inventory">Inventory</div>
    </div>
  );
};

export default InicioAdmin;

