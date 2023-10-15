import React, { useState } from 'react'


function ComponentePruebaProps(props) {
// const mensajeAenviar='!Hola desde el Componente Hijo';
const [mensajeEscrito, setMensajeEscrito]= useState('')
const handleClick = ()=>{
  //Llama a la función recibida desde el componente padre para enviar el mensaje
props.handleMensajeDeHijo (mensajeEscrito)
}
const valorMensajeEscrito=(e)=>{
  setMensajeEscrito(e.target.value)
}

const handleChange = ( )=> {
  setMensajeEscrito(valorMensajeEscrito)
}
return (
    <div>
      <h2>Componente Hijo</h2>
      <input onChange={valorMensajeEscrito} type='text' value={mensajeEscrito} name='Valor para enviar' placeholder='Introduce valor a mostrar en el componente padre'/>
      <button onClick={handleClick}>Enviar Mensaje al Componente Padre</button>
    </div>
  )
}



export default ComponentePruebaProps
