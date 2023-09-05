import React, { useState } from 'react';
import ContactForm from "./ContactForm"; // Import your ContactForm component

const ForEmployersPage = () => {
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
        <div>
            <h1>For Employers</h1>
            <button className="about-us-button" onClick={openForm}>
                Contact us
            </button>
            {/* Render the ContactForm component conditionally */}
            {isFormOpen && <ContactForm isOpen={isFormOpen} onClose={closeForm} />}
        </div>
    );
};

export default ForEmployersPage;
