// import logo from './logo.svg';
import React from 'react';
// import { ReactDOM } from 'react-dom/client';
import './App.css';
import Slot from './Slot';
import imagenes from './assets/img/imagenes';

function App() {

 
  return (
    <div className="App">
      <header >
        <h1>
          Juego de Tragaperras
        </h1>
        <section className='seccionCabecera'>
          <span>
            Bote 
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
        <Slot className='slot' imagenes={imagenes}/>
        {/* <Slot className='slot' imagenes ={imagenes}/> */}
      
        
        {/* <p className='slot'>
          SLOT 2 
          <button>
            lanzar 2
          </button>
        </p>
        <p className='slot'>
          SLOT 3 
          <button>
            lanzar 3
          </button>
        </p> */}
      </section>
    </div>
  );
}

export default App;
