/* ************************************************
*Componente que funciona correctamente.
***************************************************/


import { useState, useEffect, useRef } from 'react';
import imagenes from './Imagenes'
function AutoContador() {
    const [counter, setCounter] = useState(0);
    const [estado, setEstado] = useState(false);
    const intervalRef = useRef(null)

    useEffect(() => {
        if (estado) {
            intervalRef.current = setInterval(() => {
                setCounter((prevCounter) => {
                    const newCounter = prevCounter + 1;

                    // Detener el contador cuando alcance la longitud del array
                    if (newCounter >= imagenes.length-1) {
                        setEstado(false); // Detener el contador
                        clearInterval(intervalRef.current); // Limpiar intervalo
                    }
            return newCounter;
                })
            }, 1000);
        } else {
            clearInterval(intervalRef.current)
        }

        return () => {
            clearInterval(intervalRef.current);
           
        }
    }, [estado]);

    function handleClickContar() {
     
        if (counter<imagenes.length)
        {
            setEstado(true);
        } 
        else
        {
            setEstado(false); //Inicia o reanuda el contador
        }      
    }

    function handleClickReiniciar() {
        setEstado(false)    //Resetea el estado
        setCounter(0)       //Resetea el contador a cero
    }

    function handleClickDetener() {
        setEstado(false)
    }
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClickContar} hidden >Contar</button>
            <button onClick={handleClickDetener} hidden >Pausar</button>
            <button onClick={handleClickReiniciar}>Resetear</button>
        </div>
    );
}
export default AutoContador;