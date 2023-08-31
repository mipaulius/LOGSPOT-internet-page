import React, { useState } from "react";
import Rammstein from '../images/rammstein.jpg';
import './AboutPage.css';

const AboutPage = () => {
    const [mapSrc, setMapSrc] = useState(
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9257.239282725628!2d23.3466972!3d54.5456637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e129f6dc4d2475%3A0xac5296ca16214762!2sMB%20Logspot!5e0!3m2!1slt!2slt!4v1693421535392!5m2!1slt!2slt"
    );

    return (
        <div className="about-us-hero-container"> <div className="top-text"><p>LOGSPOT -</p> <p>tech ecosystem of tomorrow</p></div>
        <div className="about-us-container"> 
            <div className="about-us-info">


<h3>Company Overview:</h3>

<div className="description-text">Logspot is a forward-thinking IT recruitment company established by a visionary entrepreneur, Paulius Miliauskas in early 2019. Our main goal is to connect exceptional tech talents with promising opportunities.</div>

{/* <h3>Our Mission:</h3>

<div className="description-text">At LOGSPOT, our mission is clear — we exist to empower individuals and organizations through the art of recruitment. We are committed to helping businesses thrive by finding them the perfect match in terms of talent, skills, and culture fit.</div> */}

{/* <h3>Our Evolution:</h3>

<div className="description-text">Company founder, Paulius Miliauskas, an MBA graduate, embarked on this journey after his studies. What started as a small venture soon evolved into something bigger. With a client base spanning logistics, construction, and transport companies, we laid the foundation for something special.</div> */}

{/* <h3>A Passion for Technology:</h3>

<div className="description-text">Driven by an unwavering passion for technology, we shifted our focus towards IT recruitment. This transition wasn't just a name change; it marked our commitment to adapting to the ever-evolving tech landscape.</div> */}

{/* <h3>Educational Journey:</h3>

<div className="description-text">In 2023, Paulius decided to take a bold step forward by enrolling in front-end development studies. This educational endeavor allowed him to gain valuable insights into different coding languages and programming fields. These experiences became instrumental in enhancing our recruitment process for IT specialists.</div> */}

<h3>Mentoring the Next Generation:</h3>

<div className="description-text">In 2023, Logspot embarked on a journey with "Code Academy". We actively supports young programmers in finding rewarding careers. Our commitment to nurturing talents extends beyond recruitment; it's about shaping the future of the tech industry.</div>

<h3>Join Us:</h3>

<div className="description-text">Ready for some tech-tastic fun? LOGSPOT brings IT professionals and companies together for an epic tech revolution. Get ready to build a dam of career achievements!</div>

<button className="about-us-button">Contact us</button>

            </div>
            <div className="rammstein"><img src={Rammstein} 
          className='rammstein-concert' 
          alt='some random dude standing with a beer in a Rammstein concert'/></div>
            
        </div>
        <div className="map-wrapper"> <h1>Our Office</h1>
        <iframe
            title="Google Maps"
            src={mapSrc}
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
    
        ></iframe>
    </div>
    </div>
    );
};

export default AboutPage;
