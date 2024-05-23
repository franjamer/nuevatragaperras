import React, { useState, useEffect } from "react";
import Imagenes from "./Imagenes";
const ZonaFCambiarImagen = () => {
    const [indice, setIndice] = useState(0)
    const imagenActualSrc = Imagenes[indice].src
    const imagenActualNombre = Imagenes[indice].nombre        
    const [src, setSrc] = useState(imagenActualSrc);
    const [nombreImagen,setNombreImagen]= useState(imagenActualNombre)
    const [imagenCargada, setImagenCargada] = useState(false);
    const [cuentaImagenesCargadas,setCuentaImagenesCargadas]=useState(0)
    const cambiarImagen = () => {        
        setSrc(imagenActualSrc)
        setNombreImagen(imagenActualNombre)
    };
   
    useEffect(() => {
        setImagenCargada(false); // Resetear el estado antes de cambiar la imagen
    }, [src]);
    
    const handleImageLoad = () => {
        console.log("Imagen cargada");
        console.log({imagenActualNombre})
        
            
            if (indice >= Imagenes.length-1 ) {
                setIndice(0)                
            }
            else {
                setIndice(indice + 1)
                setCuentaImagenesCargadas(cuentaImagenesCargadas+1)
            }
            if ((cuentaImagenesCargadas%Imagenes.length)===0){
                console.log("la ultima imagen cargada es "+ imagenActualNombre )
            }
        console.log((cuentaImagenesCargadas%Imagenes.length)+1)
        setImagenCargada(true);
    };

    function handleCuentaACero(){
        setCuentaImagenesCargadas(0)
    }

    return (
        <div>
            <img
                src={src}
                alt={imagenActualNombre}
                onLoad={handleImageLoad}
                width={300}
                height={300}
            />
            <p>La imagen se llama {nombreImagen}</p>
            {imagenCargada && <p>La imagen se ha cargado.</p>}
            <button onClick={cambiarImagen}>Cambiar Imagen</button>
            <button onClick={handleCuentaACero}>Cero</button>
        </div>
    );
};

export default ZonaFCambiarImagen;
