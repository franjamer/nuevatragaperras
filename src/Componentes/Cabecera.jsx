/* ***************************************
*Componente Cabecera que contiene
* los elementos que van en la cabecera
* de la pagina principal de la aplicacion
******************************************/

const Cabecera=({bote})=>{

return (
    <section className="cabecera">
        <label>Bote: </label>
        <input type="text" placeholder="Cantidad en el Bote" value={bote}  />
    
    </section>
)
}

export default Cabecera;