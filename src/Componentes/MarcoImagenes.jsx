import ImagenSlot from "./ImagenSlot"
import imagenes from "../Componentes/Imagenes"
import '../estilos/marcoImagenes.css'
import IndiceImagen from "./CorreImagen"
import { useState } from "react"
// import marcoimagenes from "../estilos/marcoimagenes.css"
export default function MarcoImagenes(props) {
    const [NumeroImagen,setNumeroImagen]= useState(0)
    setNumeroImagen(NumeroImagen+1)

    return (
        <span classname = "marcoimagenes">
            <ImagenSlot  
            rutaImagen={imagenes[NumeroImagen].src} 
            alt="imagen de prueba"
            descImg={imagenes[0].nombre}
            numeroImagen={imagenes[0].valor}
            />       
            <ImagenSlot 
            rutaImagen={imagenes[0].src} 
            alt="imagen de prueba" 
            descImg={imagenes[0].nombre}
            numeroImagen={imagenes[0].valor}
            />       
            <IndiceImagen/>
        </span>
    )
}