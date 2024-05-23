import React from 'react';

function UltimasImagenes({ imagenes }) {
  return (
    <div className="ultimas-imagenes">
      <h2>Últimas Imágenes</h2>
      {imagenes.map((imagen, index) => (
        <div key={index}>
          {imagen}
        </div>
      ))}
    </div>
  );
}

export default UltimasImagenes;