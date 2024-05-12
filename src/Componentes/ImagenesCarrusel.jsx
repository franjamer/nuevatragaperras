import React, { useState, useEffect } from 'react';
// import imagenes from '../assets/img/imagenes'
import Imagenes from './Imagenes';
//funcion principal para mostrar las imágenes del componente carrusel
function ImagenesCarrusel() {
    //hooks creados para manejo del componente carrusel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [displayedImage, setDisplayedImage] = useState(null);
    const [isBarridoActive, setIsBarridoActive] = useState(false);
    const [ValorPartida, setValorPartida] = useState(0);
    const tMuestra = 1000; // Tiempo de muestra en milisegundos

    useEffect(() => {
        if (isBarridoActive) {
            const barridoInterval = setInterval(() => {
                if (currentImageIndex < Imagenes.length) {
                    setDisplayedImage(Imagenes[currentImageIndex]);
                    setCurrentImageIndex(currentImageIndex + 1);
                } else {
                    setIsBarridoActive(false);
                }
            }, tMuestra);

            return () => clearInterval(barridoInterval);
        }
    }, [isBarridoActive, currentImageIndex]);

    const handleBarridoClick = () => {
        setIsBarridoActive(true);
        setCurrentImageIndex(0);
    };

    const handleSumarValor = () => {
        if (displayedImage) {
            setValorPartida(ValorPartida + displayedImage.valor);
        }
    };

    return (
        <div>
            <h1>Barrido Aleatorio de Imágenes</h1>
            <div>
                <button onClick={handleBarridoClick} disabled={isBarridoActive}>
                    Iniciar Barrido
                </button>
                <button onClick={handleSumarValor} disabled={!isBarridoActive || currentImageIndex !== Imagenes.length}>
                    Sumar Valor de Última Imagen
                </button>
            </div>
            {isBarridoActive ? (
                <p>Realizando el barrido...</p>
            ) : (
                <div>
                    {displayedImage && (
                        <div>
                            <img src={displayedImage.src} alt={displayedImage.nombre} />
                            <p>Nombre: {displayedImage.nombre}</p>
                            <p>Valor: {displayedImage.valor}</p>
                        </div>
                    )}
                    <p>Valor de la Partida: {ValorPartida}</p>
                </div>
            )}
        </div>
    );
}

export default ImagenesCarrusel;
