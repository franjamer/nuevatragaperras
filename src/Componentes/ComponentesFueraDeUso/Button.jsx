/* **************************************
*Componente Con un Boton, que realiza un
* contador sencillo de Clicks
*****************************************/

export default function Button({ contador, onClick }) {



    return (
        <>

            <button onClick={onClick}>
                Hicistes clic
            </button>
            <p>{contador}</p>
        </>

    );
}