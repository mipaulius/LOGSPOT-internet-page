import React from 'react';
import { useState, useEffect } from 'react';
import Logspot from '../images/logspot-recruitment.png';
import LogspotLogo from '../images/company-logspot.svg';
import CodeAcademyLogo from '../images/company-code-academy.png';
import RhenusLogo from '../images/company-rhenus.png';
import LitLogo from '../images/company-lit.png';
import WerkLogo from '../images/company-werk&ik.png';
import IntroductionContainer from '../images/introduction-text-image.png';
import ItIdentity from '../images/It-identity.svg';
import BeaverScreening from '../images/Beaver-screening.svg';
import ShineInTechPond from '../images/Shine-in-tech-pond.svg';
import WelcomeToTechColony from '../images/Welcome-to-tech-colony.svg';
import SignUpProcess from '../images/Sign-up-process-orange.svg';
import First from '../images/1.svg';
import Second from '../images/2.svg';
import Third from '../images/3.svg';
import Four from '../images/4.svg';
import JoinLogspot from '../images/join-logspot.svg';
import ItRecruitment from '../images/it-recruitment.svg';
import LogspotLogoBlack from '../images/logspot-black.svg';
import beaver1 from '../images/beaver1.svg';
import beaver2 from '../images/beaver2.svg';
import beaver3 from '../images/beaver3.svg';
import beaver4 from '../images/beaver4.svg';
import beaver5 from '../images/beaver5.svg';
import beaver6 from '../images/beaver6.svg';
import beaver7 from '../images/beaver7.svg';

import './IndexPage.css';



const IndexPage = () => {


  const images = [beaver1, beaver2, beaver3, beaver4, beaver5, beaver6, beaver7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);


  
    return (
        <div>
            <div className='main-window'>
              <div className='company-logo-container'>
              <img
          src={Logspot}
          className='logspot'
          alt="company logo"/>
              </div>
              

             <div className='beaver-image-scrolling-container'>


 <img src={images[currentIndex]} alt="Beaver" className="beaver-image" />
        
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
          <div className='introduction-text'>Welcome to Logspot, where the world of IT talents meets boundless opportunities! We constructs bridges between tech wizards and visionary companies, creating a dam of connections for mutual growth.</div>
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
          <div className='header-card-container-text'>Join the Logspot beaver crew and set sail on a tech-tastic voyage! We connect IT enthusiasts with companies that see their potential. Together, we build the future of tech! </div>
          



</div>


<div className='card-container'>


  <div className='sticky-card-container'>
    <div class='section'>
      <div className='sticky-card-inner-container-1'>
        <div className='sticky-card-inner-text'>
          <div className='sticky-container-number'>
          <img src={First} 
          className='number' 
          alt='images with number'/>
            <div className='number-text'>Create Your IT Identity</div></div>
            <div className='sticky-card-inner-text-container'>
  Welcome to our tech-tastic world! The first step to unleashing your IT brilliance is to create your very own digital identity &#128073;
  <a href="/join-us" style={{ textDecoration: 'underline' }}>
    <span style={{ fontWeight: 'bold' }}>click here</span>
  </a>. 
  Think of it as a tech resume with a twist! Add your superpowers, skills, and achievements – our beaver scouts love digging through IT awesomeness!
</div>



            
        </div>
        <div className='sticky-card-inner-container-image'><img src={ItIdentity} 
            className='sticky-container-image' 
            alt='sitting beaver in front of the desk'/>
        </div>
      </div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-2'>
        
        <div className='sticky-card-inner-text'><div className='sticky-container-number'>
        <img src={Second} 
          className='number' 
          alt='images with number'/>
          <div className='number-text'>The Beaver Screening</div>
          </div>
          <div className='sticky-card-inner-text-container'> Time to dive into the tech pond and show off your skills! Our beaver screening is no ordinary process – it's a fun tech challenge where you get to showcase your coding chops and IT know-how. Be ready to impress our beaver squad with your digital prowess!</div></div>
        <div className='sticky-card-inner-container-image'><img src={BeaverScreening} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div></div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-3'>
        <div className='sticky-card-inner-text'><div className='sticky-container-number'>
        <img src={Third} 
          className='number' 
          alt='images with number'/>
           <div className='number-text'>Shine in the Tech Pond</div></div>
           <div className='sticky-card-inner-text-container'> Once you've passed our screening, it's time to unleash your IT shine! We'll work our beaver magic and make you visible to the best tech companies out there. Prepare to be discovered by the finest in the tech forest – they'll be lining up to offer you opportunities!</div>
           </div>
           <div className='sticky-card-inner-container-image'><img src={ShineInTechPond} 
          className='sticky-container-image' 
          alt='sitting beaver in front of the desk'/></div>
      </div>
    </div>

    <div class='section'>
      <div className='sticky-card-inner-container-4'>
        
        <div className='sticky-card-inner-text'><div className='sticky-container-number'>
        <img src={Four} 
          className='number' 
          alt='images with number'/>
            <div className='number-text'>Welcome to the Tech Colony!</div></div>
            <div className='sticky-card-inner-text-container'>Congratulations! You've made it through the tech wilderness and landed your dream IT job! Welcome to the exclusive tech colony, where IT geniuses like you thrive. Together, we'll build a digital future like no other!</div>
            </div>
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