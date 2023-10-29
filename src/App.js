import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ForTalentsPage from "./pages/ForTalentsPage";
import ForEmployersPage from "./pages/ForEmployersPage"
import AboutPage from "./pages/AboutPage";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";
import SignUpPage from "./pages/ForTalentsPage";
import LoginPage from "./pages/LoginPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App = () => {

  return (

    <div>
    
    <BrowserRouter>
    
    
<Toolbar/>

    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/join-us" element={<ForTalentsPage/>}></Route>
      <Route path="/it-hiring" element={<ForEmployersPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      {/* <Route path="/login" element={<LoginPage/>}></Route> */}
      <Route path="/sign-Up" element={<SignUpPage/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>


    </Routes>

    <div className='footer'>

      <div className='footer-1'>
      <ul>
  <div className='footer-headline'>LOGSPOT</div>
  <li><a href="/">Home</a></li>
  <li><a href="/join-us">Get a job</a></li>
  <li><a href="/it-hiring">Hiring</a></li>
  <li><a href="/about">About</a></li>
</ul>
      </div>

      <div className='footer-2'>
      <ul><div className='footer-headline'>ABOUT US</div>
        <li>Vytauto g. 48B, 68288 Marijampolė</li>
        <li>+37062215882;</li>
        <li>+491786943025</li>
        <li><a href="mailto:info@logspot.net">info@logspot.net</a></li>
        
      </ul>
      </div>

      <div className='footer-3'>
      <ul>
       <div className='footer-headline'>PRIVACY</div>
        <li><a href="/privacy-policy">Client privacy policy</a></li>
      </ul>
      </div>


      <div className='footer-4'>
      <ul><div className='footer-headline'>SOCIAL</div>
        
        <div className='social-list-item'>
        <li><a href="https://www.facebook.com/logspot.lt/">
          <img className='social-images' src={require('./images/facebook-NEW.svg').default} alt='facebook icon' />
          <div className='social-text'>FACEBOOK</div>
          </a></li>
        </div>

        <div className='social-list-item'>
        <li><a href="https://www.linkedin.com/company/logspot/">
        <img className='social-images' src={require('./images/linkedin-NEW.svg').default} alt='linkedin icon' />
          <div className='social-text'>LINKEDIN</div>
          </a></li>
        </div>

        <div className='social-list-item'>     
        <li><a href="https://www.instagram.com/logspot_mb/">
        <img className='social-images' src={require('./images/instagram-NEW.svg').default} alt='instagram icon' />
          <div className='social-text'>INSTAGRAM</div>
          </a></li>
        </div>
      </ul>
      </div>
    
    </div>

    </BrowserRouter>
    
    </div>

  );


}


export default App;