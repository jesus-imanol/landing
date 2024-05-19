import style from './ImageMain.module.css'
import imageHeader from '../images/icon_header.jpg'
function ImageMain() {
    return (
        <>
        <img src={imageHeader} alt='Imagen principal' id={style.icon_main}></img>
        </>
    )
}
export default ImageMain