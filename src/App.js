import React from 'react';
import './estilos/App.css';
// import Button from './Componentes/Button';
// import MarcoImagenes from './Componentes/MarcoImagenes';
import Warning from './Componentes/WarningTiempo';
import AutoContador from './Componentes/AutoContador';
// import IndiceImagen from './Componentes/CorreImagen';

//Comienza la funcion principal de entrada a la aplicación
function App() {
  // const [contadorApp, setContadorApp] = useState(0)

  // function handleClickContadorSuma() {
  //   setContadorApp(contadorApp + 1);
  // }

  // function handleClickContadorResta() {
  //   setContadorApp(contadorApp - 1);
  // }

  return (
    <>
      <header>
        <h1>Contadores de Clics</h1>
      </header>
      
      <section className='contadores'>
      <Warning />
      </section>
     
      <section className='contadores'>
        
        <AutoContador />
      </section>
      
    </>
  );
}

export default App;
