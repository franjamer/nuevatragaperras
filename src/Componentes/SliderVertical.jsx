import React, { createContext, useState } from 'react'
import Imagenes from './Imagenes'
// import ContadorAutomatico from '../Componentes/ContadorAutomatico';
import ContadorSencillo from './ContadorSencillo'
/*En este componente tenemos un carrusel de imágenes, que mediante dos botones, cambian, pero de forma aleatorioa.
A su vez importado, esta otro componente de tiempo, que con un botón comienza la cuenta, y el cambio de imagenes aleatorio tambien, 
y se para al terminar otro tiempo, quedandose la imagen que toque. */
export const ShareDataContext = createContext()

//funcion componente
function SliderVertical(props) {

    // Variables y Estados
    // const [imagenActual, setImagenActual] = useState(0);
    // const cantidad = imagenes?.length;
    const [data, setData] = useState(null)


    const contadorAleatorio = () => {
        let numAleato = Math.floor(Math.random() * 10)
        
        return numAleato

    }
    console.log("contador " + contadorAleatorio())
    //funcion nuevoIndice establece un indice aleatorio entre 1 y 10
    const nuevoIndice = () => {
        let restoIndice = (contadorAleatorio() % 10)
        console.log("resto de Indice ")
        // console.log('resto Indice es ' + restoIndice)
        return restoIndice
    }
    console.log("valor del nuevo indice " + nuevoIndice())
    return (
        <ShareDataContext.Provider value={{ data, setData }}>
            <div className="slot">
                {/* <button onClick={anteriorImagen}>Anterior</button> */}
                <div key={nuevoIndice()}>
                    {<img src={Imagenes[nuevoIndice()].src} alt={Imagenes[nuevoIndice()].nombre} />}

                    <p>nuevoIndice()</p>
                </div>
                <p>{Imagenes[nuevoIndice()].nombre}</p>
                {/* <button onClick={siguienteImagen}>Siguiente</button>
                <button onClick={mostradorImagenes}>Mostrador de Imagenes</button> */}
                <ContadorSencillo />

            </div>
        </ShareDataContext.Provider>
    )
}

export default SliderVertical