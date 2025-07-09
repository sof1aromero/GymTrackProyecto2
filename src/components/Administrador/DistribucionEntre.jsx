import "../../styles/Administrador/DistribucionEntre.css";


const DistribucionEntrenador = () => {
  return (
    <div className="distribucion-container">
      <h3>Distribución de Ingresos por Entrenador</h3>

      <div className="card-distribucion">
        <div className="encabezado-distribucion">
          <div>
            <strong>Nombre del cliente</strong>
            <p className="sub-doc">Número de documento</p>
          </div>
          <div className="total">
            <strong>$ 000.000</strong>
            <p className="sub-doc">Ingresos totales</p>
          </div>
        </div>

        <div className="bloque-distribucion verde">
          <strong>Ganancia Entrenador</strong>
          <p>$ 000.000</p>
          <span>70% del total</span>
        </div>

        <div className="bloque-distribucion azul">
          <strong>Comisión Gimnasio</strong>
          <p>$ 000.000</p>
          <span>30% del total</span>
        </div>

        <div className="bloque-distribucion morado">
          <strong>Promedio por Cliente</strong>
          <p>$ 000.000</p>
          <span>Ingreso mensual</span>
        </div>
      </div>
    </div>
  );
};

export default DistribucionEntrenador;
