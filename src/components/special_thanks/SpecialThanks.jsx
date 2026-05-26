import "./SpecialThanks.css"
import Dein from "../../assets/imgs/Dein.png"
import Noddles from "../../assets/imgs/Noodles.png"

export default function SpecialThanks(){
    return(
        <section id='special-thanks'>
            <h2>special thanks</h2>
            <div className="thanks-content">
                <div className="thanks-text">
                    thanks to 
                </div>
                <div className="thanks-img">
                    <img src={Dein} alt="pixelated chinese nine-tailed fox" />
                </div>    
            </div>
            <div className="thanks-end">
                    <img src={Noddles} alt="instant pixel noodles" />
            </div>
        </section>
    );
}