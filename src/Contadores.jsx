// import React, { useState } from "react"
import { useRef, useCallback } from "react";
export default function Contadores({ props }) {
  // let tiempo = props.tiempo
  // console.log(tiempo)
  const timeoutIdRef = useRef(null);
  const intervalIdRef = useRef(null);
  const contadorRef = useRef('');

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

  const contar = () => {
    intervalIdRef.current = setInterval(() => {
      document.querySelector(".js-contador").textContent = contadorRef.current;
      contadorRef.current++;
      console.log(contadorRef.current)
    }, 1000);
  };

  const pararContador = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      console.log("El tiempo fue abortado");
    }
  };

  const resetearContador = () => {
    let reseteoValor = document.querySelector(".js-contador")
    // console.log(reseteoValor)
    reseteoValor.textContent = 0;
    console.log(reseteoValor.textContent)
    // console.log("el valor del contador antes de ponerlo a cero es: " + contadorRef.current)
    contadorRef.current = 0
    // console.log("el valor de contaddorRef despues de ponerlo a cero es: " + contadorRef.current)
    // contadorRef.current=reseteoValor


  };
  return (
    <div className="slot">
      <h1>SetTimeout</h1>
      <button   
              className="js-alertar" 
              // tiempo={tiempo}

              onClick={iniciarTimeout}>
        Alertar
      </button>
      <button className="js-cancelar-alerta"onClick={cancelarTimeout}>
        Cancelar Alerta
      </button>

      <h1>setInterval</h1>
      <button className="js-contar" onClick={contar}>
        Contar¡
      </button>
      <button className="js-parar" onClick={pararContador}>
        Parar
      </button>
      <button className="js-resetear" onClick={resetearContador}>
        Poner Contador a cero
      </button>
      <h3 className="js-contador">0</h3>
      <button className="js-mover-slider">Mover Slider</button>
      <label htmlFor="EntradaValor">EntradaValor</label>
      <input id="EntradaValor" type="text" placeholder="Introduce aqui el tiempo de Intervalo" />

    </div>
  )
}


