import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ForTalentsPage from "./pages/ForTalentsPage";
import ForEmployersPage from "./pages/ForEmployersPage"
import AboutPage from "./pages/AboutPage";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";
import SignUpPage from "./pages/SignUpPage";


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
      <Route path="/sign-Up" element={<SignUpPage/>}></Route>

    </Routes>

    <div className='footer'>

      <div className='footer-1'>
      <ul><h3>LOGSPOT</h3>
        <li>FOR TALENTS</li>
        <li>FOR EMPLOYERS</li>
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
      <li className='social-list-item'><img className='social-images' src={require('./images/facebook.svg').default} alt="facebook icon" /> <span className='social-text'>FACEBOOK</span></li>
      <li className='social-list-item'><img className='social-images' src={require('./images/linkedin.svg').default} alt="linkedin icon" /><span className='social-text'>LINKEDIN</span></li>
      <li className='social-list-item'><img className='social-images' src={require('./images/twitter.svg').default} alt="twitter icon" /><span className='social-text'>TWITTER</span></li>

      </ul>
      </div>
    
    </div>

    </BrowserRouter>
    
    </div>

  );


}


export default App;
