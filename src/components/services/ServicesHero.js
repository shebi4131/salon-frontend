import React from 'react';
import '../../styles/servicesHero.css'; // Adjust path if needed

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">Our Beauty Services</h1>
          <p className="hero-subtitle">Unleash your inner glow with our professional care</p>
          <a href="#services" className="hero-btn">Explore Services</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
