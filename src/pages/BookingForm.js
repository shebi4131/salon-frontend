import { useState } from 'react';
import '../styles/forms.css';

function BookingForm() {
  const [booking, setBooking] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    timeSlot: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage("🎉 Booking saved (frontend only)");
    setTimeout(() => setMessage(''), 3000);
    setBooking({
      customerName: '',
      email: '',
      phone: '',
      serviceId: '',
      date: '',
      timeSlot: ''
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Book an Appointment</h2>

        {message && <div className="alert alert-info text-center">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Full Name</label>
            <input type="text" className="form-control" name="customerName" value={booking.customerName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={booking.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Phone</label>
            <input type="text" className="form-control" name="phone" value={booking.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Service</label>
            <select className="form-select" name="serviceId" value={booking.serviceId} onChange={handleChange} required>
              <option value="">-- Select --</option>
              <option value="1">Bridal Makeup</option>
              <option value="2">Hair Styling</option>
              <option value="3">Facial & Glow</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Date</label>
            <input type="date" className="form-control" name="date" value={booking.date} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Time Slot</label>
            <input type="time" className="form-control" name="timeSlot" value={booking.timeSlot} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#b96fb0' }}>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
