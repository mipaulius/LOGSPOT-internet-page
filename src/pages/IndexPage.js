import React from 'react';
import Logspot from '../images/logspot-recruitment.svg';
import BeaverImage from '../images/beaver-is-watching.svg';
import LogspotLogo from '../images/company-logspot.svg';
import CodeAcademyLogo from '../images/company-code-academy.png';
import RhenusLogo from '../images/company-rhenus.png';
import LitLogo from '../images/company-lit.png';
import WerkLogo from '../images/company-werk&ik.png';
import IntroductionContainer from '../images/introduction-text-image.svg';
import ItIdentity from '../images/It-identity.svg';
import BeaverScreening from '../images/Beaver-screening.svg';
import ShineInTechPond from '../images/Shine-in-tech-pond.svg';
import WelcomeToTechColony from '../images/Welcome-to-tech-colony.svg';
import SignUpProcess from '../images/Sign-up-process.svg';
import First from '../images/1.svg';
import Second from '../images/2.svg';
import Third from '../images/3.svg';
import Four from '../images/4.svg';
import JoinLogspot from '../images/join-logspot.svg';
import ItRecruitment from '../images/it-recruitment.svg';

import LogspotLogoBlack from '../images/logspot-black.svg';


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
          {/* <div className='companies-who-choose-us'>Companies Who Choose Us!</div> */}

          <div className='introduction-container'>
          <img src={IntroductionContainer} 
          className='introduction-text-image' 
          alt='introduction text about the company'/>
          <div className='introduction-text'>Welcome to LOGSPOT, where the world of IT talents meets boundless opportunities! We constructs bridges between tech wizards and visionary companies, creating a dam of connections for mutual growth.</div>
          </div>

<div className='stripes-container'>
          <div className='stripe1'>
            <div className='stripe1-slide'>
                <img src={LogspotLogoBlack}
                className='rotating-logo-black'
                alt="company logo"/>
          
                 <img src={JoinLogspot}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogoBlack}
                 className='rotating-logo-black'
                 alt="company logo"/>
           
                  <img src={JoinLogspot}
                  className='company'
                  alt="company logo"/>
                  
                  <img src={LogspotLogoBlack}
                  className='rotating-logo-black'
                  alt="company logo"/>
            
                   <img src={JoinLogspot}
                   className='company'
                   alt="company logo"/>

                   <img src={LogspotLogoBlack}
                   className='rotating-logo-black'
                   alt="company logo"/>
             
                    <img src={JoinLogspot}
                    className='company'
                    alt="company logo"/>
                 
             </div>
             <div className='stripe1-slide'>
                <img src={LogspotLogoBlack}
                className='rotating-logo-black'
                alt="company logo"/>
          
                 <img src={JoinLogspot}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogoBlack}
                 className='rotating-logo-black'
                 alt="company logo"/>
           
                  <img src={JoinLogspot}
                  className='company'
                  alt="company logo"/>
                  
                  <img src={LogspotLogoBlack}
                  className='rotating-logo-black'
                  alt="company logo"/>
            
                   <img src={JoinLogspot}
                   className='company'
                   alt="company logo"/>

                   <img src={LogspotLogoBlack}
                   className='rotating-logo-black'
                   alt="company logo"/>
             
                    <img src={JoinLogspot}
                    className='company'
                    alt="company logo"/>
                 
             </div>

            
             </div>

             <div className='stripe2'>
            <div className='stripe2-slide'>
                <img src={LogspotLogoBlack}
                className='rotating-logo-black'
                alt="company logo"/>
          
                 <img src={ItRecruitment}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogoBlack}
                 className='rotating-logo-black'
                 alt="company logo"/>
           
                  <img src={ItRecruitment}
                  className='company'
                  alt="company logo"/>
                  
                  <img src={LogspotLogoBlack}
                  className='rotating-logo-black'
                  alt="company logo"/>
            
                   <img src={ItRecruitment}
                   className='company'
                   alt="company logo"/>

                   <img src={LogspotLogoBlack}
                   className='rotating-logo-black'
                   alt="company logo"/>
             
                    <img src={ItRecruitment}
                    className='company'
                    alt="company logo"/>
                 
             </div>
             <div className='stripe2-slide'>
                <img src={LogspotLogoBlack}
                className='rotating-logo-black'
                alt="company logo"/>
          
                 <img src={ItRecruitment}
                 className='company'
                 alt="company logo"/>
          
                 <img src={LogspotLogoBlack}
                 className='rotating-logo-black'
                 alt="company logo"/>
           
                  <img src={ItRecruitment}
                  className='company'
                  alt="company logo"/>
                  
                  <img src={LogspotLogoBlack}
                  className='rotating-logo-black'
                  alt="company logo"/>
            
                   <img src={ItRecruitment}
                   className='company'
                   alt="company logo"/>

                   <img src={LogspotLogoBlack}
                   className='rotating-logo-black'
                   alt="company logo"/>
             
                    <img src={ItRecruitment}
                    className='company'
                    alt="company logo"/>
                 
             </div>

            
             </div>
             </div>




          <div className='header-card-container'>
          <div className='header-card-container-image'><img src={SignUpProcess} 
          className='sign-up-process' 
          alt='images with "sign up" text'/></div>
          <div className='header-card-container-text'>Join the LOGSPOT beaver crew and set sail on a tech-tastic voyage! We connect IT enthusiasts with companies that see their potential. Together, we build the future of tech!</div>


</div>


<div className='card-container'>


  <div className='sticky-card-container'>
    <div class='section'>
      <div className='sticky-card-inner-container-1'>
        <div className='sticky-card-inner-container-image'><img src={ItIdentity} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div>
        <div className='sticky-card-inner-text'>
          <p className='sticky-container-number'>
          <img src={First} 
          className='number' 
          alt='images with number'/>
            <div className='number-text'>Create Your IT Identity</div></p>Welcome to our tech-tastic world! The first step to unleashing your IT brilliance is to create your very own digital identity. Think of it as a tech resume with a twist! Add your superpowers, skills, and achievements – our beaver scouts love digging through IT awesomeness!
</div>
      </div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-2'>
        
        <div className='sticky-card-inner-text'><p className='sticky-container-number'>
        <img src={Second} 
          className='number' 
          alt='images with number'/>
          <div className='number-text'>The Beaver Screening</div></p>Time to dive into the tech pond and show off your skills! Our beaver screening is no ordinary process – it's a fun tech challenge where you get to showcase your coding chops and IT know-how. Be ready to impress our beaver squad with your digital prowess!</div>
        <div className='sticky-card-inner-container-image'><img src={BeaverScreening} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div></div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-3'>
        <div className='sticky-card-inner-container-image'><img src={ShineInTechPond} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div>
        <div className='sticky-card-inner-text'><p className='sticky-container-number'>
        <img src={Third} 
          className='number' 
          alt='images with number'/>
           <div className='number-text'>Shine in the Tech Pond</div></p>Once you've passed our screening, it's time to unleash your IT shine! We'll work our beaver magic and make you visible to the best tech companies out there. Prepare to be discovered by the finest in the tech forest – they'll be lining up to offer you opportunities!</div>
      </div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-4'>
        
        <div className='sticky-card-inner-text'><p className='sticky-container-number'>
        <img src={Four} 
          className='number' 
          alt='images with number'/>
            <div className='number-text'>Welcome to the Tech Colony</div></p>Congratulations! You've made it through the tech wilderness and landed your dream IT job! Welcome to the exclusive tech colony, where IT geniuses like you thrive. Together, we'll build a digital future like no other!</div>
        <div className='sticky-card-inner-container-image'><img src={WelcomeToTechColony} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div></div>
    </div>
  
  </div>
</div>

           
</div>
    );
};

export default IndexPage;