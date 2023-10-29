import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios
import Beaver45 from '../images/beaver45new.svg';
import Beaver45Hover from '../images/beaver45new-hover.svg';
import Logger from '../images/logger.svg'

import './ForTalents.css'; 

function JobApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [remoteWork, setRemoteWork] = useState(false);
  const [preferredPosition, setPreferredPosition] = useState([]);
  const [Languages, setLanguages] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  // const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
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
    
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('mobilePhone', mobilePhone);
      formData.append('email', email);
      formData.append('city', city);
      formData.append('remoteWork', remoteWork);
      formData.append('preferredPosition', JSON.stringify(preferredPosition));
      formData.append('Languages', Languages);
      formData.append('programmingLanguages', programmingLanguages);
      formData.append('workExperience', workExperience);
      formData.append('education', education);
    
      console.log('cvFile:', cvFile);
      if (cvFile) {
        formData.append('cvFile', cvFile, cvFile.name);
        console.log('CV File added to FormData:', formData);
      }
    
      console.log('CV File Info:', formData.get('cvFile'));  // Log the CV File Info
    
      formData.append('agreeToTerms', agreeToTerms);
      formData.append('showSuccessNotification', showSuccessNotification);
      formData.append('showErrorNotification', showErrorNotification);
    
      console.log('Form data:', formData);
      console.log('Form data size:', formData.getAll('cvFile').length);
    
      Axios.post('/join-us', formData)
        .then((response) => {
          console.log('Form submitted successfully', response.data);
          console.log('Response headers:', response.headers);
          setShowSuccessNotification(true);
          alert('Form submitted successfully. 🚀 We will get back to you soon!');
          // ... rest of your code ...
        })
        .catch((error) => {
          console.error('Error submitting form', error);
          setShowErrorNotification(true);
    
          console.log('POST request data:', formData);
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
       <div className='talents-header'>
  <div className='header-content'>
    <div className='join-logspot-text'>Log in to Logspot!</div>
  </div>
  <div className='centered-content'>
  Job offers not only for loggers! Create your profile and let companies discover your skills and potential.
  </div>
</div>

      <div className='for-talents-page-container'>
    
      <div className="job-application-form-container">
     


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
            id="Languages"
            value={Languages}
            onChange={(e) => setLanguages(e.target.value)}
            required
            placeholder="What languages do you speak?"
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
           
    
  <option value="Application security administrator">Application security administrator</option>
  <option value="Artificial intelligence security specialist">Artificial intelligence security specialist</option>
  <option value="Back-end developer">Back-end developer</option>
  <option value="Big data engineer/architect">Big data engineer/architect</option>
  <option value="Blockchain developer">Blockchain developer</option>
  <option value="Business intelligence specialist/analyst">Business intelligence specialist/analyst</option>
  <option value="Business systems analyst">Business systems analyst</option>
  <option value="Cloud solutions architect">Cloud solutions architect</option>
  <option value="Cloud/security specialist">Cloud/security specialist</option>
  <option value="Cloud/software architect">Cloud/software architect</option>
  <option value="Cloud/software applications engineer">Cloud/software applications engineer</option>
  <option value="Cloud/system administrator">Cloud system administrator</option>
  <option value="Cloud/system engineer">Cloud system engineer</option>
  <option value="Computer systems manager">Computer systems manager</option>
  <option value="Cryptographer">Cryptographer</option>
  <option value="Customer service representative">Customer service representative</option>
  <option value="Cyberintelligence specialist">Cyberintelligence specialist</option>
  <option value="Cybersecurity hardware engineer">Cybersecurity hardware engineer</option>
  <option value="Data analyst">Data analyst</option>
  <option value="Data analytics developer">Data analytics developer</option>
  <option value="Data model analyst">Data model analyst</option>
  <option value="Data privacy officer">Data privacy officer</option>
  <option value="Data quality manager">Data quality manager</option>
  <option value="Data scientist">Data scientist</option>
  <option value="Database administrator">Database administrator</option>
  <option value="Database analyst">Database analyst</option>
  <option value="Database report writer">Database report writer</option>
  <option value="DevOps engineer">DevOps engineer</option>
  <option value="Digital forensics analyst">Digital forensics analyst</option>
  <option value="Full-stack developer">Full-stack developer</option>
  <option value="Front-end developer">Front-end developer</option>
  <option value="Help desk support specialist">Help desk support specialist</option>
  <option value="HTML/CSS developer">HTML/CSS developer</option>
  <option value="Information assurance analyst">Information assurance analyst</option>
  <option value="IT coordinator">IT coordinator</option>
  <option value="IT security engineer">IT security engineer</option>
  <option value="IT support specialist">IT support specialist</option>
  <option value="Java developer">Java developer</option>
  <option value="Machine learning engineer">Machine learning engineer</option>
  <option value="Network administrator">Network administrator</option>
  <option value="Network architect">Network architect</option>
  <option value="Network engineer">Network engineer</option>
  <option value="Portfolio manager">Portfolio manager</option>
  <option value="Product manager">Product manager</option>
  <option value="Program manager">Program manager</option>
  <option value="Project manager">Project manager</option>
  <option value="React developer">React developer</option>
  <option value="Reliability engineer">Reliability engineer</option>
  <option value="Security systems administrator">Security systems administrator</option>
  <option value="Software architect">Software architect</option>
  <option value="Software engineer">Software engineer</option>
  <option value="Software quality assurance analyst">Software quality assurance analyst</option>
  <option value="Systems engineer">Systems engineer</option>
  <option value="Systems analyst">Systems analyst</option>
  <option value="Technical product manager">Technical product manager</option>
  <option value="Test automation engineer">Test automation engineer</option>
  <option value="UI designer">UI designer</option>
  <option value="UX designer">UX designer</option>
  <option value="Virtual reality developer">Virtual reality developer</option>
  <option value="Web developer">Web developer</option>
  <option value="Wireless network engineer">Wireless network engineer</option>


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
            By signing up you agree to the Terms of Service and the <a href="/privacy-policy" className='blue-link'>Privacy Policy</a>
          </label>
        </div>

        <button type="submit">Create an account!</button>
      </form>

      {showSuccessNotification && (
          <div className="success-notification">
            Form submitted successfully. 🚀 We will get back to you soon!
          </div>
        )}

        {showErrorNotification && (
          <div className="error-notification"> 
            Error submitting form. Please try again. {/* You can style this as a pop-up */}
          </div>
        )}
      


    </div>

    <div className='logger-container'>

    <img
          src={Logger}
          className='logger-image'
          alt='beaver cutting trees'
        />
     

   
        <img
          src={Beaver45}
          className='beaver45'
          alt='beaver watching from the side of the screen'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      </div>
    </div>
  );
}


export default JobApplicationForm;