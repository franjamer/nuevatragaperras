import React from "react";
// import Imagenes from "./Imagenes";
function Cambiador() {
    function handleClickCambiador() {
        alert('He cambiado la imagen');
    }
    return (
        <Cambiador onClick={handleClickCambiador}>
            Cambia la Imagen
        </Cambiador>
    )
}
export default Cambiador;