
import React, { useState, useEffect, useRef } from "react";
import Imagenes from "./Imagenes";
import { GenerarIndiceAleatorio } from "./utils";
import ImagenesLista from "./ImagenesLista";
import '../Componentes/EstilosComponentes/zonaE.css'
const ZonaESecuenciaAleatoriaDeImagenes = ({ iniciarSecuencia }) => {
    const [indice, setIndice] = useState(0);
    const [intervaloActivo, setIntervaloActivo] = useState(false);
    const [imagenes, setImagenes] = useState([]);

    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const ultimoIndiceRef = useRef(0); // Referencia para almacenar el último índice

    const iniciarSecuenciaInternamente = () => {
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
        setIntervaloActivo(true);

        timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                const nuevoIndice = GenerarIndiceAleatorio(Imagenes.length);
                setIndice(nuevoIndice);
                ultimoIndiceRef.current = nuevoIndice; // Actualiza el último índice
            }, 1200);

            setTimeout(() => {
                clearInterval(intervalRef.current);
                setIntervaloActivo(false);

                setImagenes(prevImagenes => {
                    const nuevasImagenes = [...prevImagenes, Imagenes[ultimoIndiceRef.current]];
                    return nuevasImagenes;
                });

                console.log("La última imagen cargada es " + Imagenes[ultimoIndiceRef.current].nombre);
            }, 10000);
        }, 0);
    };

    useEffect(() => {
        if (iniciarSecuencia) {
            iniciarSecuenciaInternamente();
        }
    }, [iniciarSecuencia]);

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
            setIntervaloActivo(false);
        };
    }, []);

    const objetoActual = Imagenes[indice];

    return (
        <div className="">
            <h1>ZonaE</h1>
            <p>{objetoActual.nombre}</p>
            <img
                src={objetoActual.src}
                alt={objetoActual.nombre}
                width={200}
                height={200}
            />
            <button onClick={iniciarSecuenciaInternamente} disabled={intervaloActivo}>Iniciar Secuencia</button>
            {intervaloActivo && <p>Intervalo activo</p>}
            <ImagenesLista imagenes={imagenes} />
        </div>
    );
};

export default ZonaESecuenciaAleatoriaDeImagenes;

