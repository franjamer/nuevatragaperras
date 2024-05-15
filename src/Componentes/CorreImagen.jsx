// import { useState } from "react";
import imagenes from "./Imagenes";
import "../estilos/correimagen.css"
const IndiceImagen = ({ counterAutoContador }) => {
    const dividendoAleato = Math.floor(100 * Math.random())
    const divisorAleato = imagenes.length - 1
    let indiceAleatorio = RestoDiv(dividendoAleato, divisorAleato)


    function RestoDiv(dividendo, divisor) {
        const aleatoRestoDiv = dividendo % divisor
        return aleatoRestoDiv
    }
    return (
        <>
            <img className="imagen-correimagen" src={imagenes[indiceAleatorio].src} alt={`Imagen ${imagenes[indiceAleatorio].nombre}`} />
            <p className="parrafo-correimagen">{counterAutoContador}</p>

        </>
    )
}
export default IndiceImagen;