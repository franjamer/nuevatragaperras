import React, { useState, useEffect, useRef } from "react";
import Imagenes from "./Imagenes";
import { GenerarIndiceAleatorio } from "./utils";
// import ImagenesGrupoLista from "./ImagenesGrupoLista";
import '../Componentes/EstilosComponentes/zonaE.css'
import ImagenesGrupoListaConValores from "./ImagenesGrupoListaConValores";
const ZonaEGrupoSecuenciaAleatoria = ({ iniciarSecuencia }) => {

    const [indices, setIndices] = useState([0, 1, 2]);
    const [intervaloActivo, setIntervaloActivo] = useState(false);
    const [imagenes, setImagenes] = useState([]);

    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const ultimosIndicesRef = useRef([0, 1, 2]);

    const iniciarSecuenciaInternamente = () => {
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
        setIntervaloActivo(true);

        timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                const nuevosIndices = [
                    GenerarIndiceAleatorio(Imagenes.length),
                    GenerarIndiceAleatorio(Imagenes.length),
                    GenerarIndiceAleatorio(Imagenes.length)
                ];
                setIndices(nuevosIndices);
                ultimosIndicesRef.current = nuevosIndices;
            }, 1200);

            setTimeout(() => {
                clearInterval(intervalRef.current);
                setIntervaloActivo(false);

                setImagenes(prevImagenes => {
                    const nuevasImagenes = [
                        Imagenes[ultimosIndicesRef.current[0]],
                        Imagenes[ultimosIndicesRef.current[1]],
                        Imagenes[ultimosIndicesRef.current[2]]
                    ];
                    return [...prevImagenes, nuevasImagenes];
                });

                console.log("Últimas imágenes cargadas: ", ultimosIndicesRef.current.map(i => Imagenes[i].nombre));
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

    const objetosActuales = indices.map(indice => Imagenes[indice]);

    return (
        <div className="zonaE-contenedor">
            <h1>ZonaE</h1>
            <div className="imagenes-fila">

            
            {objetosActuales.map((objeto, index) => (
                <div className="contenedor-imagenes" key={index}>
                    <p>{objeto.nombre}</p>
                    <p>Valor:{objeto.valor}</p>
                    <img 
                        src={objeto.src}
                        alt={objeto.nombre}
                        width={200}
                        height={200}
                    />
                </div>
            
            ))}
            </div>
            <div className="boton-fila">
                <button onClick={iniciarSecuenciaInternamente} disabled={intervaloActivo}>Iniciar Secuencia</button>
            {intervaloActivo && <p>Intervalo activo</p>}
            </div>
            
            <div className="imagenes-grupo-fila">
                <ImagenesGrupoListaConValores imagenes={imagenes} />
            </div>
        
        </div>
    );
};

export default ZonaEGrupoSecuenciaAleatoria;
