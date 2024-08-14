import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    alert('Logged out successfully!');
    // For example, you can clear user data from localStorage and redirect to login page
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="profile-container">
      <FontAwesomeIcon
        icon={faUserCircle}
        className="profile-icon"
        onClick={toggleProfile} />
      {isOpen && (
        <div className="profile-dropdown">
          <p>Name:{user.name}</p>
          <p>Email:{user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
