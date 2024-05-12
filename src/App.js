import React from 'react';
import './estilos/App.css';
// import Slot from './Componentes/Slot';
import imagenes from './assets/img/imagenes';
// import { ShareDataContext } from './Componentes/SliderVertical';
import { useState } from 'react';
import ComponentePruebaProps from './Componentes/ComponentePruebaProps';
import SliderVertical from './Componentes/SliderVertical';
// import ComponentePruebaProps from './Componentes/ComponentePruebaProps';
//Comienza la funcion principal de entrada a la aplicación
function App() {
  // const [data, setData] = useState(null)

  const [mensaje, setMensaje] = useState('')
  const [datodesdeHijo, setdatodesdeHijo] = useState('');
  const [valorImagen, setValorImagen] = useState(0)

  //Función flecha para recibir el valor de la última imagen mostrada.
  // const handleImagenMostrada = () =>{
  //   setValorImagen(imagenes[0].valor)
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
          {/* <p>Mensaje del Componente Hijo: {mensaje}</p> */}
          {/* <p>Datos del Componente Hijo variables {recibeDatoDeHijo}</p> */}

          <span>
            <label id='Apuesta' >Cantidad Apostada:</label>

            <label id='Cantidad_apuesta'>{mensaje}</label>
          </span>
          <span>
            Cantidad Apostada
          </span>
          <span>
            Nº Tiradas
          </span>
        </section>
      </header>
      <section className='seccionSlots'>
        <SliderVertical className='slot' imagenes={imagenes} />


      </section>
      <section id='controlesPrincipales' className='seccionSlots'>
        Seccion DONDE VAN LOS CONTROLES PRINCIPALES
        <br />
        <ComponentePruebaProps handleMensajeDeHijo={handleMensajeDeHijo} />
        {/* <ComponentePruebaProps sendData={recibeDatoDeHijo} datodesdeHijo={datodesdeHijo} /> */}
      </section>

    </div>
    // </ShareDataContext.Provider>
  );
}

export default App;
