import React from 'react';

const ImagenesGrupoListaConValores = ({ imagenes }) => {
    const calcularSumaValores = (grupo) => {
        return grupo.reduce((suma, imagen) => suma + imagen.valor, 0);
    };

    return (
        <div>
            <h2>Secuencias de Imágenes</h2>
            {imagenes.length > 0 && (
                <div className='contenedor-grupo-ultimas-imagenes'>
                    {imagenes.map((grupo, index) => (
                        <div className='grupo-ultimas-imagenes' key={index}>
                            <div className='grupo-ultimas-imagenes-cabecera'>
                                <h3>Grupo {index + 1}</h3>
                                <h4>Suma de valores: {calcularSumaValores(grupo)}</h4>
                            </div>
                            <div className='solo-ultimas-imagenes'>
                                 {grupo.map((imagen, idx) => (
                                <div key={idx}>
                                    <p>{imagen.nombre}</p>
                                    <p>Valor: {imagen.valor}</p>
                                    <img src={imagen.src} alt={imagen.nombre} width={100} height={100} />
                                </div>
                            ))}
                            </div>
                           
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImagenesGrupoListaConValores;
