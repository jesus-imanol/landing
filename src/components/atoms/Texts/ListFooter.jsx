import style from './ListFooter.module.css'
function ListFooter(props) {
    return( 
        <>
        <a href="#"><p id={style.list}>{props.val}</p></a>
        </>
    )
}
export default ListFooter