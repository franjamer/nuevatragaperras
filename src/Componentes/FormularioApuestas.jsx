// import { useState } from "react";

const FormularioApuesta = ({ setBote, setNumApuestas }) => {


    // Funcion para enviar la cantidad añadida al bote a la cabecera.
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const apuesta = parseFloat(formJson.apuesta);
        setBote(isNaN(apuesta) ? 0 : apuesta)
        setNumApuestas(0)
    }

    return (
        <form className="formulario-Apstar" method="post" onSubmit={handleSubmit}>
            <label>
                Cantidad Cargada:
            </label>
            <input className="furmulario-apostar-input" name="apuesta" defaultValue={0} />
            <button type="submit">Cargar Bote</button>
        </form>
    );
};

export default FormularioApuesta;



