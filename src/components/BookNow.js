import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import './BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    riderName: '',
    riderAge: '',
    riderGender: '',
    riderExperience: '',
    riderContact: '',
    riderEmail: '',
    tourName: '',
    accommodationType: '',
    numRiders: '',
    tripType: '',
    bikeType: '',
    bikeModel: ''
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/bookings/submit', formData);
      console.log('Form submitted successfully:', response.data);
      setIsPopupVisible(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="book-now-page">
      <h1 className="fade-in">Book Tour</h1>
      <form className="book-now-form" onSubmit={handleSubmit}>
        {/* Riders Information */}
        <fieldset className="fade-in">
          <legend>Riders Information</legend>
          <label>
            Name:
            <input type="text" name="riderName" value={formData.riderName} onChange={handleChange} placeholder="Enter your name" required />
          </label>
          <label>
            Age:
            <input type="number" name="riderAge" value={formData.riderAge} onChange={handleChange} placeholder="Enter your age" required />
          </label>
          <label>
            Gender:
            <select name="riderGender" value={formData.riderGender} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Riders Experience:
            <input type="text" name="riderExperience" value={formData.riderExperience} onChange={handleChange} placeholder="Describe your experience" />
          </label>
          <label>
            Contact Number:
            <input type="tel" name="riderContact" value={formData.riderContact} onChange={handleChange} placeholder="Enter your contact number" required />
          </label>
          <label>
            Email:
            <input type="email" name="riderEmail" value={formData.riderEmail} onChange={handleChange} placeholder="Enter your email" required />
          </label>
        </fieldset>

        {/* Trip Details */}
        <fieldset className="fade-in">
          <legend>Trip Details</legend>
          <label>
            Tour Name:
            <input type="text" name="tourName" value={formData.tourName} onChange={handleChange} placeholder="Enter the tour name" required />
          </label>
          <label>
            Accommodation Type:
            <select name="accommodationType" value={formData.accommodationType} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="hotel">Hotel</option>
              <option value="camping">Camping</option>
              <option value="hostel">Hostel</option>
            </select>
          </label>
          <label>
            Number of Riders:
            <input type="number" name="numRiders" value={formData.numRiders} onChange={handleChange} placeholder="Enter the number of riders" required />
          </label>
          <label>
            Trip Type:
            <select name="tripType" value={formData.tripType} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="adventure">Adventure</option>
              <option value="leisure">Leisure</option>
              <option value="cultural">Cultural</option>
            </select>
          </label>
        </fieldset>

        {/* Bikes Information */}
        <fieldset className="fade-in">
          <legend>Bikes Information</legend>
          <label>
            Bike Type:
            <select name="bikeType" value={formData.bikeType} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="mountain">Mountain</option>
              <option value="road">Road</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>
          <label>
            Bike Model:
            <input type="text" name="bikeModel" value={formData.bikeModel} onChange={handleChange} placeholder="Enter the bike model" required />
          </label>
        </fieldset>

        <button type="submit" className="fade-in">Book!</button>
      </form>

      <CSSTransition
        in={isPopupVisible}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div className="popup-overlay">
          <div className="popup">
            <h2>Success!</h2>
            <p>Your form has been submitted successfully.</p>
            <button onClick={closePopup} className="close-button">Close</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default BookNow;
