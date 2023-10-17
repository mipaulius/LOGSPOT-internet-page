import React, { useState, useEffect, useRef } from "react";
import "./ContactForm.css"; // Import the CSS file

function ContactForm({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, phone, email, message };

    try {
      // Simulate sending the form data to an email (replace with actual email sending logic)
      const response = await fetch("http://localhost:3003/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully.");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className="modal">
      <div className="modal-content" style={{ width: "500px", height: "400px" }}>
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <div className="contact-us-form-header">Contact Us</div>
        <form className="form-contact-us" onSubmit={handleSubmit} ref={modalRef}>
          <label>
            <div className="text-contact-us">Name:</div>
            <input className="input-contact-us"type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            <div className="text-contact-us">Phone:</div>
            <input
              className="input-contact-us"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]*"
              required
              title="Numbers only"

            />
          </label>
          <label className="contact-form-label">
          <div className="text-contact-us">Email:</div>
            <input
              className="input-contact-us"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="Please include a '@' in the email address"
            />
          </label>
          <label className="contact-form-label">
            Message:
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              title="Please fill out this field"
            />
          </label>
          <button type="submit">Send</button>
        </form>
        <p>We will contact you shortly</p>
      </div>
    </div>
  ) : null;
}

export default ContactForm;
