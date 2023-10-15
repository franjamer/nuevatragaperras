// import React, { useState } from "react"
import { useRef, useCallback, useState } from "react";
import ContadorSencillo from "../Componentes/ContadorSencillo";
import { ShareDataContext } from "../Componentes/SliderVertical";
/*En este componente la unica lógica que hay es para hacer funcionar un settimeout. Tambien se ha importado un componente y un
contexto común de datos,...un hook que hace un entorno común para compartir variables, propiedades,...etc. Además tambien hay 
un ensayo de utilización de props.*/
//Definición de funcion Contadores
export default function Contadores({ tamaño = '18px', color = 'white', colortexto = 'black', texto = 'por defecto', contadorAleatorio }) {
  const timeoutIdRef = useRef(null);
  const intervalIdRef = useRef(null);
  const [data, setData] = useState(null);
  //Dando valores a las props
  tamaño = '10px'
  color = 'brown'
  colortexto = 'yellow'
  texto = 'texto a modificar'
  contadorAleatorio = () => {
    let numAleato = Math.floor(Math.random() * 10)
    return numAleato
  }
  const iniciarTimeout = useCallback(() => {
    console.log("se hizo clic en iniciar timeout");
    timeoutIdRef.current = setTimeout(() => {
      clearInterval(intervalIdRef.current);
      console.log("ya pasó el tiempo");
      alert("pasó un el tiempo marcado");
    }, 2000);
    console.log(timeoutIdRef.current)
  }, []);

  const cancelarTimeout = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      console.log("El tiempo fue abortado");
    }
  };
  //Comienza JSX
  return (
    <div className="slot">
      <h1>SetTimeout</h1>
      <button
        className="js-alertar"
        onClick={iniciarTimeout}>
        Alertar
      </button>
      <button className="js-cancelar-alerta" onClick={cancelarTimeout}>
        Cancelar Alerta
      </button>
      <button className="js-mover-slider">
        Mover Slider
      </button>
      <hr />
      <ShareDataContext.Provider value={{ data, setData }}>
        <ContadorSencillo />
      </ShareDataContext.Provider>
    </div>
  )
}


