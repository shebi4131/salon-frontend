import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import OurServices from '../components/OurServices';
import BeforeAfterSlider from '../components/services/BeforeAfterSlider';
import FaqSection from '../components/FaqSection';
import BookingCTA from '../components/BookingCTA';
import Footer from '../components/Footer';
import { FaQ } from 'react-icons/fa6';

function Services() {
return (
    <>
      <ServicesHero />
      <OurServices />
      <BeforeAfterSlider />
      <FaqSection />
      <BookingCTA/>
      <Footer/>
    </>
  );
};
export default Services;
