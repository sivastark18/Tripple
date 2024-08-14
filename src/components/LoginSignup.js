import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';
import ToggleColorMode from './ToggleColorMode';
import googleLogo from './images/google.png';
import facebookLogo from './images/fb.png';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeTab === 'signup' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const endpoint = activeTab === 'login' ? 'http://localhost:8080/api/users/login' : 'http://localhost:8080/api/users/signup';
      const response = await axios.post(endpoint, formData);
      console.log('Response:', response.data);
      setSuccess('Operation successful!');
      setError('');
      
      if (activeTab === 'login') {
        localStorage.setItem('user', JSON.stringify(response.data));

        // Check if email contains "admin"
        if (response.data.email.includes('admin')) {
          setTimeout(() => {
            navigate('/admin-dashboard'); // Redirect to the admin dashboard
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('/home'); // Redirect to the home page
          }, 2000);
        }
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setError('An error occurred: ' + (error.response?.data || error.message));
      setSuccess('');
    }
  };

  return (
    <ToggleColorMode>
      <div className="content-wrapper">
        <h1 className="company-title">Tripple</h1>
        <div className="tab-container">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => handleTabClick('signup')}
          >
            Signup
          </button>
        </div>

        <div className="form-container">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          {activeTab === 'login' && (
            <div className="form-content">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="submit-btn">Login</button>
              </form>
              <div className="social-login">
                <button className="social-btn google">
                  <div className="logo">
                    <img src={googleLogo} alt="Google" />
                  </div>
                  Login with Google
                </button>
                <button className="social-btn facebook">
                  <div className="logo">
                    <img src={facebookLogo} alt="Facebook" />
                  </div>
                  Login with Facebook
                </button>
              </div>
            </div>
          )}

          {activeTab === 'signup' && (
            <div className="form-content">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="submit-btn">Signup</button>
              </form>
              <div className="social-login">
                <button className="social-btn google">
                  <div className="logo">
                    <img src={googleLogo} alt="Google" />
                  </div>
                  Signup with Google
                </button>
                <button className="social-btn facebook">
                  <div className="logo">
                    <img src={facebookLogo} alt="Facebook" />
                  </div>
                  Signup with Facebook
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ToggleColorMode>
  );
}

export default LoginSignup;
