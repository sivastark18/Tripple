// src/components/TripDetails.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TripDetails.css';

function TripDetails() {
  const location = useLocation();
  const trip = location.state?.trip || {};

  return (
    <div className="page-container trip-details-page">
      <h1>{trip.name} Details</h1>
      <div className="trip-details-card">
        <img src={trip.image} alt={trip.name} />
        <h3>Location: {trip.location}</h3>
        <p>Duration: {trip.duration}</p>
        <p>Best Time: {trip.bestTime}</p>
        <p>Temperature: {trip.temperature}</p>
        <p>Distance: {trip.distance}</p>
        <p>Upcoming Departure: {trip.upcomingDeparture}</p>
        <p>Rating: {trip.rating}</p>
        <p>Details: {trip.details}</p>
        <Link to="/trips"><button>Back to Trips</button></Link>
      </div>
    </div>
  );
}

export default TripDetails;
