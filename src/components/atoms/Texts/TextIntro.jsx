import style from "./Title.module.css"
function TitleIntro (props) {
    return (
        <>
        <p id={style.paragraph_intro}>
            {props.val}
</p>
        </>
    )
}
export default TitleIntro