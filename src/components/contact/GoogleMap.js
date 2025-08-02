// src/components/GoogleMap.js
import React from 'react';
import '../../styles/googleMap.css';

const GoogleMap = () => {
  return (
    <div className="google-map-container">
      <iframe
        title="Salon Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9612452306325!2d73.0550951152098!3d33.684420480708576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7e297a5679%3A0x8820d4442710ba8c!2sCentaurus%20Mall!5e0!3m2!1sen!2s!4v1690709441635!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
