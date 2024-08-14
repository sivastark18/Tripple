// src/components/Booked.js
import React from 'react';
import './Booked.css';
import mountadv from "./images/g10.jpg";
import costaladv from "./images/g3.jpg";

function Booked() {
  return (
    <div className="booked-page">
      <h1>Booked Trips</h1>
      <div className="trip-cards">
        {/* Example for upcoming trips */}
        <div className="trip-card">
          <img src={mountadv} alt="Trip 1" />
          <h3>Upcoming Trip: Mountain Adventure</h3>
          <p>Location: Alps</p>
          <p>Duration: 5 days</p>
          <p>Departure: 12th Aug 2024</p>
        </div>
        {/* Example for completed trips */}
        <div className="trip-card completed">
          <img src={costaladv} alt="Trip 2" />
          <h3>Completed Trip: Coastal Cruise</h3>
          <p>Location: California Coast</p>
          <p>Duration: 4 days</p>
          <p>Date: 15th May 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Booked;