import React, { Component } from 'react';
import BeaverHead from '../images/Grow-tech-team.svg';
// import BeaverHeadHover from '../images/Grow-tech-team.svg';
import Axios from 'axios'; // Import Axios
import './ForEmployerPage.css'; // Import the CSS file



class ForEmployersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state); // Add this line to check state updates
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = this.state;
  
    Axios.post('http://localhost:3001/it-hiring', formData)
      .then((response) => {
        // Handle a successful response from the server
        console.log('Form submitted successfully', response.data);
        alert('Form submitted successfully. We will get back to you soon! :)'); // Display a popup message
      })
  };
  

  // handleMouseEnter = (e) => {
  //   e.currentTarget.src = BeaverHeadHover;
  // };

  // handleMouseLeave = (e) => {
  //   e.currentTarget.src = BeaverHead; 
  // };

  render() {
    return (
      <div className='hero-container'>
        <div>
          <h1 className='for-employers-h1'>Grow your tech team with Logspot!</h1>
          <div className='ForEmployerPageHeader'>
            Discover the power of Logspot's tech-savvy beavers, damming up the best IT talents for your company's growth
            and success.
          </div>
          <div className='for-employers-page-layout'>
            <div className='ForEmployerPageForm'>
              <form onSubmit={this.handleSubmit} action="/api/submit-form" method="POST">
                <label>
                  <input
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                    placeholder='Enter your first name'
                  />
                </label>
                <label>
                  <input
                    type='text'
                    name='secondName'
                    value={this.state.secondName}
                    onChange={this.handleInputChange}
                    required
                    placeholder='Enter your second name'
                  />
                </label>
                <label>
                  <input
                    type='text'
                    name='companyName'
                    value={this.state.companyName}
                    onChange={this.handleInputChange}
                    required
                    placeholder='Enter your company name'
                  />
                </label>
                <label>
                  <input
                    type='tel'
                    name='phoneNumber'
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}
                    pattern='[0-9]*'
                    required
                    title='Numbers only'
                    placeholder='Enter your phone number'
                  />
                </label>
                <label>
                  <input
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                    title="Please include a '@' in the email address"
                    placeholder='Enter your email address'
                  />
                </label>
                <label>
                  <textarea
                    name='message'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    rows='4'
                    required
                    title='Please fill out this field'
                    placeholder='Enter your message here'
                  ></textarea>
                </label>
                <button type='submit'>Send us a message and we will contact you shortly</button>
              </form>
            </div>

            <div className='BeaverHead'>
              <img
                src={BeaverHead}
                className='beaver-head'
                alt='images with beaver head smiling'
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForEmployersPage;
