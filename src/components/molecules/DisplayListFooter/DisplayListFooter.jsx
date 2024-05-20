import style from './DisplayListFooter.module.css'
import data from '../../../data/BD'
import ListFooter from '../../atoms/Texts/ListFooter'

function DisplayListFooter() {
    return(
        
        <>
        <div id={style.box_list}>
            {
                data.texts.map( texts_obj=> {
                    return (
                        <>
                        <div id={style.lists}>
                        <ListFooter val={texts_obj.text}></ListFooter>
                        </div>
                        </>
                    )

                } )
            }
        </div>
        </>
    )
}
export default DisplayListFooter