import style from './Title.module.css'

function Title(props) {
return (
<>
<h1 id={style.title}>{props.title}</h1>
<h2 id={style.sub_title}>{props.sub_title}</h2>
</>
)
}
export default Title