import React from "react"

const ComponenteA=({sumaClicks,setSumaClicks})=>{
 /* Las props propias del componente hijo, 
    se declaran en el componente hijo.
    Las props del componente padre, se ponen en 
    declaración del componente hijo.
 */
    function handleClick(){
        setSumaClicks(sumaClicks+1)
    }
   
    // console.log( sumaClicks)
    return(
    <>
        <button onClick={handleClick}>sumaclicks</button>
        
    </>
        
    )
}
export default ComponenteA;