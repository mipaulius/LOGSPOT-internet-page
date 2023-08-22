import React from 'react';
import Logspot from '../images/logspot-recruitment.svg';
import BeaverImage from '../images/beaver-is-watching.svg';
import LogspotLogo from '../images/company-logspot.svg';
import CodeAcademyLogo from '../images/company-code-academy.png';
import RhenusLogo from '../images/company-rhenus.png';
import LitLogo from '../images/company-lit.png';
import WerkLogo from '../images/company-werk&ik.png';


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

          <div className='company-container'>
            <div className='company-list'>
            
          <img src={LogspotLogo}
          className='rotating-logo'
          alt="company logo"/>
          
          <img src={CodeAcademyLogo}
          className='code-academy-logo'
          alt="company logo"/>
          
          <img src={LogspotLogo}
          className='rotating-logo'
          alt="company logo"/>
          
          <img src={RhenusLogo}
          className='logspot-logo'
          alt="company logo"/>
          
          <img src={LogspotLogo}
          className='rotating-logo'
          alt="company logo"/>
          
          <img src={LitLogo}
          className='lit-logo'
          alt="company logo"/>
          
          <img src={WerkLogo}
          className='werk-logo'
          alt="company logo"/>
          
          <img src={LogspotLogo}
          className='rotating-logo'
          alt="company logo"/>
            


            </div>

          </div>


            </div>
        </div>
    );
};

export default IndexPage;