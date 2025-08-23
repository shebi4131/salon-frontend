import React, { useEffect, useState } from "react";
import "../styles/ourServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("🔄 Fetching services...");
        
        const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/services`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("📥 API Response:", data);

        if (data.success) {
          setServices(data.data);
          console.log(`✅ Successfully loaded ${data.count} services`);
        } else {
          setError("Failed to load services");
          console.error("❌ API Error:", data.error);
        }
      } catch (error) {
        setError("Network error occurred");
        console.error("❌ Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="services-section">
        <div className="container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading our beautiful services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="services-section">
        <div className="container">
          <div className="error-state">
            <div className="error-icon">💄</div>
            <h3>Oops! Something went wrong</h3>
            <p>We're having trouble loading our services. Please try refreshing the page.</p>
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Beauty Services</h2>
            <div className="title-underline"></div>
          </div>
          <div className="empty-state">
            <div className="empty-icon">✨</div>
            <h3>Coming Soon!</h3>
            <p>We're preparing amazing beauty services for you.</p>
            <p>Stay tuned for our grand reveal!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Transform your beauty with our expert treatments and luxurious salon experience
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card card-${(index % 4) + 1}`} key={service._id}>
              <div className="card-inner">
                <div className="service-image">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="service-img"
                    onError={(e) => {
                      e.target.src = "/images/services/default-service.jpg";
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="view-icon">✨</span>
                      <span>Discover More</span>
                     
                  
                    </div>
                  </div>
                </div>

                <div className="service-content">
                   <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-info">
                    <div className="info-item">
                      <span className="info-icon">💰</span>
                      <span className="info-text">CAD. {service.price}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">⏰</span>
                      <span className="info-text">{service.duration} mins</span>
                    </div>
                  </div>
                      <Link to="/service-details" state={{ service }} className="service-link">
                    <button className="book-now-btn">
                      <span>Book Now</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <p className="footer-text">✨ Experience luxury like never before ✨</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;