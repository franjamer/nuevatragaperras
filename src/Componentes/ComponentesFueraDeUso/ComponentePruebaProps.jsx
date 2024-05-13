/*
Componente cuya función es comunicar componente padre con hijo.
FUERA DE USO
*/

import React, { useState } from 'react'


function ComponentePruebaProps(props) {
  // const mensajeAenviar='!Hola desde el Componente Hijo';
  const [mensajeEscrito, setMensajeEscrito] = useState('')
  const handleClick = () => {
    //Llama a la función recibida desde el componente padre para enviar el mensaje
    props.handleMensajeDeHijo(mensajeEscrito)
  }
  const valorMensajeEscrito = (e) => {
    setMensajeEscrito(e.target.value)
  }

  // const handleChange = ( )=> {
  //   setMensajeEscrito(valorMensajeEscrito)
  // }
  return (
    <section id='pruebasProps'>
      <div >
        <h2>Cantidad Apostada</h2>
        <input onChange={valorMensajeEscrito} type='text' value={mensajeEscrito} name='Valor para enviar' placeholder='valor de la apuesta' />

      </div>
      <div>
        <button onClick={handleClick}>Apostar</button>
      </div>
    </section>

  )
}



export default ComponentePruebaProps
