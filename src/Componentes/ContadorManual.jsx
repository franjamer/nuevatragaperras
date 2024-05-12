// /* Este componente hace un contador manual con tres botones, uno para 
// incrementar, otro para decrementar, y otro para poner el contador a cero. */
// import React from 'react'
// import { useState } from 'react';
// const ContadorManual = () => {
//     //Definicion de constantes
//     let valorDefecto = 0
//     let [contador, setContador] = useState(valorDefecto)

//     return (
//         <div>
//             <h1>Contador Manual</h1>
//             <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//             <button onClick={() => setContador(100)}>Poner a Cero</button>
//             <button onClick={() => setContador(contador - 1)}>Decrementar</button>
//             <p>Valor Compartido de Contador: {contador}</p>
//         </div>
//     )
// }

// export default ContadorManual
import React, { useState } from 'react';
const valorDefecto = 100;
const ContadorManual = (props) => {
    // Definición de constantes


    const [contador, setContador] = useState(valorDefecto);
    // const handleContador=()=>(contador)
    props.setContador(contador)

    // console.log(contador)


    return (
        <div>
            <h3>Control de Contador</h3>
            <button onClick={() => setContador(prevContador => prevContador + 1)}>Incrementar</button>
            <button onClick={() => setContador(valorDefecto)}>Poner a Cero</button>
            <button onClick={() => setContador(prevContador => prevContador - 1)}>Decrementar</button>
            <p>Valor Actual del Contador: {contador}</p>
            <input onChange={setContador} type='text' value={contador} name='Valor para enviar' placeholder='valor a emviar a comp. padre' />
        </div>
    );
};

export default ContadorManual;