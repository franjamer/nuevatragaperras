import { useState } from "react";
import imagenes from "./Imagenes";
// import temporiza from "./Temporizador";


function IndiceImagen(props) {
    const [MostrarImagen, setMostrarImagen]=useState(true)
    const [NumImg, setNumImg] = useState(0)
    
    const handleMostrarClick =()=>{
        setMostrarImagen(true);
        setNumImg(NumImg); //Reinicia el indice al principio
    }    
    
    // const handleClicNumImg = () => {
    //     if (NumImg < imagenes.length - 1) {
    //         setNumImg(NumImg + 1)
    //     }
    //     else {
    //         setNumImg(0)
    //     }

    // }
// function lanzamiento() {
//     setInterval(() => {
//         if (numero > 0) {
//             console.log('Lanzamiento en ' + numero + ' segundos');
//             numero--;

//             } else {
//                 numero=10
//                 console.log(numero)
//                 clearInterval(lanzamiento)
//             }

//         if (numero === 10) {
//             clearInterval(lanzamiento)
//             }

//             // clearInterval(lanzamiento)

//         console.log(numero)
//         }, 1000)
//     }
// function handleParar(){
//         console.log(lanzamiento)
//         clearInterval(lanzamiento)
//         numero = 10;
//     }
    return (
        <>
            {/* <button onClick= {handleParar}>Parar Lanzamiento</button>
           
            
            <img
                src={imagenes[NumImg].src}
                alt={imagenes[NumImg].nombre}
                onClick={lanzamiento}
            
            />
            <button
                onClick={handleClicNumImg}
            >
                {imagenes[NumImg].nombre}
            </button>

            <p>
                {imagenes[NumImg].valor}
            </p> */}
            <button onClick={handleMostrarClick} >
                Mostrar
            </button>
            <br/>
            
            
            {MostrarImagen && (
                <img src={imagenes[NumImg].src} alt={`Imagen ${imagenes[NumImg].nombre}`}/>
            )}
            <p>{imagenes[NumImg].nombre}</p>
        </>
    )
}
export default IndiceImagen;