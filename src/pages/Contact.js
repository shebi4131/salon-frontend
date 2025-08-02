import React from 'react';
import ContactHero from '../components/contact/ContactHero.js';
import ContactForm from '../components/contact/ContactForm.js';
import Footer from '../components/Footer.js';
import GoogleMap from '../components/contact/GoogleMap.js';

const Contact = () => {
  return (
    <>
      <ContactHero />
        <ContactForm />
        <GoogleMap />
        <Footer />
    </>
  );
};

export default Contact;
