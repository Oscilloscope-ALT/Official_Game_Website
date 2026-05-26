import "./WhereToPlay.css"
import GitHubLogo from "../../assets/imgs/GitHub.png"
import SteamLogo from "../../assets/imgs/Steam.png"

export default function WhereToPlay(){
    return(
        <section id='where-to-play'>
            <h2>Where to play</h2>
            <div className="to-play-content">
                <figure className="github-logo">
                    <img src={GitHubLogo} alt="github logo" />
                    <figcaption>already available</figcaption>

                </figure>
                <figure className="steam-logo">
                    <img src={SteamLogo} alt="steam logo" />
                    <figcaption>soon</figcaption>
                </figure>
            </div>
        </section>
    );
}