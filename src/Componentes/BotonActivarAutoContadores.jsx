const BotonActivarAutoContadores = ({ toggleActivarAutoContadores, resetearContadores }) => {
    return (
      <div className="boton-activar-autocontadores">
        <button onClick={toggleActivarAutoContadores}>
          Activar Todos los AutoContador
        </button>
        <button onClick={resetearContadores}>Resetear Todo</button>
      </div>
    );
  };
  
  export default BotonActivarAutoContadores;
  