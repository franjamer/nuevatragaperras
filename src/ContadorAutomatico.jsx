import React from 'react'
import { useRef, useContext } from 'react';
import { ShareDataContext } from './SliderVertical';



export default function ContadorAutomatico() {

    // const valorDefecto = 0
    const { data, setData } = useContext(ShareDataContext)
    // const [contador, setContador] = useState(valorDefecto)
    const intervalIdRef = useRef(null);
    const timeOutIdRef = useRef(null)
    const contadorRef = useRef('0');

    const handleUpdateData = () => {
        const newValue = data
        setData(newValue)
    }

//inicio del contador
    const contarAutomaticoData=()=>{
        paradaAutomatica()
        intervalIdRef.current = setInterval(() => { 
            document.getElementsByTagName('h3').textContent=contadorRef.current
           setData(contadorRef.current++);
           
        }, 500);
    }

    // parada automática
    const paradaAutomatica=()=>{
        
        timeOutIdRef.current=setTimeout(() => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);          
            }
            // contarAutomaticoData()
        }, 10000)};

    //Función para detener el contador
    const pararContadorAutomaticoData = () => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);          
        }
    };
    //Función para poner a cero el contador
    const resetearContadorAutomaticoData = () => {
        contadorRef.current=0
        setData(0)
        document.getElementsByTagName('h3').textContent= 0
    }

  return (
    <div>
        <h1>Contador automatico</h1>
        <button onClick={contarAutomaticoData}>Iniciar</button>
        <button onClick={resetearContadorAutomaticoData}>Resetear</button>
        <button onClick={pararContadorAutomaticoData}>Parar</button>
        <button onClick={handleUpdateData}>Valor Compartido</button>
        <h3>Valor de data: {data}</h3>
    </div>
  )}
