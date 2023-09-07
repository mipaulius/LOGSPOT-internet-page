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
                            First Name:
                            <input type="text" required />
                        </label>
                        <label>
                            Second Name:
                            <input type="text" required />
                        </label>
                        <label>
                            Company:
                            <input type="text" required />
                        </label>
                        <label>
                            Phone:
                            <input type="tel" pattern="[0-9]*" required title="Numbers only" />
                        </label>
                        <label>
                            Email:
                            <input type="email" required title="Please include a '@' in the email address" />
                        </label>
                        <label>
                            Message:
                            <textarea rows="4" required title="Please fill out this field"></textarea>
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
