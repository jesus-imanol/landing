import TextCategories from "../../atoms/Texts/TextCategories"
import style from './DisplayCategories.module.css'
import categories from "../../../data/BDCategories"
import TitleIntro from "../../atoms/Texts/TextIntro"
function DisplayCategories() {
    return (
        <>
        <div id={style.text_entrance}>
        <TitleIntro val={"Aqui es donde quieres estar..."}></TitleIntro>
        </div>
        <div id={style.box_categories}> 
        
            {
                categories.products.map(product =>{
                    return (
                        <>
                        <div id={style.cards}>
                        <img src={product.image} id={style.img_cards}></img>
                        <TextCategories text={product.text}></TextCategories>         
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