import "./AboutGame.css"
import ShtrihMini from "../../assets/imgs/Shtrih_dialogue.png"
import Boots from "../../assets/imgs/Boots.png"

export default function AboutGame(){
    return(
        <section className='about-game' id='about-game'>
          <h2>About game</h2>
          <div className="about-content">
            <div className="about-img">
                <img src={ShtrihMini} alt="" />
            </div>
            <div className="about-txt">Shtrik the cat and friends is single-player browser game. 
                What do you expect when you see this cat? Just play with this cute Shtrik and you'll find out where his friends are...
                or... nevermind, just play with him. But please, be patient before you start or you will understand...</div>
          </div>
          <div className="about-end">
            <img src={Boots} alt="" />
          </div>
        </section>
    );
}