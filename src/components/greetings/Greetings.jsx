import "./Greetings.css"
import Shtrih from '../../assets/imgs/Shtrih.png'
import DialogBackground from "../../assets/background/dialog_background.png"

export default function Greetings(){
    return(
          <section className="greetings" id='greetings'>
            <div className="container">
                <div className='shtrih'>
                    <img src={Shtrih} alt="The main character - the cat Shtrih" />
                </div>
                <div className='dialog_container'>
                    <img src={DialogBackground} alt=""/>
                    <div className="text_container">
                        *   hi there, buddy! do you wanna hang out with me and my friends? it will be nice if you join us! 。.:☆*:･'(*⌒―⌒*)))
                    </div>
                </div>
            </div>
          
        </section>
    );
}