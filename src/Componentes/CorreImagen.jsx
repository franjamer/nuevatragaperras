// import { useState } from "react";
import imagenes from "./Imagenes";

const IndiceImagen=({counter})=> {
      let indice = counter
    

    return (
        <>
            <img src={imagenes[indice].src} alt={`Imagen ${imagenes[indice].nombre}`}/>
            
            <p>{imagenes[indice].nombre}</p>
        </>
    )
}
export default IndiceImagen;