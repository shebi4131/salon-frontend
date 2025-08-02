import React from 'react';
import '../../styles/contactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section py-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="form-heading">Send Us a Message</h2>
            <p className="form-subtext">
              We'd love to help you. Fill out the form and we'll get back to you shortly.
            </p>
          </div>
        </div>

        <form className="contact-form mx-auto">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
