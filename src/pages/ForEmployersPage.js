import React from 'react';
import BeaverHead from '../images/beaver-head.png';
import "./ForEmployerPage.css"; // Import the CSS file


const ForEmployersPage = () => {
    return (
        <div className='hero-container'>
            <div>
                <h1 className='for-employers-h1'>Grow your tech team with Logspot!</h1>
                <div className='ForEmployerPageHeader'>Discover the power of Logspot's tech-savvy beavers, damming up the best IT talents for your company's growth and success.</div>
                <div className='for-employers-page-layout'>
                <div className="ForEmployerPageForm">
                   
                  <form>
  <label>
    <input type="text" required placeholder="Enter your first name" />
  </label>
  <label>
    <input type="text" required placeholder="Enter your second name" />
  </label>
  <label>
    <input type="text" required placeholder="Enter your company name" />
  </label>
  <label>
    <input type="tel" pattern="[0-9]*" required title="Numbers only" placeholder="Enter your phone number" />
  </label>
  <label>
    <input type="email" required title="Please include a '@' in the email address" placeholder="Enter your email address" />
  </label>
  <label>
    <textarea rows="4" required title="Please fill out this field" placeholder="Enter your message here"></textarea>
  </label>
  <button type="submit">Send us a message and we will contact you shortly</button>
</form>

                </div>

                <div className='BeaverHead'>
                <img src={BeaverHead} 
                className='beaver-head' 
                alt='images with beaver head smiling'/>
                </div>
                </div>

            </div>

            
        </div>
    );
};

export default ForEmployersPage;
