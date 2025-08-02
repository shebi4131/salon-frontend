import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance"; // Make sure this file exists and points to your backend
import "../styles/ourServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/services"); // calling your backend: /api/services
        setServices(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Pamper yourself with our expert beauty solutions.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img
                  src={`/images/services/${service.image || "default.jpg"}`}
                  alt={service.name}
                  className="img-fluid"
                />
              </div>

              <div className="service-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>
                  <strong>Price:</strong> Rs. {service.price}
                </p>
                <Link to="/service-details" state={{ service }}>
                  <button className="btn-readmore">View More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
