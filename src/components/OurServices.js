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
        console.log("🌐 API Base URL:", process.env.REACT_APP_API_BASE);
        
        const apiUrl = `${process.env.REACT_APP_API_BASE}/api/services`;
        console.log("📡 Full API URL:", apiUrl);
        
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("📊 Response Status:", response.status);
        console.log("📊 Response OK:", response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("📥 Raw API Response:", data);
        console.log("📥 Response Type:", typeof data);
        console.log("📥 Is Array:", Array.isArray(data));

        if (data.success) {
          console.log("✅ API Success - Data:", data.data);
          console.log("✅ API Success - Count:", data.count);
          console.log("✅ API Success - Data Type:", typeof data.data);
          console.log("✅ API Success - Is Data Array:", Array.isArray(data.data));
          
          setServices(data.data);
          console.log(`✅ Successfully loaded ${data.count} services`);
        } else {
          console.error("❌ API returned success: false");
          console.error("❌ API Error:", data.error);
          setError("Failed to load services");
        }
      } catch (error) {
        console.error("❌ Network/Fetch Error:", error);
        console.error("❌ Error Stack:", error.stack);
        setError(`Network error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Add debug info to the rendered component
  console.log("🎨 Rendering - Services State:", services);
  console.log("🎨 Rendering - Services Length:", services.length);
  console.log("🎨 Rendering - Loading:", loading);
  console.log("🎨 Rendering - Error:", error);

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
            <p>{error}</p>
            <p>Please check the console for more details.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!services || services.length === 0) {
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
            <p style={{fontSize: '12px', color: '#666', marginTop: '20px'}}>
              Debug: Services array length is {services ? services.length : 'null/undefined'}
            </p>
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