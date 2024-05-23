/* ************************************************
*Componente que funciona correctamente.
***************************************************/
import React, { useEffect, useRef } from 'react';
import IndiceImagen from './IndiceImagen';
import "../estilos/Autocontador.css"
function AutoContador({estadoAutoContador, contador, setContador, setUltimaImagen,setCounterAutoContador }) {
    const intervalRef = useRef(null)
    useEffect(() => {
        if (estadoAutoContador) {
            intervalRef.current = setInterval(() => {
                setCounterAutoContador((prevCounter) => {
                    const newCounter = prevCounter + 1;
                    const numCambiosImagen = 20// El 20 es el numero de cambios de imagen
                    // Detener el contador cuando alcance la longitud del array
                    if (newCounter >= numCambiosImagen) {
                        clearInterval(intervalRef.current); // Limpiar intervalo
                        setUltimaImagen(<IndiceImagen counterAutoContador={numCambiosImagen } />);
                    }
                    return newCounter;
                } )
            }, 200);
        } else {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current);
            }, [estadoAutoContador, setUltimaImagen,setCounterAutoContador]);
    function handleClickReiniciar() {
           //Resetea el estadoAutoContador
        setCounterAutoContador(0)
        setContador(0)  
        console.log(contador)     //Resetea el contador a cero
    }
    return (
        <div className='autocontador' >
            <IndiceImagen />     
            <button onClick={handleClickReiniciar}>Resetear</button>            
        </div>          
    );
}
export default AutoContador;