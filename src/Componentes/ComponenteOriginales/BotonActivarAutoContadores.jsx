const BotonActivarAutoContadores = ({ toggleActivarAutoContadores, setCounterAutoContador,setContador, setCambiosImagenes }) => {
    function handleClickReiniciar() {
        // setEstadoAutoContador(false)    //Resetea el estadoAutoContador
     
        // setContador(0)
       //Resetea el contador a cero
    }
    
    
    return (
      <div className="boton-activar-autocontadores">
        <button onClick={toggleActivarAutoContadores}>
          Activar Todos los AutoContador
        </button>
        <button onClick={handleClickReiniciar}>Resetear Todo</button>
      </div>
    );
  };
  
  export default BotonActivarAutoContadores;
  