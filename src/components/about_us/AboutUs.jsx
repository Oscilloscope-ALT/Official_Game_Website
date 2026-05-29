import "./AboutUs.css"
import Salusha from "../../assets/imgs/Salusha_Shishinksky.png"
import PC from "../../assets/imgs/PC.png"

export default function AboutUs(){
    return(
        <section className='about-us' id='about-us'>
          <h2>about us</h2>
          <div className="about-us-content">
            <div className="about-us-img">
                <img src={Salusha} alt="the character from the game, whose name is Salusha" />
            </div>
            <div className="about-us-text">
              At Dreamdev, we believe that games are one of the best ways to tell a story of something. 
              In our games we try to convey an unforgettable atmosphere through locations, decorations and music. 
              For over 5 years, we've been pursuing our original mission - to give emotions to our players, the success of our games lies precisely in them. 
              If you enjoyed this game, you might also want to try our other projects
            </div>
          </div>

          <div className="about-us-end">
            <img src={PC} alt="pixel PC" />
          </div>
        </section>
    );
}