import React from 'react';
import './estilos/App.css';
import BotoneraForm from './Componentes/BotoneraCentro'
//Comienza la funcion principal de entrada a la aplicación
function App(props) {

  return (
    <>         
      <section className='contadores'>
       <BotoneraForm />
      </section>
    </>
  );
}

export default App;
