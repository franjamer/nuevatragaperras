/* ***************************************
*Componente Cabecera que contiene
* los elementos que van en la cabecera
* de la pagina principal de la aplicacion
******************************************/
import React, {useState} from 'react';
import '../estilos/Cabecera.css'
// import FormularioApuesta from './FormularioApuestas'
const Cabecera = () => {
    const [bote, setBote] = useState(0);
    const [numApuestas, setNumApuestas] = useState(0);

    console.log(bote)
    const valorUnitarioApuestas = 2
    setNumApuestas(
     bote / valorUnitarioApuestas
    )
    return (
        <section className="cabecera">
            <label htmlFor='cantidadBote'>Ultima Cantidad Recargada del Bote: </label>
            <input id='cantidadBote' type="number" placeholder="Cantidad en el Bote" value={bote}  readOnly />Euros
            <hr />
            <label htmlFor="cantidadApuesta">Número de Tiradas desde Ultima Recarga del Bote:</label>
            <input id='cantidadApuesta' type="number" placeholder="Cantidad en el Bote" value={numApuestas} readOnly />

            <hr />
            <h3>€uro por Tirada: {valorUnitarioApuestas} </h3>
            <hr />
            <h3>Bote Actual</h3>
            <hr />
            <h3>Tiradas Restantes</h3>
            {/* <FormularioApuesta setBote={setBote} setNumApuestas={setNumApuestas}/> */}

        </section>
    )
}

export default Cabecera;