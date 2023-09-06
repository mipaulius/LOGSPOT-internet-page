import React from "react";
import './ForTalents.css';
import LogspotLogoNew from '../images/Logspot-Logo-03-v9.png';




const ForTalentsPage = () => {
    return (
        <div className="hero-container">
          <div className="for-talent-page-header-container">
          <div className="text-logo"><h1>Join Logspot </h1>
          <img src={LogspotLogoNew} 
          className='Logspot-Logo-New' 
          alt='images with number'/>
          </div>
        
           <div className="for-talent-text">LOGSPOT's beaver brigade is on a mission to build the tech ecosystem of tomorrow. Let our team help you construct the perfect IT resume, and watch companies come knocking on your digital door!</div>
           </div>

           <div class="container">
      <div class="apply_box">
        <h1>
          <a href="#first_name"
            >Job Application <span class="title_small">(Web)</span></a
          >
        </h1>
        <form
          action="https://formsubmit.co/info@logspot.lt"
          class="form"
          method="POST"
        >
          <div class="form_container">
            <div class="form_control">
              <label for="first_name">First name</label>
              <input
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                autocomplete="off"
                required
              />
              <input type="hidden" name="_next" value="/freedom4/login2.html" />
            </div>
            <div class="form_control">
              <label for="last_name">Last name</label>
              <input
                id="last_name"
                name="last_name"
                placeholder="Enter your Last name"
                autocomplete="off"
                required
              />
            </div>
            <div class="form_control">
              <label for="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email.."
                autocomplete="off"
                required
              />
            </div>
            <div class="form_control">
              <label for="phone">Your Phone No.</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your Mobile No."
                autocomplete="off"
                required
              />
            </div>
            <div class="form_control">
              <label for="job_rol">Your Job Rol</label>
              <select name="job_rol" id="job_rol">

              <option value="">Select an option</option>
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
            <div class="form_control">
              <label for="link">Your Portfolio link</label>
              <input
                type="link"
                id="link"
                name="link"
                placeholder="Enter your Portfolio link.."
                required
              />
            </div>
            <div class="textarea_control">
              <label for="address">What programming languages do you use?</label>
              <textarea
                type="text"
                id="address"
                name="address"
                placeholder="Enter your programming languages."
                autocomplete="off"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div class="form_control">
              <label for="city">Your City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your City (Town).."
                autocomplete="off"
                required
              />
            </div>
            <div class="form_control">
              <label for="pin">Pin Code</label>
              <input
                type="number"
                id="pin"
                name="pin"
                placeholder="Enter your Pin Code.."
                value="493662"
                autocomplete="off"
                readonly
                required
              />
            </div>
            <div class="form_control">
              <label for="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value="2022-11-10"
                required
              />
            </div>
            <div class="form_control">
              <label for="files">Upload your C.V.</label>
              <input
                id="files"
                type="file"
                name="file"
                multiple="multiple"
                accept="image/jpeg, image/png, image/jpg, image/svg"
              />
              <output id="result" />
            </div>
          </div>
          <div class="button_container">
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
    <script src="/aplication-form/js/upload.js"></script>

        </div>

    );

};

export default ForTalentsPage;