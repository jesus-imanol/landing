import style from "./SectionCategories.module.css"
import DisplayCategories from "../../molecules/DisplayCategories/DisplayCategories"
function SectionCategories() {
    return(
        <section id={style.categories}>
            <DisplayCategories></DisplayCategories>
        </section>
            
    )
}
export default SectionCategories