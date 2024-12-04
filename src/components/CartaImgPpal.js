import imagenPlato1 from '../assets/images/plato1-carta.jpg'
import imagenPlato2 from '../assets/images/plato2-carta.jpg'
import imagenPlato3 from '../assets/images/plato3-carta.jpg'

function ImagenesCarta(params) {
    return(
        <div className='d-flex justify-content-around align-items-center px-5 imagenes-carta'>
            <img src={imagenPlato1}></img>
            <img src={imagenPlato2}></img>
            <img src={imagenPlato3}></img>
        </div>
    )
    
}
export default ImagenesCarta;