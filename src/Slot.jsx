// import React, { useState } from "react";
// import imagenes from "./assets/img/imagenes";
import Contadores from "./Contadores.jsx";
import SliderVertical from "./SliderVertical";
export default function Slot({ imagenes }) {
    

    return (
        <>
            <Contadores className='slot'/>
            {/* Parte de slider */}
            <SliderVertical className='slot' />
        </>
    );
}
