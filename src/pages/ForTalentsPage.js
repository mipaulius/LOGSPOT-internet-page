import React, { useState } from 'react';
import './ForTalents.css'; // Correct import statement




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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access all the form data in the state variables
  };

  return (
    <div className='hero-container'>
      <h1 className='talents-header'>Join the LOGSPOT and set sail on a tech-tastic voyage!</h1>
      <div className='job-application-container'>
      <div className="job-application-form-container">

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            pattern="[A-Za-z]+"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            pattern="[A-Za-z]+"
          />
        </div>
        <div>
          <label htmlFor="photo">Your Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mobilePhone">Mobile Phone:</label>
          <input
            type="tel"
            id="mobilePhone"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            required
            pattern="[0-9]+"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Your City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            pattern="[A-Za-z]+"
          />
        </div>
        <div>
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
        <div>
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
        </div>
        <div>
          <label htmlFor="programmingLanguages">What programming languages do you use?</label>
          <input
            type="text"
            id="programmingLanguages"
            value={programmingLanguages}
            onChange={(e) => setProgrammingLanguages(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="workExperience">What is your work experience?</label>
          <input
            type="text"
            id="workExperience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="education">What is your education?</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvFile">Attach your CV or certificates:</label>
          <input
            type="file"
            id="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files[0])}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              required
            />
            By signing up you agree to the Terms of Service and the Privacy Policy
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={subscribeToNewsletter}
              onChange={() => setSubscribeToNewsletter(!subscribeToNewsletter)}
            />
            Yes, I want to subscribe to the Logspot newsletter and occasional marketing communications.
          </label>
        </div>
        <button type="submit">Create an account</button>
      </form>
    </div>

      <div className='talents-page-description'><p>LOGSPOT's beaver brigade is on a mission to build the tech ecosystem of tomorrow. Let our team help you construct the perfect IT resume, and watch companies come knocking on your digital door!</p></div>
    </div>
    
    </div>
  );
}

export default JobApplicationForm;
