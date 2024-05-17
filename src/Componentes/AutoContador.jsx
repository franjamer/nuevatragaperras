/* ************************************************
*Componente que funciona correctamente.
***************************************************/
import React, { useState, useEffect, useRef } from 'react';
// import imagenes from './Imagenes'
import IndiceImagen from './CorreImagen';
import "../estilos/Autocontador.css"
function AutoContador({ contador, setContador, estadoAutoContador }) {
    const [counterAutoContador, setCounterAutoContador] = useState(0);
    // const [estadoAutoContador, setEstadoAutoContador] = useState(false);
    const intervalRef = useRef(null)

    // const handleContarClick = () => {
    //     if (estadoAutoContador) {
    //       setContador(contador + 1);
    //     }
    //   };
    useEffect(() => {
        if (estadoAutoContador) {
            intervalRef.current = setInterval(() => {
                setCounterAutoContador((prevCounter) => {
                    const newCounter = prevCounter + 1;
                    const numCambiosImagen = 40// El 40 es el numero de cambios de imagen
                    // Detener el contador cuando alcance la longitud del array
                    if (newCounter >= numCambiosImagen) {
                        // setEstadoAutoContador(false); // Detener el contador
                        clearInterval(intervalRef.current); // Limpiar intervalo
                    }
                    return newCounter;
                })
            }, 100);
        } else {
            clearInterval(intervalRef.current)
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [estadoAutoContador]);
    // function handleClickContar() {
    //     console.log(counterAutoContador)
    //     if (counterAutoContador < imagenes.length - 1) {
    //         setEstadoAutoContador(true);
    //     }
    //     else {
    //         setEstadoAutoContador(false); //Inicia o reanuda el contador
    //     }
    // }
    function handleClickReiniciar() {
        // setEstadoAutoContador(false)    //Resetea el estadoAutoContador
        setCounterAutoContador(0)       //Resetea el contador a cero
    }

    return (
        <div className='autocontador' counterAutoContador={counterAutoContador}>

            <IndiceImagen counterAutoContador={counterAutoContador} />
            {/* <button onClick={handleClickContar} hidden >Contar</button>
            <button onClick={handleClickDetener} hidden >Pausar</button>
            <button onClick={handleClickReiniciar}>Resetear</button> */}
            {/* <button onClick={() => setCounterAutoContador(counterAutoContador+1)} hidden>Contar</button> */}
            {/* <button onClick={handleClickDetener} hidden>Pausar</button> */}
            <button onClick={handleClickReiniciar}>Resetear</button>
        </div>
        //     <div className="auto-contador">
        //     <span>{contador}</span>
        //     <button onClick={handleContarClick}>Contar</button>
        //   </div>    
    );
}
export default AutoContador;