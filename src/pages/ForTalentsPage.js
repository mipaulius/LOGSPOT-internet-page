import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios
// import LogspotLogoNew from '../images/Logspot-Logo-03-v9.png';
import Beaver45 from '../images/beaver45.svg';
import Beaver45Hover from '../images/beaver45-hover.svg';
import MotivatedBeaver from '../images/success-notification-image.png';

import './ForTalents.css'; 

function JobApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [remoteWork, setRemoteWork] = useState(false);
  const [preferredPosition, setPreferredPosition] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added this line for error message

  
  const handleDateOfBirthChange = (e) => {
    const enteredDate = new Date(e.target.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - enteredDate.getFullYear();
  
    // Check if the age is less than 16
    if (age < 16) {
      setErrorMessage('You must be at least 16 years old to apply.');
      // Prevent form submission here by returning or other means.
    } else {
      // Age is valid, clear any previous error message
      setErrorMessage('');
      setDateOfBirth(e.target.value);
    }
  };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if there's an error message (i.e., age is below 16)
      if (errorMessage) {
        // Handle the error, e.g., display a message to the user
        alert(errorMessage);
      } else {
        // Age is valid, proceed with form submission
        // ... your form submission logic ...
      }
    };



  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if there's an error message (i.e., age is below 16)
  if (errorMessage) {
    // Handle the error, e.g., display a message to the user
    alert(errorMessage);
    return; // Prevent form submission
  } else {
    // Age is valid, proceed with form submission
    // ... your form submission logic ...
  }

    const formData = {
      firstName,
      lastName,
      photo,
      dateOfBirth,
      mobilePhone,
      email,
      city,
      remoteWork,
      preferredPosition,
      programmingLanguages,
      workExperience,
      education,
      cvFile,
      agreeToTerms,
      subscribeToNewsletter,
      showSuccessNotification,
      showErrorNotification,

      // .
    };


    Axios.post('http://localhost:3002/home', formData)
    .then((response) => {
      
      console.log('Form submitted successfully', response.data);
      setShowSuccessNotification(true);
      alert('Form submitted successfully. We will get back to you soon! :)'); 
     


      {showSuccessNotification && (
        <div className="success-notification">
          {/* <p>Form submitted successfully! We will get back to you soon!</p> */}
          <img
            src={MotivatedBeaver}
            className='success-notification-image' // Use a different class name here
            alt='Success Image'
          />
        </div>
      )}
      
    



      // Clear form inputs after submission (optional)
      setFirstName('');
      setLastName('');
      // ... clear other inputs ...
    })
    .catch((error) => {
      // Handle any errors from the server
      console.error('Error submitting form', error);
      setShowErrorNotification(true);
    });
};



  const handleMouseEnter = (e) => {
    e.currentTarget.src = Beaver45Hover; // Change the image source on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.src = Beaver45; // Change the image source on mouse leave
  };

  return (
    <div className='hero-container'>
    
      <div className="job-application-form-container">
      <div className='talents-header'>
  <div className='header-content'>
    <div className='join-logspot-text'>Join Logspot!</div>
    {/* <img
      src={LogspotLogoNew}
      className='LogspotLogoNew'
      alt='logo'
    /> */}
  </div>
  <div className='centered-content'>
  Create your profile and let companies discover your skills and potential!
  </div>
</div>


      <form onSubmit={handleFormSubmit}>
      <div className="form-group">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            pattern="[A-Za-z]+"
            placeholder="First Name"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            pattern="[A-Za-z]+"
            placeholder="Last Name"
          />
        </div>
        
        <div>
        <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => {
              handleDateOfBirthChange(e);
              setDateOfBirth(e.target.value);
           }}
            required
          />
         <span className="hint">Enter your date of birth (e.g., month/day/year/)</span>
       </div>

        <div className="form-group">
          <input
            type="tel"
            id="mobilePhone"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            required
            pattern="[0-9]+"
            placeholder="Mobile Phone"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            pattern="[A-Za-z]+"
            placeholder="Your City"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="programmingLanguages"
            value={programmingLanguages}
            onChange={(e) => setProgrammingLanguages(e.target.value)}
            required
            placeholder="What programming languages do you use?"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="workExperience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            required
            placeholder="What is your work experience?"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
            placeholder="What is your education?"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="preferredPosition">Preferred Job Position:</label>
          <select
            id="preferredPosition"
            multiple
            value={preferredPosition}
            onChange={(e) =>
              setPreferredPosition(Array.from(e.target.selectedOptions, (option) => option.value))
            }
            required
          >
           
  <option value="Application_security_administrator">Application security administrator</option>
  <option value="Artificial_intelligence_security_specialist">Artificial intelligence security specialist</option>
  <option value="Back-end_developer">Back-end developer</option>
  <option value="Big_data_engineer/architect">Big data engineer/architect</option>
  <option value="Business_intelligence_specialist/analyst">Business intelligence specialist/analyst</option>
  <option value="Business_systems_analyst">Business systems analyst</option>
  <option value="Cloud/security_specialist">Cloud/security specialist</option>
  <option value="Cloud/software_architect">Cloud/software architect</option>
  <option value="Cloud/software_applications_engineer">Cloud/software applications engineer</option>
  <option value="Cloud/system_administrator">Cloud system administrator</option>
  <option value="Cloud/system_engineer">Cloud system engineer</option>
  <option value="Computer_systems_manager">Computer systems manager</option>
  <option value="Cryptographer">Cryptographer</option>
  <option value="Customer_service_representative">Customer service representative</option>
  <option value="Cyberintelligence_specialist">Cyberintelligence specialist</option>
  <option value="Cybersecurity_hardware_engineer">Cybersecurity hardware engineer</option>
  <option value="Data_analyst">Data analyst</option>
  <option value="Data_analytics_developer">Data analytics developer</option>
  <option value="Data_modeling_analyst">Data modeling analyst</option>
  <option value="Data_privacy_officer">Data privacy officer</option>
  <option value="Data_quality_manager">Data quality manager</option>
  <option value="Database_administrator">Database administrator</option>
  <option value="Database_analyst">Database analyst</option>
  <option value="Database_report_writer">Database report writer</option>
  <option value="DevOps_engineer">DevOps engineer</option>
  <option value="Digital_forensics_analyst">Digital forensics analyst</option>
  <option value="Front-end_developer">Front-end developer</option>
  <option value="Full-stack_developer">Full-stack developer</option>
  <option value="Help_desk_support_specialist">Help desk support specialist</option>
  <option value="HTML_CSS__developer">HTML/CSS developer</option>
  <option value="IT_coordinator">IT coordinator</option>
  <option value="IT_security_engineer">IT security engineer</option>
  <option value="IT_support_specialist">IT support specialist</option>
  <option value="Information_assurance_analyst">Information assurance analyst</option>
  <option value="Intelligence_specialist">Intelligence specialist</option>
  <option value="Java_developer">Java developer</option>
  <option value="Network_administrator">Network administrator</option>
  <option value="Network_architect">Network architect</option>
  <option value="Network_engineer">Network engineer</option>
  <option value="Portfolio_manager">Portfolio manager</option>
  <option value="Product_manager">Product manager</option>
  <option value="Program_manager">Program manager</option>
  <option value="Project_manager">Project manager</option>
  <option value="React_developer">React developer</option>
  <option value="Reliability_engineer">Reliability engineer</option>
  <option value="Security_systems_administrator">Security systems administrator</option>
  <option value="Service_desk_analyst">Service desk analyst</option>
  <option value="Software_engineer">Software engineer</option>
  <option value="Software_quality_assurance_analyst">Software quality assurance analyst</option>
  <option value="System_administrator">System administrator</option>
  <option value="Systems_analyst">Systems analyst</option>
  <option value="Technical_product_manager">Technical product manager</option>
  <option value="UI_(user_interface)_designer">UI designer</option>
  <option value="UX_(user_experience)_designer">UX designer</option>
  <option value="Web_developer">Web developer</option>
  <option value="Wireless_network_engineer">Wireless network engineer</option>

          </select>
          <span className="hint">Hold Ctrl (or Cmd) to select multiple positions</span>
        </div>

        <div className="form-group">
          <label>Do you prefer to work remotely?</label>
          <label>
            <input
              type="radio"
              name="remoteWork"
              value="yes"
              checked={remoteWork === true}
              onChange={() => setRemoteWork(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="remoteWork"
              value="no"
              checked={remoteWork === false}
              onChange={() => setRemoteWork(false)}
            />
            No
          </label>
        </div>

        <div className="form-group">
         <label htmlFor="cvFile">Attach your CV or certificates:</label>
          <input
            type="file"
            id="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files[0])}
          />
          <span className="hint">Supported file formats: PDF, DOC, DOCX</span>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              required
            />
            By signing up you agree to the Terms of Service and the <a href="http://localhost:3000/privacy-policy" className='blue-link'>Privacy Policy</a>
          </label>
        </div>

        <button type="submit">Create an account!</button>
      </form>

      {showSuccessNotification && (
          <div className="success-notification">
            Form submitted successfully! {/* You can style this as a pop-up */}
          </div>
        )}

        {showErrorNotification && (
          <div className="error-notification">
            Error submitting form. Please try again. {/* You can style this as a pop-up */}
          </div>
        )}
      
      
      <div className='login-talent-page'>
  Already have an account? <a href='http://localhost:3000/login' className='blue-link'>Log in</a>
</div>


    </div>

    <div>
        <img
          src={Beaver45}
          className='beaver45'
          alt='beaver watching from the side of the screen'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>


    </div>
  );
}


export default JobApplicationForm;
