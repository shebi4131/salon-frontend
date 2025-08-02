import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaClock, FaCheckCircle } from 'react-icons/fa';
import '../styles/singleService.css';

function SingleService() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  // Fallback for lost state on refresh
  useEffect(() => {
    if (state?.service) {
      setService(state.service);
    } else {
      // Optional: redirect or show graceful fallback
      navigate('/our-services'); // Redirect to main services page
    }
  }, [state, navigate]);

  if (!service) {
    return (
      <div className="container my-5">
        <h3>Redirecting to Our Services...</h3>
      </div>
    );
  }

  return (
    <div className="single-service container my-5 py-4 px-3 shadow-lg rounded bg-light">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={service.image || '/images/placeholder.jpg'} // default fallback image
            alt={service.title || 'Service Image'}
            className="img-fluid service-image shadow-sm rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description text-muted">{service.description}</p>

          <div className="service-details mb-3">
            <p>
              <FaClock className="icon text-secondary me-2" />
              <strong>Duration:</strong> {service.duration}
            </p>
            <p><strong>Price:</strong> {service.price}</p>
          </div>

          <ul className="service-highlights ps-3">
            {(service.highlights || []).map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon me-2 text-success" />
                {item}
              </li>
            ))}
          </ul>

          <Link to="/booking" className="btn btn-custom mt-4">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
