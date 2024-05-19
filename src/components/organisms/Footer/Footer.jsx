import style from './Footer.module.css'
import DisplayListFooter from '../../molecules/DisplayListFooter/DisplayListFooter'
function Footer() {
    return(
        <>
        <footer id={style.footer_list}>
            <DisplayListFooter></DisplayListFooter>
        </footer>
        </>
    )

}
export default Footer