import style from "./TextCards.module.css"

function TextCards(props) {
    return (
        <>
        <h6 id={style.text_cards}>{props.text}</h6>
        </>
    )
}
export default TextCards