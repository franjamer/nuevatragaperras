// import React from 'react'
// import ContadorAutomatico from '../Componentes/ContadorAutomatico';
// import ContadorManual from '../Componentes/ContadorManual';
// //Comienzo de funcion principal de este componente.
// /* Este componente importa dos componentes hijos, uno de incremento y decremento manual
// y otro de inicio manual y parada automática.*/
// const ContadorSencillo = () => {
//     return (
//         <div>
//             {/* <ContadorManual /> */}
//             <h4>Aqui va el Contador Manual</h4>
//             <hr />
//             {/* <ContadorAutomatico /> */}
//             <h4>Aquí va el Contador Automático</h4>
//         </div>
//     )
// }
// export default ContadorSencillo

//Código proporcionado por chatgpt

import React, { useState, useEffect, useRef } from 'react';

const ContadorSencillo = () => {
    const [segundos, setSegundos] = useState(0);
    const [corriendo, setCorriendo] = useState(false);
    const [intervalRef] = useRef(null);
    useEffect(() => {
        let intervalId;

        if (!corriendo) {
            intervalId = setInterval(() => {
                setSegundos(prevSegundos => prevSegundos + 1);
            }, 1000);

        }

        return () => {
            clearInterval(intervalId);
        };
    }, [corriendo]);
    console.log("Segundos: " + segundos)
    //funcion flecha para modificar el valor de iniciar contador.
    const iniciarContador = () => {
        if (!corriendo) {
            setCorriendo(corriendo);
            intervalRef.current = setInterval(() => {
                setSegundos(prevSegundos => prevSegundos + 1);
            }, 1000);
        }
    };
    //funcion flecha para modificar el valor de detener contador.
    const detenerContador = () => {
        clearInterval(intervalRef.current);
        setCorriendo(false);
    };
    //funcion flecha para modificar el valor de resetear contador.
    const resetearContador = () => {
        clearInterval(intervalRef.current);
        setSegundos(0);
        setCorriendo(false);
    };

    return (
        <div>
            <h1>Contador de Tiempo</h1>
            <p>Segundos transcurridos: {segundos}</p>
            <button onClick={iniciarContador} disabled={corriendo}>
                Iniciar
            </button>
            <button onClick={detenerContador} disabled={!corriendo}>
                Detener
            </button>
            <button onClick={resetearContador}>
                Resetear a Cero
            </button>
        </div>
    );
};

export default ContadorSencillo;


