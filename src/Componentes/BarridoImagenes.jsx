
/*******************************************************************
Componente Solo como ejemplo para operar componentes Padres e Hijos.
ACTUALMENTE FUERA DE USO
********************************************************************/
import React from 'react'

function Saludo(props) {
  //función de compnenete hijo que recibe el mensaje del 
  //componente padre.
  return (
    <h1>{props.mensaje}</h1>
  )
}

export default Saludo