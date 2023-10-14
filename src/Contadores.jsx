// import React, { useState } from "react"
import { useRef, useCallback, useState } from "react";
import ContadorSencillo from "./ContadorSencillo";
import { ShareDataContext } from "./SliderVertical";

//Definición de funcion Contadores
export default function Contadores({ tamaño = '18px', color = 'white', colortexto = 'black', texto = 'por defecto', contadorAleatorio }) {
  const timeoutIdRef = useRef(null);
  const intervalIdRef = useRef(null);
  const [data, setData] = useState(null)
  // const [textoInput,setTextoInput]= useState(texto)
  // const tiempoIntervalRef = useRef(null);
  // const [textoLabel,setTextoLabel]=useState('Texto en Etiqueta')
  // let EtiquetaInput='';
  //Monitoreo de valores constantes.
  // function otraCuenta(){
  //   tiempoIntervalRef.current=setInterval(()=>{
  //     EtiquetaInput=document.querySelector('js-otraCuenta').textContent
  //     EtiquetaInput=tiempoIntervalRef.current
  //     console.log(EtiquetaInput)
  //     let miContador
  //     for(let i=0;i<10;i++){
  //        miContador=i
  //     }
  //     console.log("Está contando otra cuenta")
  //     return miContador
  //   },5000)
  // }
  // const pararOtraCuenta= ()=>{
  //   if(tiempoIntervalRef.current){
  //     clearInterval(tiempoIntervalRef.current);
  //   }
  //   console.log("Se ha parado otra cuenta")
  // }

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




  //funcion para capturar el valor del input conforme se escribe.
  // const handleInputChange=({target})=>{
  //   setTextoInput(target.value)
  //   console.log(textoInput)
  // }
  // const handlLabelClick=()=>{
  //   console.log(setTextoLabel(otraCuenta()))
  //   setTextoLabel(otraCuenta())}



  //Comienza JSX
  return (
    <div className="slot">
      {/* <input type="text" textContent='hola' placeholder={texto} style={{ backgroundColor: color, color: colortexto, fontSize: tamaño }} /> */}
      <h1>SetTimeout</h1>
      <button
        className="js-alertar"
        // tiempo={tiempo}

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
      {/*     <label
        id="Etiqueta"
        htmlFor='EntradaValor'
      >
        {textoInput}
      </label>
      <label id="labelEntradaVAlor" htmlFor="" ></label>
      <input  value={textoInput} onChange={handleInputChange}  type="text" placeholder={textoInput }/>
      <button onClick={pararOtraCuenta}>parar otra cuenta</button>
      <button >Iniciar Otra Cuenta</button> */}

    </div>
  )
}


