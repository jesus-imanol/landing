import DisplayMain from "../../molecules/DisplayMain/DisplayMain";
import style from "./Section.module.css"
function Section() {
     return (
        <>
        <section id={style.section1}>
            <DisplayMain></DisplayMain>
        </section>
        </>

     )
}
export default Section