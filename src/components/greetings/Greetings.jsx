import "./Greetings.css"
import Shtrih from '../../assets/imgs/Shtrih.png'
import DialogBackground from "../../assets/imgs/dialog_background.png"

export default function Greetings(){
    return(
          <section className="greetings" id='greetings'>
            <div className="container">
                <div className='shtrih'>
                    <img src={Shtrih} alt="The main character - the cat Shtrih" />
                </div>
                <div className='dialog'>
                <   img src={DialogBackground} alt=""/>
                </div>
            </div>
          
        </section>
    );
}