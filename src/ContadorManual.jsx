import React from 'react'
import {useState } from 'react';
// import { ShareDataContext } from './SliderVertical';


const ContadorManual = () => {
   //Definicion de constantes
    const valorDefecto = 0
    const [contador, setContador] = useState(valorDefecto)
    
  return (
    <div>

<h1>Contador Manual</h1>
<button onClick={() => setContador(contador + 1)}>Incrementar</button>

<button onClick={() => setContador(0)}>Poner a Cero</button>
<button onClick={() => setContador(contador - 1)}>Decrementar</button>
<p>Valor Compartido de Contador: {contador}</p>

    </div>
  )
}

export default ContadorManual