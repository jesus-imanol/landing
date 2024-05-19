import style from './AvatarText.module.css'

function AvatarText(props) {
    return (
        <>
       <a href="https://www.instagram.com/chuysscc/"> <h3 id={style.text_avatar}>{props.text}</h3></a>
        </>
    )
}
export default AvatarText