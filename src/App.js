import React from 'react';
import './estilos/App.css';
import Slot from './Componentes/Slot';
import imagenes from './assets/img/imagenes';
import { ShareDataContext } from './Componentes/SliderVertical';
import { useState } from 'react';
//Comienza la funcion principal de entrada a la aplicación
function App() {
  const [data, setData] = useState(null)
  return (
    <ShareDataContext.Provider value={{ data, setData }}>
      <div className="App">
        <header >
          <h1>
            Juego de Tragaperras
          </h1>
          <section className='seccionCabecera'>
            <span>
              <label id='Apuesta' >Cantidad Apostada</label>
              <input type='text' readOnly />
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
          <Slot className='slot' imagenes={imagenes} />


        </section>
        <section id='controlesPrincipales' className='seccionSlots'>
          Seccion DONDE VAN LOS CONTROLES PRINCIPALES
          <br />

        </section>

      </div>
    </ShareDataContext.Provider>
  );
}

export default App;
