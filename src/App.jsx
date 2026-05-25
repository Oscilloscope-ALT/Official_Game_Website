import AboutGame from "./components/about_game/AboutGame";
import AboutUs from "./components/about_us/AboutUs";
import Contacts from "./components/contacts/Contacts";
import Greeting from "./components/greetings/Greetings"
import Header from "./components/header/Header"
import Nav from "./components/navigation/Nav"
import Soundtracks from "./components/soundtracks/Soundtracks";
import SpecialThanks from "./components/special_thanks/SpecialThanks";
import WhereToPlay from "./components/where_to_play/WhereToPlay";

import './App.css';

  function App() {
    return(
      <div className='main-contener'>
      <Header/>
      <Nav/>
      <main className='main'>
        <Greeting/>
        <AboutGame/>
        <Soundtracks/>
        <WhereToPlay/>
        <SpecialThanks/>
        <AboutUs/>
      </main>
      <Contacts/>
    </div>
    )
  }

  export default App