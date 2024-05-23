import React from "react";
import imagenes from "./Imagenes";
import "../estilos/correimagen.css"
const IndiceImagen = ({ counterAutoContador }) => {
    const dividendoAleato = Math.floor(100 * Math.random())
    const divisorAleato = imagenes.length
    let indiceAleatorio = RestoDiv(dividendoAleato, divisorAleato)

    function RestoDiv(dividendo, divisor) {
        const aleatoRestoDiv = dividendo % divisor
        return aleatoRestoDiv
    }
    const imagenActual = imagenes[indiceAleatorio];
    return (


        <>
            {imagenActual ? (
                <>
                    <img className="imagen-correimagen" src={imagenActual.src} alt={`Imagen ${imagenActual.nombre}`} />
                    <p className="parrafo-correimagen">{`Imagen ${imagenActual.nombre}`}</p>
                </>
            ) : (
                <p className="parrafo-correimagen">Imagen no encontrada</p>
            )}
        </>
    )
}
export default IndiceImagen;