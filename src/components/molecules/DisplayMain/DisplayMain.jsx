import Video from "../../atoms/ImageMain/Image";
import style from "./DisplayMain.module.css"
import TitleIntro from "../../atoms/Texts/TextIntro";
import AvatarText from "../../atoms/ImageMain/AvatarText";
import IconAvatar from "../../atoms/ImageMain/IconAvatar";
function DisplayMain() {
    return (
        <>
        <div id={style.video_container}>
        <Video></Video>
        </div>
        <div id={style.text_intro} >
            <TitleIntro val={"La mejor forma de que nos visites..."} ></TitleIntro>
            <div id={style.box_avatar}>
                <AvatarText text={"Hola, soy Jesús, ¿Necesitas ayuda?"}></AvatarText>
                <IconAvatar></IconAvatar>
            </div>
        </div>
        </>
    )    
}
export default DisplayMain