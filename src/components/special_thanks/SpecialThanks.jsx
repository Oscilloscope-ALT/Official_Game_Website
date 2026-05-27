import "./SpecialThanks.css"
import Dein from "../../assets/imgs/Dein.png"
import Noddles from "../../assets/imgs/Noodles.png"

export default function SpecialThanks(){
    return(
        <section id='special-thanks'>
            <h2>special thanks</h2>
            <div className="thanks-content">
                <div className="thanks-text">
                    This project wouldn't have been possible without sources of inspiration and our partners: thanks to Toby Fox for his games, 
                    RNL and all our friends who directly or indirectly helped us create this project. 
                    Also thanks to the South Federal University and the Digital Department for developing our website development skills this year. 
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