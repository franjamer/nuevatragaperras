import React,{useState} from "react";
import Imagenes from "./Imagenes";

 const EligeImage = ()=>{
    const [indice, setIndice] = useState(0)
    const imagenActualSrc = Imagenes[indice].src
    const imagenActualNombre = Imagenes[indice].nombre
    
    function handleClickIndice() {
        if (indice >= Imagenes.length - 1) {
            setIndice(0)
        }
        else {
            setIndice(indice + 1)
        }
    }

    return (
    <>
        <section className='zonaC-ElegirImagen'>
            <div className="zonaC-marcoImg">
            <img src={imagenActualSrc} alt ={`Imagen ${imagenActualNombre}` } width={200}height={200} />
            </div>
            {/* <input type='number'min={0} max={9} value={indice} readOnly/> */}
            <button onClick={handleClickIndice}>Cambia Imagen</button>                    
        </section>
    </>
    )
 }
export default EligeImage;