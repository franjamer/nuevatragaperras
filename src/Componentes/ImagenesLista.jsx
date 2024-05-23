import React from 'react';

const ImagenesLista = ({ imagenes }) => {
    return (
        <div>
            <h2>Secuencias de Imágenes</h2>
            {imagenes.length > 0 && (
                <div>
                    {imagenes.reduce((acc, img, index) => {
                        const groupIndex = Math.floor(index / 3);
                        if (!acc[groupIndex]) {
                            acc[groupIndex] = [];
                        }
                        acc[groupIndex].push(img);
                        return acc;
                    }, []).map((group, index) => (
                        <div className='contenedorGrupos' key={index} >
                            <h3 className='h3-contenedor-Grupos'>Grupo {index + 1}</h3>
                            {group.map((imagen, idx) => (
                                <div className='grupoImagenes' key={idx}>
                                    <p>{imagen.nombre}</p>
                                    <img src={imagen.src} alt={imagen.nombre} width={100} height={100} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImagenesLista;
