/* ******************************************
*Componente que Muestra un mensaje despues
* de que pasa un tiempo desde que se hace 
* click. Se utiliza varios hooks y setTimeOut
*********************************************/


import { useState, useEffect, useRef } from 'react';
// import './App.css'

const Warning = () => {
    const [showWarning, setShowWarning] = useState(false);
    const timerId = useRef(null);

    useEffect(() => {
        if (showWarning) {

            //Creating a timeout
            timerId.current = setTimeout(() => {
                setShowWarning(false);



            }, 5000);
        }

        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
    }, [showWarning]);

    function handleClick() {
        setShowWarning(true);
    }
    function handleClickParar() {
        setShowWarning(false);
    }
    console.log(showWarning)
    return (
        <div className='warn'>
            {showWarning && <div className='warningMsg'>
                This is a Warning ⚠️!</div>}
            <button className='btn' onClick={handleClick}>
                Show Warning
            </button>
            <button onClick={handleClickParar}>parar</button>
            <p>Pruebas</p>
        </div>
    );
}
export default Warning;