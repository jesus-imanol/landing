import style from './Image.module.css'
import image from '../images/img_entrance.png'
function Image() {
    return (
        <>
        <img src={image} id={style.image_entrance} alt="" />
        </>
    )
  }
  
  export default Image;