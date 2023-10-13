// import React, { useState } from "react";
// import imagenes from "./assets/img/imagenes";
import Contadores from "./Contadores";
import SliderVertical from "./SliderVertical";
export default function Slot({ imagenes }) {
    

    return (
        <>
            <Contadores className='slot' tiempo={1000} cancelador={"timeoutId"} ></Contadores>
            {/* Parte de slider */}
            <SliderVertical className='slot' />
        </>
    );
}
