// import React, { useState } from "react";
// import imagenes from "./assets/img/imagenes";
// import Contadores from "./Contadores.jsx";
import SliderVertical from './SliderVertical.jsx';
export default function Slot({ imagenes }) {


    return (
        <>
            {/* <Contadores
                className='slot'
                valor={'Este valor es una string'}
            /> */}

            <SliderVertical className='slot'/>
            <SliderVertical className='Slot'/>
            <SliderVertical className='Slot'/>
        </>
    );
}
