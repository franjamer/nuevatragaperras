import '../estilos/imagenSlot.css'
import IndiceImagen from './CorreImagen'
export default function ImagenSlot(props) {

    return (
        <span>
            <h4>La imagen siguiente muestra</h4>
            {/* <img 
                className='imagenslot' 
                src={(`${props.rutaImagen}`)}
                alt={props.descImg}

            /> */}
            {/* <button onClick=
                 {(`${props.numeroImagen}`)}>
            </button> */}
            <IndiceImagen/>
        </span>
    )
}