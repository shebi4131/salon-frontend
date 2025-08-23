import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaClock, FaCheckCircle, FaStar, FaArrowLeft, FaHeart, FaShare, FaTag } from 'react-icons/fa';
import '../styles/singleService.css';

function SingleService() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  // Fallback for lost state on refresh
  useEffect(() => {
    if (state?.service) {
      setService(state.service);
    } else {
      // Optional: redirect or show graceful fallback
      navigate('/our-services'); // Redirect to main services page
    }
  }, [state, navigate]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: service?.name || 'Beauty Service',
        text: service?.description || 'Check out this amazing beauty service!',
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!service) {
    return (
      <div className="detail-page-loading">
        <div className="loading-spinner-detail">
          <div className="spinner-detail"></div>
          <h3>Redirecting to Our Services...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Header */}
      <div className="detail-hero-section">
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <button className="detail-back-button" onClick={() => navigate('/our-services')}>
            <FaArrowLeft /> Back to Services
          </button>
          <div className="detail-hero-text">
            <h1 className="detail-page-title">{service.name}</h1>
            <div className="detail-hero-meta">
              <span className="detail-rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span className="detail-rating-text">5.0 (127 reviews)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="detail-main-container">
        <div className="detail-content-wrapper">
          
          {/* Left Side - Image Section */}
          <div className="detail-image-column">
            <div className="detail-main-image-wrapper">
              <img
                src={service.imageUrl || service.image || '/images/placeholder.jpg'}
                alt={service.name || service.title || 'Service Image'}
                className="detail-main-image"
                onError={(e) => {
                  e.target.src = "/images/services/default-service.jpg";
                }}
              />
              <div className="detail-image-actions">
                <button 
                  className={`detail-action-btn detail-like-btn ${isLiked ? 'liked' : ''}`}
                  onClick={handleLike}
                >
                  <FaHeart />
                </button>
                <button className="detail-action-btn detail-share-btn" onClick={handleShare}>
                  <FaShare />
                </button>
              </div>
            </div>
            
            {/* Image Gallery Thumbnails */}
            <div className="detail-image-gallery">
              <div className="detail-gallery-item active">
                <img src={service.imageUrl || service.image || '/images/placeholder.jpg'} alt="View 1" />
              </div>
              <div className="detail-gallery-item">
                <img src={service.imageUrl || service.image || '/images/placeholder.jpg'} alt="View 2" />
              </div>
              <div className="detail-gallery-item">
                <img src={service.imageUrl || service.image || '/images/placeholder.jpg'} alt="View 3" />
              </div>
              <div className="detail-gallery-more">
                <span>+3 more</span>
              </div>
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="detail-info-column">
            <div className="detail-service-header">
              <h2 className="detail-service-name">{service.name || service.title}</h2>
              <div className="detail-service-badges">
                <span className="detail-badge premium">Premium</span>
                <span className="detail-badge popular">Most Popular</span>
              </div>
            </div>

            <p className="detail-service-desc">{service.description}</p>

            {/* Service Info Cards */}
            <div className="detail-service-info">
              <div className="detail-info-card">
                <div className="detail-info-icon">
                  <FaClock />
                </div>
                <div className="detail-info-content">
                  <span className="detail-info-label">Duration</span>
                  <span className="detail-info-value">{service.duration} mins</span>
                </div>
              </div>
              
              <div className="detail-info-card detail-price-card">
                <div className="detail-info-icon">
                  <FaTag />
                </div>
                <div className="detail-info-content">
                  <span className="detail-info-label">Price</span>
                  <span className="detail-info-value">Rs. {service.price}</span>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="detail-service-features">
              <h3 className="detail-features-title">What's Included</h3>
              <ul className="detail-features-list">
                {(service.highlights || [
                  'Professional consultation',
                  'Premium quality products', 
                  'Expert application',
                  'Post-service care guidance',
                  'Satisfaction guarantee'
                ]).map((item, index) => (
                  <li key={index} className="detail-feature-item">
                    <FaCheckCircle className="detail-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Card */}
            <div className="detail-booking-card">
              <div className="detail-price-summary">
                <div className="detail-original-price">Rs. {parseInt(service.price) + 500}</div>
                <div className="detail-current-price">Rs. {service.price}</div>
                <div className="detail-savings">Save Rs. 500</div>
              </div>
              
              <Link to="/booking" state={{ service }} className="detail-book-button">
                <span>Book This Service</span>
                <span className="detail-button-arrow">→</span>
              </Link>
              
              <div className="detail-booking-notes">
                <span>📅 Available slots today</span>
                <span>✨ Free cancellation up to 24hrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="detail-additional-section">
          <div className="detail-tab-nav">
            <button className="detail-tab-btn active">About Service</button>
            <button className="detail-tab-btn">Reviews</button>
            <button className="detail-tab-btn">FAQ</button>
          </div>
          
          <div className="detail-tab-content">
            <div className="detail-about-content">
              <h4 className="detail-about-title">About This Service</h4>
              <p className="detail-about-text">
                Experience the ultimate in luxury beauty treatments with our premium {(service.name || service.title)?.toLowerCase()} service. 
                Our expert beauticians use only the finest products and latest techniques to ensure you receive 
                exceptional results that exceed your expectations.
              </p>
              <div className="detail-service-perks">
                <div className="detail-perk">
                  <span className="detail-perk-icon">🌟</span>
                  <span>Professional Grade Products</span>
                </div>
                <div className="detail-perk">
                  <span className="detail-perk-icon">👩‍💼</span>
                  <span>Certified Beauticians</span>
                </div>
                <div className="detail-perk">
                  <span className="detail-perk-icon">🏆</span>
                  <span>Award-Winning Service</span>
                </div>
                <div className="detail-perk">
                  <span className="detail-perk-icon">💯</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleService;