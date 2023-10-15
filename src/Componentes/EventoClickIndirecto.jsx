import React from 'react';
import { funcionExportada } from '../Componentes/ContadorAutomatico';
export function activarEventoOnClickEnComponenteA() {
  console.log("Evento onClick activado en Componente A");
  // Realiza cualquier acción que desees aquí
}

// function ComponenteA() {
//   return (
//     <div>
//       <button onClick={activarEventoOnClickEnComponenteA}>Botón en Componente A</button>
//     </div>
//   );
// }

function EventoClickIndirecto() {
  const activarEventoEnComponenteA = () => {
    activarEventoOnClickEnComponenteA();
  };

  return (
    <div>
      {/* <ComponenteA /> */}
      <button onClick={activarEventoEnComponenteA}>Activar Evento onClick en Componente A</button>
    </div>
  );
}





export default EventoClickIndirecto;

