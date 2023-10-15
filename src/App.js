import React from 'react';
import './estilos/App.css';
import Slot from './Componentes/Slot';
import imagenes from './assets/img/imagenes';
// import { ShareDataContext } from './Componentes/SliderVertical';
import { useState } from 'react';
import ComponentePruebaProps from './Componentes/ComponentePruebaProps';
// import ComponentePruebaProps from './Componentes/ComponentePruebaProps';
//Comienza la funcion principal de entrada a la aplicación
function App() {
  // const [data, setData] = useState(null)

  const [mensaje, setMensaje] = useState('')
  // const [datodesdeHijo, setdatodesdeHijo] = useState('');
  // const [valorImagen, setValorImagen] = useState(0)
  
  //Función flecha para recibir el valor de la última imagen mostrada.
  // const handleImagenMostrada = () =>{
  //   setValorImagen(imagenes[0].valor)
  // }
  //Función para recibir el mensaje del componente hijo y actualizar el estado
  
  const handleMensajeDeHijo = (mensaje) => {
    setMensaje(mensaje)
  }
  // const recibeDatoDeHijo = (datodesdeHijo) => {
  //   setdatodesdeHijo(datodesdeHijo)
  // }
  return (
    // <ShareDataContext.Provider >
      <div className="App">
        <header >
          <h1>
            Juego de Tragaperras
          </h1>
          <section className='seccionCabecera'>
            <h3>Componente Padre</h3>
            <p>Mensaje del Componente Hijo: {mensaje}</p>
            {/* <p>Datos del Componente Hijo variables {recibeDatoDeHijo}</p> */}

            {/* <span>
              <label id='Apuesta' >Cantidad Apostada</label>
              <input type='text' readOnly />
              </span>
              <span>
              Cantidad Apostada
              </span>
              <span>
              Nº Tiradas
            </span> */}
          </section>
        </header>
        <section className='seccionSlots'>
          <Slot className='slot' imagenes={imagenes} />


        </section>
        <section id='controlesPrincipales' className='seccionSlots'>
          Seccion DONDE VAN LOS CONTROLES PRINCIPALES
          <br />
          <ComponentePruebaProps  handleMensajeDeHijo={handleMensajeDeHijo} />
          {/* <ComponentePruebaProps  sendData={recibeDatoDeHijo} datodesdeHijo={datodesdeHijo}/> */}
        </section>

      </div>
    // </ShareDataContext.Provider>
  );
}

export default App;
