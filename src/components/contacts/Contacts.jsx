import "./Contacts.css"

export default function Contacts(){
    return(
        <footer className='footer' id='contacts'>
          <h2>contacts</h2>
        <ul className='contacts'>
          <li>Dederer Sofia - main developer <br /><a href="mailto:vaulia@sfedu.ru">vaulia@sfedu.ru</a></li>
          <li>Alexander Strutsenko - manager <br /><a href="mailto:astrutsenko@sfedu.ru">astrutsenko@sfedu.ru</a></li>
        </ul>
      </footer>
    );
}