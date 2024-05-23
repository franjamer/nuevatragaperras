import React from "react";
import '../Componentes/EstilosComponentes/zonaD.css';
import MostrarDatos from "./MostrarDatos";
const ZonaD=()=>{

    return (
        <>
        <div className="zonaD-div" >
        <h1>Tabla de Premios</h1>
        <h2>ZonaD</h2>
        <MostrarDatos />
        </div>        
        </>
        
    )
}
export default ZonaD;