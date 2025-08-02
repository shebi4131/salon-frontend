import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setSuccessMessage("Signup successful!");
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#fef8f5' }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', borderRadius: '20px' }}>
        <h2 className="text-center mb-3">Create Account</h2>

        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#b96fb0' }}>
            Sign Up
          </button>
        </form>

        <hr className="my-4" />

        <button className="btn btn-outline-dark w-100" disabled>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" className="me-2" />
          Sign Up with Google (Coming Soon)
        </button>

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-decoration-none" style={{ color: '#b96fb0' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
