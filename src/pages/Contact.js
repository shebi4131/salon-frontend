import React from 'react';
import ContactHero from '../components/contact/ContactHero.js';
import ContactForm from '../components/contact/ContactForm.js';
import Footer from '../components/Footer.js';

const Contact = () => {
  return (
    <>
      <ContactHero />
        <ContactForm />
        <Footer />
    </>
  );
};

export default Contact;
