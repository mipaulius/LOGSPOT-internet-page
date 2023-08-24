import React from 'react';
import Logspot from '../images/logspot-recruitment.svg';
import BeaverImage from '../images/beaver-is-watching.svg';
import LogspotLogo from '../images/company-logspot.svg';
import CodeAcademyLogo from '../images/company-code-academy.png';
import RhenusLogo from '../images/company-rhenus.png';
import LitLogo from '../images/company-lit.png';
import WerkLogo from '../images/company-werk&ik.png';
import IntroductionContainer from '../images/introduction-text-image.svg';
import BeaverSitting from '../images/application-img.svg';


import './IndexPage.css';

document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(event) { // Pass the event parameter here
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    });
}





const IndexPage = () => {
    return (
        <div>
            <div className='main-window'>

            <img
          src={Logspot}
          className='logspot'
          alt="company logo"/>

            <img
          src={BeaverImage}
          className='beaver-image'
          alt="beaver image with moving eyes"/>

          <div className='moving-eyes-container'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          </div>


          <div className='logos'>
            <div className='logos-slide'>
                <img src={LogspotLogo}
                className='rotating-logo'
                alt="company logo"/>
          
                 <img src={CodeAcademyLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
          
                 <img src={RhenusLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
          
                 <img src={LitLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
            
                 <img src={WerkLogo}
                 className='company'
                 alt="company logo"/>
             </div>

             <div className='logos-slide'>
                <img src={LogspotLogo}
                className='rotating-logo'
                alt="company logo"/>
          
                 <img src={CodeAcademyLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
          
                 <img src={RhenusLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
          
                 <img src={LitLogo}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogo}
                 className='rotating-logo'
                 alt="company logo"/>
            
                 <img src={WerkLogo}
                 className='company'
                 alt="company logo"/>
             </div>


          </div>

          <div className='introduction-container'>
          <img src={IntroductionContainer} 
          className='introduction-text-image' 
          alt='introduction text about the company'/>
          <div className='introduction-text'>Welcome to LOGSPOT, where the world of IT talents meets boundless opportunities! We constructs bridges between tech wizards and visionary companies, creating a dam of connections for mutual growth.</div>
          </div>

          {/* <div className='application-container'> */}


            
 

  {/* <div className='inner-container-right'>
    <img src={BeaverSitting} className='beaver-sitting-image' alt='Beaver sitting in front of the desk image' />
  </div>
</div> */}


<div className='card-container'>
  <div className='sticky-card-container'>
    <div class='section'>
      <div>hello world</div>
    </div>

    <div class='section'>
    <div>hello world</div>
    </div>

    <div class='section'>
    <div>hello world</div>
    </div>

    <div class='section'>
    <div>hello world</div>
    </div>
  </div>
</div>

           
</div>
    );
};

export default IndexPage;