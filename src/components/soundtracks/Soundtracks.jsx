import "./Soundtracks.css"
import Cat from "../../assets/imgs/Cat.png"
import Dogs from "../../assets/imgs/Dogs.png"

export default function Soundtracks(){
    return(
        <section id='soundtracks'>
          <h2>soundtracks</h2>
          <div className="ost-intro">
            We love music!
          </div>
          <div className="ost-content">
            <div className="cat-img">
                <img src={Cat} alt="" />
            </div>
            <div className="ost-list">
                <ul>
                    <li>mike shinoda</li>
                </ul>
            </div>
            <div className="dog-img">
                <img src={Dogs} alt="" />
            </div>
          </div>
        </section>
    );
}