import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css'; 

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]); // Add state for users
  const [error, setError] = useState('');
  const [editBooking, setEditBooking] = useState(null);
  const [editTrip, setEditTrip] = useState(null);
  const [editUser, setEditUser] = useState(null); // Add state for editing users
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingsTripsAndUsers = async () => {
      try {
        // Fetch Bookings
        const bookingsResponse = await axios.get('http://localhost:8080/api/bookings');
        if (Array.isArray(bookingsResponse.data)) {
          setBookings(bookingsResponse.data);
        } else {
          setError('Data format is incorrect. Expected an array for bookings.');
        }

        // Fetch Trips
        const tripsResponse = await axios.get('http://localhost:8080/api/admin/trips');
        if (Array.isArray(tripsResponse.data)) {
          setTrips(tripsResponse.data);
        } else {
          setError('Data format is incorrect. Expected an array for trips.');
        }

        // Fetch Users
        const usersResponse = await axios.get('http://localhost:8080/api/users');
        if (Array.isArray(usersResponse.data)) {
          setUsers(usersResponse.data);
        } else {
          setError('Data format is incorrect. Expected an array for users.');
        }

      } catch (err) {
        setError('Failed to fetch data: ' + (err.response?.data || err.message));
      }
    };

    fetchBookingsTripsAndUsers();
  }, []);

  const handleLogout = () => {
    // Perform any logout logic here, like clearing tokens or session data
    navigate('/');
  };

  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (err) {
      setError('Failed to delete booking: ' + (err.response?.data || err.message));
    }
  };

  const handleEditBooking = (booking) => {
    setEditBooking(booking);
  };

  const handleEditBookingChange = (e) => {
    const { name, value } = e.target;
    setEditBooking({
      ...editBooking,
      [name]: value
    });
  };

  const handleUpdateBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/bookings/${editBooking.id}`, editBooking);
      setBookings(bookings.map(b => b.id === editBooking.id ? editBooking : b));
      setEditBooking(null);
    } catch (err) {
      setError('Failed to update booking: ' + (err.response?.data || err.message));
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/trips/${id}`);
      setTrips(trips.filter(trip => trip.id !== id));
    } catch (err) {
      setError('Failed to delete trip: ' + (err.response?.data || err.message));
    }
  };

  const handleEditTrip = (trip) => {
    setEditTrip(trip);
  };

  const handleEditTripChange = (e) => {
    const { name, value } = e.target;
    setEditTrip({
      ...editTrip,
      [name]: value
    });
  };

  const handleUpdateTrip = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/admin/trips/${editTrip.id}`, editTrip);
      setTrips(trips.map(t => t.id === editTrip.id ? editTrip : t));
      setEditTrip(null);
    } catch (err) {
      setError('Failed to update trip: ' + (err.response?.data || err.message));
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError('Failed to delete user: ' + (err.response?.data || err.message));
    }
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleEditUserChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value
    });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/users/${editUser.id}`, editUser);
      setUsers(users.map(u => u.id === editUser.id ? editUser : u));
      setEditUser(null);
    } catch (err) {
      setError('Failed to update user: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      {error && <div className="error-message">{error}</div>}

      {/* Bookings Table */}
      <div className="bookings-container">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          <div className="table-responsive">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Experience</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Tour Name</th>
                  <th>Accommodation</th>
                  <th>Riders</th>
                  <th>Trip Type</th>
                  <th>Bike Type</th>
                  <th>Bike Model</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.riderName}</td>
                    <td>{booking.riderAge}</td>
                    <td>{booking.riderGender}</td>
                    <td>{booking.riderExperience}</td>
                    <td>{booking.riderContact}</td>
                    <td>{booking.riderEmail}</td>
                    <td>{booking.tourName}</td>
                    <td>{booking.accommodationType}</td>
                    <td>{booking.numRiders}</td>
                    <td>{booking.tripType}</td>
                    <td>{booking.bikeType}</td>
                    <td>{booking.bikeModel}</td>
                    <td>
                      <button onClick={() => handleEditBooking(booking)}>Edit</button>
                      <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-bookings">No bookings available.</p>
        )}
      </div>

      {/* Trips Table */}
      <div className="trips-container">
        {Array.isArray(trips) && trips.length > 0 ? (
          <div className="table-responsive">
            <table className="trips-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Duration</th>
                  <th>Best Time</th>
                  <th>Temperature</th>
                  <th>Distance</th>
                  <th>Upcoming Departure</th>
                  <th>Rating</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip) => (
                  <tr key={trip.id}>
                    <td>{trip.id}</td>
                    <td>{trip.name}</td>
                    <td>{trip.location}</td>
                    <td>{trip.duration}</td>
                    <td>{trip.bestTime}</td>
                    <td>{trip.temperature}</td>
                    <td>{trip.distance}</td>
                    <td>{trip.upcomingDeparture}</td>
                    <td>{trip.rating}</td>
                    <td>{trip.details}</td>
                    <td>
                      <button onClick={() => handleEditTrip(trip)}>Edit</button>
                      <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-trips">No trips available.</p>
        )}
      </div>

      {/* Users Table */}
      <div className="users-container">
        {Array.isArray(users) && users.length > 0 ? (
          <div className="table-responsive">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => handleEditUser(user)}>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-users">No users available.</p>
        )}
      </div>

      {/* Edit Booking Form */}
      {editBooking && (
        <div className="edit-form">
          <h2>Edit Booking</h2>
          <form onSubmit={handleUpdateBooking}>
            {/* Booking form fields */}
            <label>
              Name:
              <input type="text" name="riderName" value={editBooking.riderName} onChange={handleEditBookingChange} />
            </label>
            <label>
              Age:
              <input type="number" name="riderAge" value={editBooking.riderAge} onChange={handleEditBookingChange} />
            </label>
            <label>
              Gender:
              <input type="text" name="riderGender" value={editBooking.riderGender} onChange={handleEditBookingChange} />
            </label>
            <label>
              Experience:
              <input type="text" name="riderExperience" value={editBooking.riderExperience} onChange={handleEditBookingChange} />
            </label>
            <label>
              Contact:
              <input type="text" name="riderContact" value={editBooking.riderContact} onChange={handleEditBookingChange} />
            </label>
            <label>
              Email:
              <input type="email" name="riderEmail" value={editBooking.riderEmail} onChange={handleEditBookingChange} />
            </label>
            <label>
              Tour Name:
              <input type="text" name="tourName" value={editBooking.tourName} onChange={handleEditBookingChange} />
            </label>
            {/* Other fields as necessary */}
            <button type="submit">Update Booking</button>
            <button type="button" onClick={() => setEditBooking(null)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Edit Trip Form */}
      {editTrip && (
        <div className="edit-form">
          <h2>Edit Trip</h2>
          <form onSubmit={handleUpdateTrip}>
            {/* Trip form fields */}
            <label>
              Name:
              <input type="text" name="name" value={editTrip.name} onChange={handleEditTripChange} />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={editTrip.location} onChange={handleEditTripChange} />
            </label>
            <label>
              Duration:
              <input type="text" name="duration" value={editTrip.duration} onChange={handleEditTripChange} />
            </label>
            <label>
              Best Time:
              <input type="text" name="bestTime" value={editTrip.bestTime} onChange={handleEditTripChange} />
            </label>
            <label>
              Temperature:
              <input type="text" name="temperature" value={editTrip.temperature} onChange={handleEditTripChange} />
            </label>
            <label>
              Distance:
              <input type="text" name="distance" value={editTrip.distance} onChange={handleEditTripChange} />
            </label>
            <label>
              Upcoming Departure:
              <input type="text" name="upcomingDeparture" value={editTrip.upcomingDeparture} onChange={handleEditTripChange} />
            </label>
            <label>
              Rating:
              <input type="text" name="rating" value={editTrip.rating} onChange={handleEditTripChange} />
            </label>
            <label>
              Details:
              <textarea name="details" value={editTrip.details} onChange={handleEditTripChange} />
            </label>
            {/* Other fields as necessary */}
            <button type="submit">Update Trip</button>
            <button type="button" onClick={() => setEditTrip(null)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Edit User Form */}
      {editUser && (
        <div className="edit-form">
          <h2>Edit User</h2>
          <form onSubmit={handleUpdateUser}>
            {/* User form fields */}
            <label>
              Username:
              <input type="text" name="username" value={editUser.username} onChange={handleEditUserChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={editUser.email} onChange={handleEditUserChange} />
            </label>
            <label>
              Role:
              <input type="text" name="role" value={editUser.role} onChange={handleEditUserChange} />
            </label>
            {/* Other fields as necessary */}
            <button type="submit">Update User</button>
            <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
