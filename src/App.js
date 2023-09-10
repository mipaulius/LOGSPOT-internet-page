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
      <Route path="/home" element={<ForTalentsPage/>}></Route>
      <Route path="/it-hiring" element={<ForEmployersPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/sign-Up" element={<SignUpPage/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>


    </Routes>

    <div className='footer'>

      <div className='footer-1'>
      <ul><h3>LOGSPOT</h3>
        <li><a href="http://localhost:3000/home">FOR TALENTS</a></li>
        <li><a href="http://localhost:3000/it-hiring">FOR EMPLOYERS</a></li>
        <li><a href="http://localhost:3000/login">LOGIN</a></li>
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
      <ul>
       <h3>PRIVACY POLICY</h3>
        <li><a href="http://localhost:3000/privacy-policy">MB LOGSPOT CLIENT PRIVACY POLICY</a></li>
      </ul>
      </div>


      <div className='footer-4'>
      <ul><h3 className='social-networks'>SOCIAL NETWORKS</h3>
        <div className='social-list-item'>
        <img className='social-images' src={require('./images/facebook-NEW.svg').default} alt='facebook icon' />
        {/* <a href='https://www.facebook.com/logspot.lt' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>FACEBOOK</span>
        </a> */}
        <li><a href="https://www.facebook.com/logspot.lt/"><div className='social-text'>FACEBOOK</div></a></li>

        </div>

        <div className='social-list-item'>
        <img className='social-images' src={require('./images/linkedin-NEW.svg').default} alt='linkedin icon' />
        {/* <a href='https://www.linkedin.com/company/logspot/' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>LINKEDIN</span>
        </a> */}
        <li><a href="https://www.linkedin.com/company/logspot/"><div className='social-text'>LINKEDIN</div></a></li>
        </div>

        <div className='social-list-item'>
        <img className='social-images' src={require('./images/twitter-NEW.svg').default} alt='twitter icon' />
        {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <span className='social-text'>TWITTER</span>
        </a> */}
        <li><a href="https://twitter.com"><div className='social-text'>TWITTER</div></a></li>
        </div>
      </ul>
      </div>
    
    </div>

    </BrowserRouter>
    
    </div>

  );


}


export default App;
