import style from "./TextCategories.module.css"

function TextCategories(props) {
    return(

        <>
        <h6 id={style.text_categories}>{props.text}</h6>
        </>
    )
}
export default TextCategories