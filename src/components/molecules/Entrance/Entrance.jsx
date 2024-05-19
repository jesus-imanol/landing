import ImageMain from "../../atoms/ImageMain/ImageMain";
import Title from "../../atoms/Texts/Title";
import style from "./Entrance.module.css"
function Entrance() {
    return (
        <>
        <div id={style.info_left}>
        <ImageMain></ImageMain>
        </div>
        <div id={style.info_right}>
        <Title></Title> 
        </div>
        </>
        
    )
}
export default Entrance