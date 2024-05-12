/**componente Contenedor de tres componentes iguales(SliderVertical) que tienen que funcionar de dos modos 
diferentes: 
--Conjuntamente: cuando se le dé al botón iniciar jugada 
--Individualmente: Cuando se le de al botón de cada uno de los componentes, según 
se pueda dependiendo del "bonus track"

"bonus track": Posibilidad según la combinación, que se tiene de avanzar algun slider
vertical, un número limitado de veces.
*/

import SliderVertical from '../Componentes/SliderVertical';
function Slot() {

    return (
        <>
            <SliderVertical className='slot' />
            <SliderVertical className='Slot' />
            <SliderVertical className='Slot' />
            
        </>

    );
}
export default Slot