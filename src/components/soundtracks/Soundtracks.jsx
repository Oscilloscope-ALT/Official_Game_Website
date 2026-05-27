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
                <img src={Cat} alt="the pixel ghost cat" />
            </div>
            <div className="ost-list">
                <ul>
                    <li><a href="https://youtu.be/ObDgFUTP0PA?si=AfC8KCPQ9XR4uYIQ" target="_blank" rel="noopener noreferrer">Mike Shinoda - Ghosts</a></li>
                    <li><a href="https://youtu.be/Tm8LGxTLtQk?si=Xs2yR-SZQ5Aths3h" target="_blank" rel="noopener noreferrer">Linkin Park - One More Light</a></li>
                    <li><a href="https://youtu.be/4hoDwVy6IQ4?si=YwQLMlr6IXjK5oN4" target="_blank" rel="noopener noreferrer">Bring Me The Horizon - wonderful life</a></li>
                    <li><a href="https://youtu.be/GBRAnuT48qo?si=fZF1vvgHI_WlGCZy" target="_blank" rel="noopener noreferrer">Bring Me The Horizon - Happy Song</a></li>
                    <li><a href="https://youtu.be/-PuXRXftkDA?si=XGsnmMxSKZ5_khSY" target="_blank" rel="noopener noreferrer">Toby Fox - Memory</a></li>
                    <li><a href="https://www.twitch.tv/rnlbot" target="_blank" rel="noopener noreferrer">rnlbot</a> - intro</li>
                </ul>
            </div>
            <div className="dog-img">
                <img src={Dogs} alt="the pixel ghost dog" />
            </div>
          </div>
        </section>
    );
}