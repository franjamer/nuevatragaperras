import React from 'react';
import ZonaA from './ZonaA';
import ZonaB from './ZonaB';
import ZonaC from './ZonaC';
// import ZonaD from './ZonaD';
// import ZonaE from './ZonaE';
import '../Componentes/EstilosComponentes/zonaCero.css';
// import ZonaFCambiarImagen from './zonaF';

const ZonaCero = () => {
 
    return (
        <div className='zonaCero-div'>
            <ZonaA />            
            <ZonaB />            
            <ZonaC />    
            {/* <ZonaFCambiarImagen /> */}
            {/* <ZonaD /> */}
       
        </div>

    )
}

export default ZonaCero