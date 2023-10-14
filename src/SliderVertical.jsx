import React, { createContext, useState } from 'react'
import imagenes from './assets/img/imagenes'
import ContadorSencillo from './ContadorSencillo';
import ContadorAutomatico from './ContadorAutomatico';

export const ShareDataContext = createContext()

//funcion componente
function SliderVertical() {

    // Variables y Estados
    const [imagenActual, setImagenActual] = useState(0);
    const [mueveImagen, setMueveImagen] = useState(0)
    const cantidad = imagenes?.length;
    const [data, setData] = useState(null)
    // Devuelve preventivo para evitar errores
    if (!Array.isArray(imagenes) || cantidad === 0) {
        // console.log(cantidad)
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
    const contadorAleatorio = () => {
        let numAleato = Math.floor(Math.random() * 100)
        return numAleato
    }
    console.log('contador aleatorio es ' + contadorAleatorio())
    //funcion nuevoIndice establece un indice aleatorio entre 1 y 4
    const nuevoIndice = () => {
        let restoIndice = (contadorAleatorio() % 10)
        // console.log('resto Indice es ' + restoIndice)
        return restoIndice
    }
    console.log(`nuevo indice es ` + nuevoIndice())
    const moverFotos = () => {
        setImagenActual((prevImagenActual) =>
            prevImagenActual === cantidad - 1 ? 0 : prevImagenActual + 1



        );
    };


    //   console.log(imagenes[nuevoIndice].nombre)

    return (
        <div className="slot">
            <button onClick={anteriorImagen}>Anterior</button>
            {
                console.log(imagenes[nuevoIndice()].nombre)
            }


            <div key={nuevoIndice()}>

                {<img src={imagenes[nuevoIndice()].src} alt={imagenes[nuevoIndice()].nombre} />}
                {/* {console.log(imagen.nombre)}
                    {console.log(index)} */}
            </div>

            <button onClick={siguienteImagen}>Siguiente</button>
            <button onClick={moverFotos} disabled='yes'>
                moverFotos</button>
            <button >
                mover Imagen
            </button>
            <ShareDataContext.Provider value={{ data, setData }}>
                <ContadorAutomatico />
            </ShareDataContext.Provider>

        </div>
    )
}

export default SliderVertical