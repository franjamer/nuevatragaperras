// import { useState } from "react";

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