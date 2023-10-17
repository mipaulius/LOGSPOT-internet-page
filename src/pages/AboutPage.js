import React, { useState } from "react";
import Rammstein from '../images/paulius-foto-round.png';
import ContactForm from "./ContactForm"; // Import your ContactForm component
import WhatsApp from '../images/whatsapp-NEW.svg';
import Viber from '../images/viber-NEW.svg';
import Email from '../images/email-NEW.svg';
import Pointer from '../images/pointer-orange.svg';
import LogspotName from '../images/our-story-orange.svg';
import OurOffice from '../images/our-office-orange.svg'
import './AboutPage.css';
import './ContactForm.css';


const AboutPage = () => {
    const [mapSrc, setMapSrc] = useState(
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9257.239282725628!2d23.3466972!3d54.5456637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e129f6dc4d2475%3A0xac5296ca16214762!2sMB%20Logspot!5e0!3m2!1slt!2slt!4v1693421535392!5m2!1slt!2slt"
    );

    // Define the state for the contact form
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Function to open the contact form
    const openForm = () => {
        setIsFormOpen(true);
    };

    // Function to close the contact form
    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="hero-container">
            
            

            <div className="about-us-container">
                
                <div className="about-us-info">

                <div className="top-text">
                <div className="top-text-1">

                <img
                        src={LogspotName}
                        className='logspot-name'
                        alt='Check marks'
                    />

                </div>
                {/* <div className="top-text-2">Your Bridge to IT Superstars!</div> */}
            </div>

                    <div className="about-us-pointers">
                    <img
                        src={Pointer}
                        className='pointer'
                        alt='Check marks'
                    />
                    <div>
                    <div className="description-names">Company Overview:</div>
                    <div className="description-text">Logspot is IT focused job search portal that unites vacancies across Europe. Company is established by a visionary entrepreneur, Paulius Miliauskas in early 2019.</div>
                    </div></div>


                    <div className="about-us-pointers">
                    <img
                        src={Pointer}
                        className='pointer'
                        alt='Check marks'
                    />
                    <div>
                    <div className="description-names">Our Mission:</div>
                    <div className="description-text">At Logspot, we're on a mission to unite IT wizards and visionary companies. From coding to creativity, our beaver squad connects talent and opportunity in the tech forest</div>
                    </div></div>

                    <div className="about-us-pointers">
                    <img
                        src={Pointer}
                        className='pointer'
                        alt='Check marks'
                    />
                    <div>
                    <div className="description-names">Code Coaching:</div>
                    <div className="description-text">In 2023, Logspot embarked on a journey with "Code Academy". We actively supports young programmers in finding rewarding careers. Our commitment to nurturing talents extends beyond recruitment; it's about shaping the future of the tech industry.</div>
                    </div></div>

                    <div className="about-us-pointers">
                    <img
                        src={Pointer}
                        className='pointer'
                        alt='Check marks'
                    />
                    <div>
                    <div className="description-names">Join Us</div>
                    <div className="description-text">Ready for some tech-tastic fun? Logspot brings IT professionals and companies together for an epic tech revolution. Get ready to build a dam of career achievements!</div>
                    </div></div>

                    {/* Move the button outside of the App div */}
                    <div className="about-us-button-container">
                    <button className="about-us-button" onClick={openForm}>
                        Contact us
                    </button>
                    </div>
                    {/* Render the ContactForm component conditionally */}
                    {isFormOpen && <ContactForm isOpen={isFormOpen} onClose={closeForm} />}
                </div>

                <div className="rammstein">
                    <img
                        src={Rammstein}
                        className='my-picture'
                        alt='some random dude standing with a beer in a Rammstein concert'
                       
                    />
                    <div className="my-name-tag">Paulius Miliauskas</div>
                    <div className="my-position-tag">CEO</div>

                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <img src={Email} className="Email" alt="Email" />
                            <div className="contact-item-text">info@logspot.lt</div>
                        </div>

                        <div className="contact-item">
                            <img src={WhatsApp} className="WhatsApp" alt="WhatsApp" />
                            <div className="contact-item-text">+37062215882</div>
                        </div>

                        <div className="contact-item">
                            <img src={Viber} className="Viber" alt="Viber" />
                            <div className="contact-item-text">+37062215882</div>
                        </div>
                    </div>




                </div>
            </div>
            <div className="map-wrapper">
                <div className="our-office">

                <img
                        src={OurOffice}
                        className='our-office-pic'
                        alt='some random dude standing with a beer in a Rammstein concert'
                       
                    />

                </div>
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
