import React from 'react'
import ContadorAutomatico from './ContadorAutomatico';
import ContadorManual from './ContadorManual';

const ContadorSencillo = () => {
    return (
        <div>
            <ContadorManual/>
            <hr />
           <ContadorAutomatico/>            
        </div>
    )
}
export default ContadorSencillo


