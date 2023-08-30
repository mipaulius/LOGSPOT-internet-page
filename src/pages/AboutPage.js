import React, { useState } from "react";
import './AboutPage.css';

const AboutPage = () => {
    const [mapSrc, setMapSrc] = useState(
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9257.239282725628!2d23.3466972!3d54.5456637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e129f6dc4d2475%3A0xac5296ca16214762!2sMB%20Logspot!5e0!3m2!1slt!2slt!4v1693421535392!5m2!1slt!2slt"
    );

    return (
        <div className="about-us-container">
            <div className="about-us-info">
<h1>About Us - LOGSPOT</h1>

<h3>Company Overview:</h3>

<p>LOGSPOT is a forward-thinking recruitment company established in early 2019. Our journey began with a simple vision: to connect exceptional talent with promising opportunities.</p>

<h3>Our Mission:</h3>

<p>At LOGSPOT, our mission is clear — we exist to empower individuals and organizations through the art of recruitment. We are committed to helping businesses thrive by finding them the perfect match in terms of talent, skills, and culture fit.</p>

<h3>Our Evolution:</h3>

<p>Our founder, Paulius Miliauskas, an MBA graduate, embarked on this journey after returning from Holland. What started as a small venture soon evolved into something bigger. With a client base spanning logistics, construction, and transport companies, we laid the foundation for something special.</p>

<h3>A Passion for Technology:</h3>

<p>Driven by an unwavering passion for technology, we shifted our focus towards IT recruitment. In 2023, we rebranded LOGSPOT as an IT recruitment company. This transition wasn't just a name change; it marked our commitment to adapting to the ever-evolving tech landscape.</p>

<h3>Educational Journey:</h3>

<p>In 2023, Paulius decided to take a bold step forward by enrolling in front-end development studies. This educational endeavor allowed him to gain valuable insights into different coding languages and programming fields. These experiences became instrumental in enhancing our recruitment process for IT specialists.</p>

<h3>Mentoring the Next Generation:</h3>

<p>Not content with personal growth alone, Paulius also embarked on a journey with "Code Academy." Here, he completed his studies and now actively supports young programmers in finding rewarding careers. Our commitment to nurturing talent extends beyond recruitment; it's about shaping the future of the tech industry.</p>

<h3>Join Us:</h3>

<p>At LOGSPOT, we understand that the right hire can transform a company. We're here to make that transformation happen. Join us on our journey as we continue to bridge the gap between talent and opportunity.

Together, let's build a future where talent thrives, and companies flourish.</p>

            </div>
            <div className="map-wrapper"> <h1>Our Headquarters</h1>
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
