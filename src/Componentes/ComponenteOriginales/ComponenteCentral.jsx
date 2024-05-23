import { useState,useCallback } from "react";
import Cabecera from "./Cabecera";
import AutoContador from "./AutoContador";
// import FormularioApuesta from "./FormularioApuestas";
// import BotonActivarAutoContadores from "./BotonActivarAutoContadores";
// import UltimasImagenes from './UltimasImagenes';
// import ComponenteB from "./ComponentesUsoProps/ComponenteB";
import '../estilos/BotoneraCentro.css'


const ComponenteCentral = () => {
  const [bote, setBote] = useState(0)//estado del bote
  const [numApuestas, setNumApuestas] = useState(0)//estado de apuestas
  const [autoContadoresActivos, setAutoContadoresActivos] = useState(false); // Estado para controlar  todos los AutoContadores  
  const [contadoresIndiceImagen, setContadoresIndiceImagen] = useState([0, 0, 0]); // Estado para los contadores del componente IndiceImagen
  const [ultimasImagenes, setUltimasImagenes]= useState([])//Estado para almacenar las últimas imágenes.
  const [contador, setContador] = useState(0);
  const [estadoAutoContador, setEstadoAutoContador] = useState(false);
  const [ultimaImagen, setUltimaImagen] = useState(null);
  
  
  // const [counterAutoContador, setCounterAutoContador] = useState(0);
  // Función para activar todos los AutoContador simultáneamente

  // Funcion para resetear todos los contadores desde un solo boton
  // const resetearContadores = () => {
  //   setContadoresIndiceImagen([0, 0, 0]);// Resetear todos los contadores a cero
  //   setAutoContadoresActivos(false) 
  //   setUltimasImagenes([])
    
    
  // };
  



  
 
  return (
    <>
    <section className="contadores">
      <header>
        <h1>Cabecera Tragaperras</h1>
      </header>
      <Cabecera bote={bote} numApuestas={numApuestas} />
      <div className="autocontadores">
        {contadoresIndiceImagen.map((contador, index) => (
          // <AutoContador
          //   key={index}
          //   className="imagenes-autocontador"
          //   estadoAutoContador={autoContadoresActivos}
          //   contador={contador}
          //   setContador={(nuevoValor) => {
          //     const nuevosContadores = [...contadoresIndiceImagen];
          //     nuevosContadores[index] = nuevoValor;
          //     setContadoresIndiceImagen(nuevosContadores);
          //     console.log(contador)

              
          //   }}
            // setUltimaImagen={(imagen) => {
            //   if (index === 0) {
            //     setUltimasImagenes([imagen]);
            //   }
            // }}
            setUltimaImagen={handleSetUltimaImagen}
            counterAutoContador={counterAutoContador}
          />
          <>
          <AutoContador
                    estadoAutoContador={estadoAutoContador}
                    contador={contador}
                    setContador={setContador}
                    setUltimaImagen={setUltimaImagen}
                    setCounterAutoContador={setCounterAutoContador}
                />
                <div>{ultimaImagen}</div>
          </>
        ))}
         <p className="parrafo-correimagen">{counterAutoContador}</p>
      </div>
     
      {/* <FormularioApuesta setBote={setBote} setNumApuestas={setNumApuestas} /> */}
      {/* <BotonActivarAutoContadores
        toggleActivarAutoContadores={toggleActivarAutoContadores}
        resetearContadores={resetearContadores}
      /> */}
      {/* <ComponenteB resetearContadores={resetearContadores} setCounterAutoContador={setCounterAutoContador}/> */}
     {/* <UltimasImagenes imagenes={ultimasImagenes} /> Mostrar las últimas imágenes */}
    </section>
    </>
  );
}
export default ComponenteCentral;