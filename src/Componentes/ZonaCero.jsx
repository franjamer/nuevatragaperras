import React, {useState} from 'react';
import ZonaA from './ZonaA';
import ZonaB from './ZonaB';
import ZonaC from './ZonaC';
import ZonaEGrupoSecuenciaAleatoria from './zonaEGrupoSecuenciaAleatoria';
// import ZonaD from './ZonaD';
// import ZonaE from './ZonaE';
import '../Componentes/EstilosComponentes/zonaCero.css';
// import ZonaFCambiarImagen from './zonaF';

const ZonaCero = () => {
    const [iniciarSecuencia, setIniciarSecuencia]= useState(false)
    const iniciarSecuenciaEnZonaE = () => {
        console.log("Iniciando secuencia desde fuera de ZonaE...");
        setIniciarSecuencia(true);
        setTimeout(() => setIniciarSecuencia(false), 100); // Reset the state after initiating
    };
    

    return (
        <div className='zonaCero-div'>
            <ZonaA />            
            <ZonaB />            
            {/* <ZonaC />   */}
            <ZonaEGrupoSecuenciaAleatoria iniciarSecuencia={iniciarSecuencia}/>  
            <button onClick={iniciarSecuenciaEnZonaE} disabled={iniciarSecuencia}>Iniciar Secuencia</button>
            {/* <ZonaFCambiarImagen /> */}
            {/* <ZonaD /> */}
       
        </div>

    )
}

export default ZonaCero