import React from 'react'
import ContadorAutomatico from './ContadorAutomatico';
import ContadorManual from './ContadorManual';
//Comienzo de funcion principal de este componente.
/* Este componente importa dos componentes hijos, uno de incremento y decremento manual
y otro de inicio manual y parada automática.*/
const ContadorSencillo = () => {
    return (
        <div>
            <ContadorManual />
            <hr />
            <ContadorAutomatico />
        </div>
    )
}
export default ContadorSencillo


