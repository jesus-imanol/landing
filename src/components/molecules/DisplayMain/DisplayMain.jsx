import style from "./DisplayMain.module.css"
import TitleIntro from "../../atoms/Texts/TextIntro";
import AvatarText from "../../atoms/ImageMain/AvatarText";
import IconAvatar from "../../atoms/ImageMain/IconAvatar";
import TextCardMain from "../../atoms/Texts/TextCardMain";
function DisplayMain() {
    return (
        <>
        <div id={style.box_main}>
            <div id={style.container_card}>
                <TextCardMain val={"Conocénos!"} title={"Brazil, Rio de Janeiro" } text={"Disfruta nuestra cultura"}></TextCardMain>
            </div>
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