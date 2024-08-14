import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Trips.css';

function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        // Update the API endpoint to match the backend route
        const response = await axios.get('http://localhost:8080/api/admin/trips');
        // Convert the image bytes to base64 string
        const tripsWithBase64Images = response.data.map(trip => ({
          ...trip,
          image: trip.image ? `data:image/jpeg;base64,${trip.image}` : null
        }));
        setTrips(tripsWithBase64Images);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trips:', error);
        setError('Failed to load trips. Please try again later.');
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="page-container trips-page">
      <h1>Trips</h1>
      <div className="trip-cards">
        {trips.map((trip, index) => (
          <div className="trip-card" key={index}>
            {trip.image && <img src={trip.image} alt={trip.name} />}
            <h3>{trip.name}</h3>
            <p>Location: {trip.location}</p>
            <p>Duration: {trip.duration}</p>
            <p>Best Time: {trip.bestTime}</p>
            <p>Temperature: {trip.temperature}</p>
            <p>Distance: {trip.distance}</p>
            <p>Upcoming Departure: {trip.upcomingDeparture}</p>
            <p>Rating: {trip.rating}</p>
            <p>{trip.details}</p>
            <Link to="/tripdetails" state={{ trip }}>
              <button>More Details</button>
            </Link>
            <Link to="/booknow"><button>Book Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;
