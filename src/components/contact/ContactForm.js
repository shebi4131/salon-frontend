import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../../styles/contactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section py-5">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="form-heading">Send Us a Message</h2>
            <p className="form-subtext">
              We'd love to help you. Fill out the form and we'll get back to you shortly.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left: Contact Form */}
          <div className="col-lg-6 mb-4">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right: Contact Info */}
<div className="col-lg-6 mb-4 contact-info-box">
  <h3 className="contact-info-title">✨ Reach Amna's Glow ✨</h3>

  <div className="contact-info-item">
    <FaMapMarkerAlt className="contact-icon" />
    <div>
      <h5>Location</h5>
      <p>123 Beauty Lane, Glamour City</p>
    </div>
  </div>
  <div className="contact-info-item">
    <FaPhoneAlt className="contact-icon" />
    <div>
      <h5>Phone</h5>
      <p>+92 300 1234567</p>
    </div>
  </div>
  <div className="contact-info-item">
    <FaEnvelope className="contact-icon" />
    <div>
      <h5>Email</h5>
      <p>info@beautysalon.com</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
