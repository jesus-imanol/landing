import style from './TextCardMain.module.css'
function TextCardMain(props) {
    return ( <>
    <h5 id={style.up_text}>{props.val}</h5>
    <h3 id={style.medium_text}>{props.title}</h3>
    <h4 id={style.lo_text}>{props.text}</h4>
    </> );
}

export default TextCardMain;