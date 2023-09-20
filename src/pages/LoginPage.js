import React from 'react';
import Logger from './jack.png'; // Use a relative path
import "./LoginPage.css"; 


const ForEmployersPage = () => {
    return (
        <div className='hero-container'>
            <div>
                <h1 className='login-h1'>Log in to Logspot!</h1>
                <div className='login-Header'>Job offers not only for loggers!</div>
                <div className='login-layout'>
                <div className="login-form">
                  <form action="/submit-form" method="POST">
                    <label>
                      <input
                        type="email"
                        name="email"
                        required
                        title="Please include a '@' in the email address"
                        placeholder="Enter your email address"
                      />
                    </label>
                
                    <label>
                      <input
                        type="password"
                        name="password"
                        required
                        title="Please include a '@' in the email address"
                        placeholder="Enter your email password"
                      />
                    </label>
                
                    <button type="submit">Login</button>
                  </form>
                
                  <div className='forgot-your-password'>
                    <a href='http://localhost:3000/sign-up' className='blue-link'>Forgot your password?</a>
                  </div>
                
                  <div className='login-talent-page'>
                    Do not have an account? <a href='http://localhost:3000/sign-up' className='blue-link'>Sign up</a>
                  </div>
                </div>


                
                <img src={Logger} 
                className='logger' 
                alt='beaver cutting trees'/>
               
                </div>

            </div>

            
        </div>
    );
};

export default ForEmployersPage;
