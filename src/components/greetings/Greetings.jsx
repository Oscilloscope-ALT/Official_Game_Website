import "./Greetings.css"
import TypingText from "./TypewriterText"
import Shtrih from '../../assets/imgs/Shtrih.png'
import DialogBackground from "../../assets/background/dialog_background.png"

export default function Greetings(){
    return(
          <section className="greetings" id='greetings'>
            <div className="container">
                <div className='shtrih'>
                    <img src={Shtrih} alt="The main character-Shtrih" />
                </div>
                <div className='dialogue_container'>
                    <img src={DialogBackground} alt="background for dialogues"/>
                    <div className="text_container">
                      <TypingText text="*  hi there, buddy! do you wanna hang out with me and my friends? it will be nice if you join us! 。.:☆*:･'(*⌒―⌒*)))"/> 
                    </div>
                </div>
            </div>
          
        </section>
    );
}