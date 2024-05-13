/* ***************************************
* Componente de tres botones para sumar, 
* restar y poner a cero de forma manual.
* FUNCIONA CORRECTAMENTE.
* De monmento FUERA DE USO.
******************************************/


import { React, useState } from "react";
const Contador = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const resetear = () => {
        setContador(0)
    }

    return (
        <section>
            <div>
                <h3>
                    Contador de Clicks
                </h3>
                <h4>
                    {contador}
                </h4>
                <button onClick={sumar}>Sumar</button>
                <button onClick={restar}>Restar</button>
                <button onClick={resetear}>Resetear</button>
            </div>
        </section>)
}
export default Contador;