import { useState, useCallback } from "react";
import Cabecera from "./Cabecera";
import AutoContador from "./AutoContador";
import FormularioApuesta from "./FormularioApuesta";
import BotonActivarAutoContadores from "./BotonActivarAutoContadores";
import UltimasImagenes from "./UltimasImagenes";
import '../estilos/BotoneraCentro.css';

const NuevoComponenteCentral = ({ setCounterAutoContador }) => {

  const [autoContadoresActivos, setAutoContadoresActivos] = useState(false);
  const [contadores, setContadores] = useState([0, 0, 0]);
  const [ultimasImagenes, setUltimasImagenes] = useState([]);

  const toggleActivarAutoContadores = () => {
    setAutoContadoresActivos(true);
  };

  const resetearContadores = () => {
    setContadores([0, 0, 0]);
    setAutoContadoresActivos(false);
    setUltimasImagenes([]);
  };

  const handleSetUltimaImagen = useCallback((imagen) => {
    setUltimasImagenes((prevImagenes) => [...prevImagenes, imagen]);
  }, []);

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
            estadoAutoContador={autoContadoresActivos}
            contador={contador}
            setContador={(nuevoValor) => {
              const nuevosContadores = [...contadores];
              nuevosContadores[index] = nuevoValor;
              setContadores(nuevosContadores);
            }}
            setUltimaImagen={handleSetUltimaImagen}
          />
        ))}
      </div>
      <FormularioApuesta setBote={setBote} setNumApuestas={setNumApuestas} />
      <BotonActivarAutoContadores
        toggleActivarAutoContadores={toggleActivarAutoContadores}
        resetearContadores={resetearContadores}
      />
      <UltimasImagenes imagenes={ultimasImagenes} />
    </section>
  );
};
export default NuevoComponenteCentral