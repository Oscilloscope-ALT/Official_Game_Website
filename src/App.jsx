import './App.css';

  function App() {
    return(
      <div className='main-contener'>

      <header className='head'>
        <div className='name'> Name of the game </div>
      </header>

      <nav className='nav'>
        <ul className='nav-list'>
          <li> <a href="#about-game">about game</a></li>
          <li><a href="#soundtracks">soundtracks</a></li>
          <li><a href="#where-to-play">where-to-play</a></li>
          <li><a href="#soundtracks">special-thanks</a></li>
          <li><a href="#about-us">about-us</a></li>
          <li><a href="#about-us">contacts</a></li>    
                
        </ul>
      </nav>

      <main className='main'>
        <section id='greetings'>
          <div className='shtrih'></div>
          <div className='greeting'></div>
        </section>
        <section id='about-game'>
          <h1>about-game</h1>
        </section>
        <section id='soundtracks'>
          <h1>soundtracks</h1>
        </section>
        <section id='where-to-play'>

        </section>
        <section id='special-thanks'>

        </section>
        <section id='about-us'>
          <h1>about us</h1>
        </section>
      </main>
      <footer className='footer' id='contacts'>
        <ul className='contacts'>
          <li><p>*почта1*</p></li>
          <li><p>*почта2*</p></li>
        </ul>
      </footer>
    </div>
    )
  }

  export default App