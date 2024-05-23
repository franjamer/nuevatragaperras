import React from "react"

const ComponenteB=({setSumaClicks,setAutoContador})=>{
        function handleResetea(){
            setSumaClicks(0)
            setAutoContador(0)
        }
    
        return (
            <button onClick={handleResetea}>Resetear</button>
        )
    }

export default ComponenteB;