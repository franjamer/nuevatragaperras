import { useState } from "react";
import Cabecera from "./Cabecera";
import AutoContador from "./AutoContador";
import FormularioApuesta from "./FormularioApuestas";
import BotonActivarAutoContadores from "./BotonActivarAutoContadores";
import '../estilos/BotoneraCentro.css'

const BotoneraForm = ({ setCounterAutoContador }) => {
  const [bote, setBote] = useState(0)
  const [numApuestas, setNumApuestas] = useState(0)
  const [autoContadoresActivos, setAutoContadoresActivos] = useState(false); // Estado para controlar la activación de todos los AutoContador  
  const [contadores, setContadores] = useState([0, 0, 0]); // Estado para los contadores
  // Función para activar todos los AutoContador simultáneamente
  const toggleActivarAutoContadores = () => {
    setAutoContadoresActivos(true)  
  };
  const resetearContadores = () => {
    setContadores([0, 0, 0]); // Resetear todos los contadores a cero
  };
 
  return (
    <section className="contadores">
      <header>
        <h1>Cabecera Tragaperras</h1>
      </header>
      <Cabecera bote={bote} numApuestas={numApuestas} />
      <div className="autocontadores">
        {contadores.map((contador, index) => (
          <AutoContador
            key={index}
            className="imagenes-autocontador"
            estadoAutoContador={autoContadoresActivos}
            contador={contador}
            setContador={(nuevoValor) => {
              const nuevosContadores = [...contadores];
              nuevosContadores[index] = nuevoValor;
              setContadores(nuevosContadores);
            }}
          />
        ))}
      </div>
     
      <FormularioApuesta setBote={setBote} setNumApuestas={setNumApuestas} />
      <BotonActivarAutoContadores
        toggleActivarAutoContadores={toggleActivarAutoContadores}
        resetearContadores={resetearContadores}
      />
     
    </section>
  );
}
export default BotoneraForm;