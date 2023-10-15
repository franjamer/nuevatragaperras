// import React, { useState } from "react";
// import imagenes from "./assets/img/imagenes";
// import Contadores from "./Contadores.jsx";
// import { useContext } from 'react';
// import { ShareDataContext } from '../Componentes/SliderVertical';
import SliderVertical from '../Componentes/SliderVertical';
export default function Slot({ imagenes }) {
    // const {valorImg, setValorImg}=useContext(ShareDataContext)
    return (
        <>
        {/* // <ShareDataContext.Provider> */}
            {/* <Contadores
                className='slot'
                valor={'Este valor es una string'}
            /> */}

            <SliderVertical className='slot' />
            <SliderVertical className='Slot' />
            <SliderVertical className='Slot' />
            {/* // </ShareDataContext.Provider> */}
       </> 
       
    );
}
