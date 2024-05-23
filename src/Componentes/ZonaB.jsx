import React, {useState} from "react";
import '../Componentes/EstilosComponentes/zonaB.css'
const ZonaB=()=>{
    const arrayNumeros = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]
    const [numMasTres , setNumMasTres]=useState(arrayNumeros)
    const resultadoNumerosMasTres = numMasTres.map(elemento => elemento+3)
    function handleClickSumarTres(){
        setNumMasTres(resultadoNumerosMasTres)
    }
    
    return (
        <>
        <div className="zonaB-div">
        <h1>Slots</h1>
        <h2>ZonaB: Manejo de arrays con map</h2>
        <p>{numMasTres}</p>
        <button onClick={handleClickSumarTres}>SumarTres</button>
        </div>
        
        </>
        
    )
}
export default ZonaB;