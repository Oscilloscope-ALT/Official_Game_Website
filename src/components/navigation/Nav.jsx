import "./Nav.css"

export default function Nav(){
    return(
          <nav className='nav'>
        <ul className='nav-list'>
          <li><a href="#about-game">about game</a></li>
          <li><a href="#soundtracks">soundtracks</a></li>
          <li><a href="#where-to-play">where-to-play</a></li>
          <li><a href="#soundtracks">special-thanks</a></li>
          <li><a href="#about-us">about-us</a></li>
          <li><a href="#about-us">contacts</a></li>         
        </ul>
      </nav>
    );
}