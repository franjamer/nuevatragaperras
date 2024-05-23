import React,{useState} from "react";
import '../Componentes/EstilosComponentes/zonaA.css'
const ZonaA = ({cargaEfectivoExterior}) => {
    
    const [cargaEfectivo, setCargaEfectivo] = useState(0)
    function handleClick(){
        setCargaEfectivo(cargaEfectivo+1)
    }
     cargaEfectivoExterior =()=>{
        return setCargaEfectivo(cargaEfectivo+1)
    }
    
    //funcion de gestion del boton submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(e.target.value)
        console.log(cargaEfectivo)
    }
    const handleChange=()=>{
        return(
        (e) => setCargaEfectivo(e.target.value))
    }

    return (
        <div className="zonaA-div" >
            <section>
                <h1>Cabecera</h1> 
                <h2>ZonaA</h2>

            </section>
            <section>
                
                <form method="post" onSubmit={handleSubmit} >
                <label htmlFor='cantidadCargada'>
                    Cantidad Cargada:{cargaEfectivo}
                </label>
                <input id="cantidadCargada" onChange={handleChange}  defaultValue={cargaEfectivo}></input>
                <button type='submit'  >Enviar</button>
                <button onClick={handleClick}>CargarEfectivo</button>
            </form>
            </section>
            
        </div>
    )
}
export default ZonaA;
