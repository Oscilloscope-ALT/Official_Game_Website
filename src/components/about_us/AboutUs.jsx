import "./AboutUs.css"
import Salusha from "../../assets/imgs/Salusha_Shishinksky.png"
import PC from "../../assets/imgs/PC.png"

export default function AboutUs(){
    return(
        <section className='about-us' id='about-us'>
          <h2>about us</h2>
          <div className="about-content">
            <div className="about-img">
                <img src={Salusha} alt="" />
            </div>
            <div className="about-text">
                Shtrik the cat and friends is single-player browser game. What do you expect when you see this cat? Just play with this cute Shtrik and you'll find out where his friends are... or... nevermind, just play with him. But please, be patient before you start or you will understand...
            </div>
          </div>

          <div className="about-end">
            <img src={PC} alt="" />
          </div>
        </section>
    );
}