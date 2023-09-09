import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ForTalentsPage from "./pages/ForTalentsPage";
import ForEmployersPage from "./pages/ForEmployersPage"
import AboutPage from "./pages/AboutPage";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";
import SignUpPage from "./pages/ForTalentsPage";
import LoginPage from "./pages/LoginPage";

const App = () => {

  return (

    <div>
    
    <BrowserRouter>
    
    
<Toolbar/>

    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/home" element={<ForTalentsPage/>}></Route>
      <Route path="/it-hiring" element={<ForEmployersPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/sign-Up" element={<SignUpPage/>}></Route>

    </Routes>

    <div className='footer'>

      <div className='footer-1'>
      <ul><h3>LOGSPOT</h3>
        <li>FOR TALENTS</li>
        <li>FOR EMPLOYERS</li>
        <li>LOGIN</li>
      </ul>
      </div>

      <div className='footer-2'>
      <ul><h3>ABOUT US</h3>
        <li>Vytauto g. 48B, 68288 Marijampolė</li>
        <li>+370 622 15882; +49 178 6943025</li>
        <li>info@logspot.lt</li>
        <li>I-V: 10.00 – 17.00</li>
      </ul>
      </div>

      <div className='footer-3'>
      <ul><h3>PRIVACY POLICY</h3>
        <li>MB LOGSPOT CLIENT PRIVACY POLICY</li>
      </ul>
      </div>

      <div className='footer-4'>
      <ul><h3 className='social-networks'>SOCIAL NETWORKS</h3>
        <div className='social-list-item'>
        <img className='social-images' src={require('./images/facebook-NEW.svg').default} alt='facebook icon' />
        <a href='https://www.facebook.com/logspot.lt' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>FACEBOOK</span>
        </a>
        </div>

        <div className='social-list-item'>
        <img className='social-images' src={require('./images/linkedin-NEW.svg').default} alt='linkedin icon' />
        <a href='https://www.linkedin.com/company/logspot/' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>LINKEDIN</span>
        </a>
        </div>

        <div className='social-list-item'>
        <img className='social-images' src={require('./images/twitter-NEW.svg').default} alt='twitter icon' />
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>TWITTER</span>
        </a>
        </div>
      </ul>
      </div>
    
    </div>

    </BrowserRouter>
    
    </div>

  );


}


export default App;
