import TextCategories from "../../atoms/Texts/TextCategories"
import style from './DisplayCategories.module.css'
import TitleIntro from "../../atoms/Texts/TextIntro"
import data from "../../../data/BD"
function DisplayCategories() {
    return (
        <>
        <div id={style.text_entrance}>
        <TitleIntro val={"Aqui es donde quieres estar..."}></TitleIntro>
        </div>
        <div id={style.box_categories}> 
        
            {
                data.categories.map(categorie =>{
                    return (
                        <>
                        <div id={style.cards}>
                        <img src={categorie.image} id={style.img_cards}></img>
                        <TextCategories text={categorie.text}></TextCategories>         
                </div>
                      </>
                    )
                }   
                )
            }
        </div>
        </>

    )
}
export default DisplayCategories