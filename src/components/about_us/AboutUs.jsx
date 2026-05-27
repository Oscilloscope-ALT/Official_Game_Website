import "./AboutUs.css"
import Salusha from "../../assets/imgs/Salusha_Shishinksky.png"
import PC from "../../assets/imgs/PC.png"

export default function AboutUs(){
    return(
        <section className='about-us' id='about-us'>
          <h2>about us</h2>
          <div className="about-content">
            <div className="about-img">
                <img src={Salusha} alt="the character from the game, whose name is Salusha" />
            </div>
            <div className="about-text">
              
            </div>
          </div>

          <div className="about-end">
            <img src={PC} alt="pixel PC" />
          </div>
        </section>
    );
}