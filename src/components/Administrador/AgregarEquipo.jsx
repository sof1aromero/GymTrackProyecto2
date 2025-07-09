const ModalAgregarEquipo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <h3>Agregar un nuevo equipo</h3>

        <form className="form-modal">
          <input type="text" placeholder="Nombre del equipo" />

          <select>
            <option>Seleccionar categoría</option>
            <option>Pesas</option>
            <option>Máquinas</option>
            <option>Accesorios</option>
          </select>

          <div className="form-doble">
            <input type="number" placeholder="Cantidad" />
            <input type="number" placeholder="Stock Mínimo" />
          </div>

          <select>
            <option>Bueno</option>
            <option>Regular</option>
            <option>Daño leve</option>
          </select>

          <input type="text" placeholder="Ubicación" />
          <input type="number" placeholder="Precio Unitario" />

          <div className="acciones">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-agregar">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAgregarEquipo;
