import Cabecera from "./Cabecera";
import AutoContador from "./AutoContador";
// import Bote from "./Bote";
import { useState } from "react";
import '../estilos/BotoneraCentro.css'
// import BotonTirar from "./BotonTirar";
const BotoneraForm = () => {
  const [bote, setBote] = useState()
  const [numApuestas, setNumApuestas] = useState(0)
  const [autoContadoresActivos, setAutoContadoresActivos] = useState(false); // Estado para controlar la activación de todos los AutoContador
 
  // Funcion para enviar la cantidad añadida al bote a la cabecera.
  function handleSubmit(e) {
    // Previene que el navegador recargue la página
    e.preventDefault();
    // Lee los datos del formulario
    const form = e.target;
    const formData = new FormData(form);
    // Puedes pasar formData como el cuerpo de la consulta directamente:
    fetch('/some-api', { method: form.method, body: formData });
    // O puedes trabajar con él como un objecto plano:
    const formJson = Object.fromEntries(formData.entries());
    setBote(formJson.apuesta)
    setNumApuestas(0)
  }
 

   // Función para activar todos los AutoContador simultáneamente
   const toggleActivarAutoContadores = () => {
    setAutoContadoresActivos(!autoContadoresActivos); // Activar todos los AutoContador
};

  return (
    <section className="contadores">
      <header>
        <h1>Cabecera Tragaperras</h1>
      </header>
      <Cabecera bote={bote} numApuestas={numApuestas} />
      <body className="autocontadores">
        <AutoContador 
        className="imagenes-autocontador"
        estadoAutoContador={autoContadoresActivos}
        onContarClick={()=>setAutoContadoresActivos(true)}
        />
        <AutoContador 
        className="imagenes-autocontador"
        estadoAutoContador={autoContadoresActivos}
        onContarClick={() => setAutoContadoresActivos(true)}
        />
        <AutoContador 
        className="imagenes-autocontador"
        estadoAutoContador={autoContadoresActivos}
        onContarClick={() => setAutoContadoresActivos(true)}
        />      
      </body>
      <form className="formulario-Apstar" method="post" onSubmit={handleSubmit}>
        <label>
          Cantidad Cargada: 
        </label>
        <input className="furmulario-apostar-input" name="apuesta" defaultValue={0}/>
        <button type="submit" conClick={handleSubmit}>Cargar Bote</button>
      </form>
      
    {/* Botón para activar todos los AutoContador al mismo tiempo */}
    <div className="boton-activar-autocontadores">
                <button onClick={toggleActivarAutoContadores}>
                    Activar Todos los AutoContador
                </button>
      </div>
    </section>
  );
}
export default BotoneraForm;