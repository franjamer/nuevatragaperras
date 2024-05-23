import React from "react";

const BotonComponenteHijo=({datosHijo,datoHijo,setDatosHijo})=>{
    function handleClickPasarDatos(){
        setDatosHijo(datoHijo=(datosHijo + 1))
        console.log(datoHijo)
    }
    return(
        <div>
        <label htmlFor="datosHijo">Datos En Componente Hijo:{datosHijo} </label>
        <button onClick={handleClickPasarDatos}>PasarDatos</button>
       </div>
    )
}
export default BotonComponenteHijo;