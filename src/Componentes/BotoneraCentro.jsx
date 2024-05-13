import Cabecera from "./Cabecera";
import AutoContador from "./AutoContador";
import { useState } from "react";
const BotoneraForm = (props) => {
    const [bote, setBote] = useState({})
    
    
    function handleSubmit(e) {
        
        // Previene que el navegador recargue la página
        e.preventDefault();
    
        // Lee los datos del formulario
        const form = e.target;
        console.log(e.target.value)
        
      
       const formData = new FormData(form);
    
        // Puedes pasar formData como el cuerpo de la consulta directamente:
        fetch('/some-api', { method: form.method, body: formData });
    
        // O puedes trabajar con él como un objecto plano:
        const formJson = Object.fromEntries(formData.entries());

       console.log(formJson.myInput);
        setBote(formJson.myInput)
      }
    
      return (
        <section className="contadores">
        <header>
            <h1>Cabecera Tragaperras</h1>
        </header>
        <Cabecera bote={bote} />
        <AutoContador/>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Cantidad Apostada: <input name="myInput" defaultValue={0}  />
          </label>          
          <button type="submit">Cargar Bote</button>
        </form>
        </section>
      );

}
export default BotoneraForm;