import React, { createContext, useState } from 'react'
import imagenes from '../assets/img/imagenes'
import ContadorAutomatico from '../Componentes/ContadorAutomatico';
/*En este componente tenemos un carrusel de imágenes, que mediante dos botones, cambian, pero de forma aleatorioa.
A su vez importado, esta otro componente de tiempo, que con un botón comienza la cuenta, y el cambio de imagenes aleatorio tambien, 
y se para al terminar otro tiempo, quedandose la imagen que toque. */
export const ShareDataContext = createContext()

//funcion componente
function SliderVertical() {

    // Variables y Estados
    // const [imagenActual, setImagenActual] = useState(0);
    // const cantidad = imagenes?.length;
    const [data, setData] = useState(null)


    const contadorAleatorio = () => {
        let numAleato = Math.floor(Math.random() * 100)
        return numAleato
    }
    //funcion nuevoIndice establece un indice aleatorio entre 1 y 10
    const nuevoIndice = () => {
        let restoIndice = (contadorAleatorio() % 10)
        // console.log('resto Indice es ' + restoIndice)
        return restoIndice
    }

    return (
        <ShareDataContext.Provider value={{ data, setData }}>
            <div className="slot">
                {/* <button onClick={anteriorImagen}>Anterior</button> */}
                <div key={nuevoIndice()}>
                    {<img src={imagenes[nuevoIndice()].src} alt={imagenes[nuevoIndice()].nombre} />}

                </div>
                <p>{imagenes[nuevoIndice()].nombre}</p>
                {/* <button onClick={siguienteImagen}>Siguiente</button> */}
                {/* <button onClick={mostradorImagenes}>Mostrador de Imagenes</button> */}
                <ContadorAutomatico />

            </div>
        </ShareDataContext.Provider>
    )
}

export default SliderVertical