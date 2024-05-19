import TitleIntro from "../../atoms/Texts/TextIntro"
import style from "./DisplayCards.module.css"
import data from "../../../data/BD";
import TextCards from "../../atoms/Texts/TextCards";

function DisplayCards() {
    return (
        <>
        <div id={style.text_entrance}>
        <TitleIntro val={"Te ayudamos cuando quieras"}></TitleIntro>
        </div>
        <div id={style.box_cards}> 
            {
                data.products.map(product =>{
                    return (
                        <>
                        <div id={style.cards}>
                        <TextCards text={product.text}></TextCards>
                    <img src={product.image} id={style.img_cards}></img>
                       
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
export default DisplayCards;