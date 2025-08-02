import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder behavior
    if (form.email && form.password) {
      navigate('/home');
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', borderRadius: '20px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {showAlert && (
          <div className="alert alert-danger text-center">Invalid input!</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#b96fb0' }}>
            Login
          </button>
        </form>

        <div className="text-center mt-3 mb-2 text-muted">or</div>

        <button className="btn btn-outline-dark w-100" disabled>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" className="me-2" />
          Login with Google (Coming Soon)
        </button>

        <p className="text-center mt-2">
          New user? <a href="/signup" className="text-decoration-none" style={{ color: '#b96fb0' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
