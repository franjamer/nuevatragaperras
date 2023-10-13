import React from 'react'
import imagenes from './assets/img/imagenes'
import { useState } from 'react';
function SliderVertical() {

    // Variables y Estados
    const [imagenActual, setImagenActual] = useState(0);
    const cantidad = imagenes?.length;
    // Devuelve preventivo para evitar errores
    if (!Array.isArray(imagenes) || cantidad === 0) {
        console.log(cantidad)
        return null;
    }

    const siguienteImagen = () => {
        setImagenActual((prevImagenActual) =>
            prevImagenActual === cantidad - 1 ? 0 : prevImagenActual + 1
        );
    };

    const anteriorImagen = () => {
        setImagenActual((prevImagenActual) =>
            prevImagenActual === 0 ? cantidad - 2 : prevImagenActual - 1
        );
    };
    const moverFotos = () => {
        setImagenActual((prevImagenActual) =>
            prevImagenActual === cantidad - 1 ? 0 : prevImagenActual + 1
        );
    };

    return (
        <div className="slot">
            <button onClick={anteriorImagen}>Anterior</button>
            {imagenes.map((imagen, index) => (
                <div key={index}>
                    {console.log(index)}
                    {imagenActual === index && <img src={imagen} alt="imagen" />}
                </div>
            ))}
            <button onClick={siguienteImagen}>Siguiente</button>
            <button onClick={moverFotos}> moverFotos</button>
        </div>
    )
}

export default SliderVertical