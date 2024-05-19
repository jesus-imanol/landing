import style from './IconAvatar.module.css'
import image from '../images/avatar.png'

function IconAvatar() {
    return (
        <>
        <img src={image} id={style.img_avatar} alt="Avatar" />
        </>
    )
}
export default IconAvatar