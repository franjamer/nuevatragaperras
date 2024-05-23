// import React from 'react';
import Imagenes from './Imagenes'// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const MostrarDatos = () => {

  return (
    <div className='zonaD-mostrarDatos'>
      <h3>Lista de Datos</h3>
      <ul>
        {Imagenes.map((elemento) => (
          <li className='zonaD-li' key={elemento.id}>
            <hr />
            
            <br />
            <h4> Nombre:</h4> 
            <p>{elemento.nombre}</p>
            <br />
            <h4>Imagen:</h4> 
            <p><img src={elemento.src} alt={elemento.nombre} style={{maxWidth: '50px', maxHeight: '50px'}} /></p>
            
            <br />
            <h4> Valor:</h4>
            <p>{elemento.valor}</p>
          </li>
        ))}
      </ul>
    </div>



  );
};

export default MostrarDatos;