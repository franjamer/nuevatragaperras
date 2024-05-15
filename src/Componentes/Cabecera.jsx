/* ***************************************
*Componente Cabecera que contiene
* los elementos que van en la cabecera
* de la pagina principal de la aplicacion
******************************************/
import '../estilos/Cabecera.css'
const Cabecera = ({ bote, NumApuestas  }) => {
    const valorUnitarioApuestas = 2
    NumApuestas= bote/valorUnitarioApuestas

    return (
        <section className="cabecera">
            <label>Ultima Cantidad Recargada del Bote: </label>
            <input type="number" placeholder="Cantidad en el Bote" value={bote} defaultValue={0} readOnly />Euros
            <hr />
            <label>Número de Tiradas desde Ultima Recarga del Bote:</label>
            <input type="number" placeholder="Cantidad en el Bote" value={NumApuestas} defaultValue={0} readOnly />
         
            <hr/>
            <label>€uro por Tirada: {valorUnitarioApuestas} </label>
            <hr/>
            <label>Bote Actual</label>
            <hr/>
            <label>Tiradas Restantes</label>
        </section>
    )
}

export default Cabecera;