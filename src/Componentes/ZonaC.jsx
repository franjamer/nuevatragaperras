import React,{useState} from "react";
import '../Componentes/EstilosComponentes/zonaC.css'
import ZonaESecuenciaAleatoriaDeImagenes from "./ZonaE";
const ZonaC = () => {   
    const [iniciarSecuencia, setIniciarSecuencia] = useState(false);
    const iniciarSecuenciaEnZonaE = () => {
        // Lógica para iniciar la secuencia desde fuera del componente ZonaE
        console.log("Iniciando secuencia desde fuera de ZonaE...");
        setIniciarSecuencia(true); // Toggle para asegurar que el useEffect en ZonaE se dispare
        setTimeout(()=>setIniciarSecuencia(false),100)
    };

    return (
        <>
            <section className='zonaC-section'>
                <h1>Botonera Principal</h1>
                <h2>ZonaC</h2>              
                
                    <h3 className="zonaC-section-h2">Elige Imagenes</h3>
                    <div className="zonaC-marcoEleccionImagenes">
                        
                        {/* <EligeImagen/>
                        <EligeImagen/>
                        <EligeImagen/>  */}
                        {/* <ZonaE iniciarSecuencia={iniciar}/>   
                        <ZonaE iniciarSecuencia={iniciar}/>   */}
                        <ZonaESecuenciaAleatoriaDeImagenes iniciarSecuencia={iniciarSecuencia}/> 
                        <ZonaESecuenciaAleatoriaDeImagenes iniciarSecuencia={iniciarSecuencia}/> 
                        <ZonaESecuenciaAleatoriaDeImagenes iniciarSecuencia={iniciarSecuencia}/> 

                        <button onClick={iniciarSecuenciaEnZonaE} disabled={iniciarSecuencia}>Iniciar Secuencia</button>
                    </div>
                
                
                
            </section>
        </>
    )

}
export default ZonaC;