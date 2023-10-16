import React from 'react'
import { useRef, useContext } from 'react';
import { ShareDataContext } from '../Componentes/SliderVertical';


/*En este componente la lógica realiza un inicio de contador al hacer click en un botón de 
inicio de cuenta, y al cabo de un tiempo, se para la cuenta sola. Esto se consigue con setTimeout. */
// function activarEventoOnClickEnComponenteA() {
//     console.log("Evento onClick activado en Componente A");
//     // Realiza cualquier acción que desees aquí
//   }    

  
export default function ContadorAutomatico({dato}) {
    const { data, setData } = useContext(ShareDataContext)
    const intervalIdRef = useRef(null);
    const timeOutIdRef = useRef(null)
    const contadorRef = useRef('0');
    // console.log('Render ContadorAutomatico')
    // const handleUpdateData = () => {
    //     const newValue = data
    //     setData(newValue)
    // }
// 



    //inicio del contador
const contarAutomaticoData = () => {
        const tiempoIntervalo = 500;
        paradaAutomatica()
        intervalIdRef.current = setInterval(() => {
            document.getElementsByTagName('h3').textContent = contadorRef.current
            setData(contadorRef.current++);
            
        }, tiempoIntervalo);
       
    }
    

    // parada automática
    const paradaAutomatica = () => {
        timeOutIdRef.current = setTimeout(() => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);                            
            }
        }, 5000)         
    };

    // Función para detener el contador
    const pararContadorAutomaticoData = () => {
        if (intervalIdRef.current) {
            console.log(intervalIdRef.current)
            clearInterval(intervalIdRef.current);
        }
    };
    // Función para poner a cero el contador
    const resetearContadorAutomaticoData = () => {
        contadorRef.current = 0
        setData(0)
        document.getElementsByTagName('h3').textContent = 0
    }

    return (
        <div>
            {/* <h1>Contador automatico</h1> */}
            <button onClick={contarAutomaticoData}>Iniciar</button>
            <button onClick={resetearContadorAutomaticoData}>Resetear</button>
            <button onClick={pararContadorAutomaticoData}>Parar</button>
            {/* <button onClick={handleUpdateData}>Valor Compartido</button> */}
            <h3 >Valor de data: {data}</h3>
        </div>
    )
  
}

