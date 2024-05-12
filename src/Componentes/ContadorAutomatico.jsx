/*En este componente la lógica realiza un inicio de contador al hacer click en un 
botón de inicio de cuenta, y al cabo de un tiempo, se para la cuenta sola. Esto se 
consigue con setTimeout. */
import React from 'react'
import { useRef, useContext } from 'react';
import { ShareDataContext } from '../Componentes/SliderVertical';

// function activarEventoOnClickEnComponenteA() {
//      console.log("Evento onClick activado en Componente A");
//      // Realiza cualquier acción que desees aquí
//    }   


export default function ContadorAutomatico({ dato }) {
    const { data, setData } = useContext(ShareDataContext)
    const intervalIdRef = useRef(null);
    const timeOutIdRef = useRef(null)
    const contadorRef = useRef('0');
    // console.log('Render ContadorAutomatico')
    //     // const handleUpdateData = () => {
    //     //     const newValue = data
    //     //     setData(newValue)}

    //     //inicio del contador
    const contarAutomaticoData = () => {
        //tiempo que se muestra cada imagen
        const tiempoIntervalo = 2000;
        paradaAutomatica()
        intervalIdRef.current = setInterval(() => {
            document.getElementsByTagName('h3').textContent = contadorRef.current
            setData(contadorRef.current++);

        }, tiempoIntervalo)
    }

    // parada automática
    const paradaAutomatica = () => {
        timeOutIdRef.current = setTimeout(() => {
            //             if (intervalIdRef.current) {
            //                 clearInterval(intervalIdRef.current);
            //             }
        }, 2000)//tiempo total para que se muestren las imágenes.
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
        //         contadorRef.current = 0
        //         setData(0)
        //         document.getElementsByTagName('h3').textContent = 0
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


/*Çorrecciones propuestas por chatgpt del codigo anterior*/
// import React, { useRef, useContext } from 'react';
// import { ShareDataContext } from '../Componentes/SliderVertical';

// const ContadorAutomatico = ({ dato }) => {
//     const { data, setData } = useContext(ShareDataContext);
//     const intervalIdRef = useRef(null);
//     const contadorRef = useRef(0);

//     const contarAutomaticoData = () => {
//         const tiempoIntervalo = 2000;

//         // Detener cualquier intervalo activo antes de iniciar uno nuevo
//         pararContadorAutomaticoData();

//         intervalIdRef.current = setInterval(() => {
//             // Actualizar contador y datos compartidos
//             setData(prevData => prevData + 1);
//             contadorRef.current = contadorRef.current + 1;

//             // Actualizar el texto en el elemento h3 (suponiendo que es único en el DOM)
//             const h3Element = document.getElementsByTagName('control_contador')[0];
//             if (h3Element) {
//                 h3Element.textContent = contadorRef.current;
//             }
//         }, tiempoIntervalo);
//     };

//     const pararContadorAutomaticoData = () => {
//         if (intervalIdRef.current) {
//             clearInterval(intervalIdRef.current);
//         }
//     };

//     const resetearContadorAutomaticoData = () => {
//         contadorRef.current = 0;
//         setData(0);

//         const control_contador_Element = document.getElementsByTagName('control_contador')[0];
//         if (control_contador_Element) {
//             control_contador_Element.textContent = 0;
//         }
//     };

//     return (
//         <div id='control_contador'>
//             <button id='inicio' onClick={contarAutomaticoData}>Iniciar</button>
//             <button onClick={pararContadorAutomaticoData}>Parar</button>
//             <button onClick={resetearContadorAutomaticoData}>Resetear</button>
//             <h3>Valor de data: {data}</h3>
//         </div>
//     );
// };

// export default ContadorAutomatico;
