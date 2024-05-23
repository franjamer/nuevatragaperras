import React, { useState } from "react";
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";
// import { useState } from "react";

function ComponentePadre(){
    /*Uso de props en componentes:
    En el componente padre se pone:
    -- El componente hijo, con sus props.
    -- Las props del componente hijo, tiene que estar declaradas 
        en el componente padre.
    -- Las variables del componente padre se declaran en el componente padre, 
    y se añaden como props en el componente hijo que tenga que utilizarlas. Es
    como importarlas, desde el componente padre, que es donde esta definida, y 
    hacia el componente hijo,como props, que es donde las utiliza. 
    
    */
    const [sumaClicks,setSumaClicks]=useState(0)
   
    return (
        <>
        <h1>Componente Padre</h1>
       
        

        
        <ComponenteA sumaClicks={sumaClicks} setSumaClicks={setSumaClicks} />
        <ComponenteB setSumaClicks={setSumaClicks}/>
        <p>datoHijo: {sumaClicks}</p>

        </>
    )
}
export default ComponentePadre