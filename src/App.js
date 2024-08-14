import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import TripDetails from './components/TripDetails';
import Gallery from './components/Gallery';
import Booked from './components/Booked';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import BookNow from './components/BookNow';
import JoinCommunity from './components/JoinCommunity';
import SeeCommunities from './components/SeeCommunities';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import YamahaBlog from './components/YamahaBlog';
import HondaBlog from './components/HondaBlog';
import RoyalEnfieldBlog from './components/RoyalEnfieldBlog';
import BajajBlog from './components/BajajBlog';
import EstccBlog from './components/EstccBlog';
import './App.css';
import logo from "./components/images/logo.jpg";

function App() {
    const [joinedCommunities, setJoinedCommunities] = useState([]);
    const userEmail = 'user@example.com'; // Replace with the actual user's email

    const handleJoinCommunity = (communityName) => {
        if (!joinedCommunities.includes(communityName)) {
            setJoinedCommunities([...joinedCommunities, communityName]);
        }
    };

    return (
        <Router>
            <AppContent
                joinedCommunities={joinedCommunities}
                handleJoinCommunity={handleJoinCommunity}
                userEmail={userEmail}
            />
        </Router>
    );
}

function AppContent({ joinedCommunities, handleJoinCommunity, userEmail }) {
    const location = useLocation();
    const showNavAndFooter = location.pathname !== '/' && location.pathname !== '/admin-dashboard';

    return (
        <div className="App">
            {showNavAndFooter && (
                <>
                    <nav className="navbar">
                        <div className="logo-container">
                            <img src={logo} alt="Tripple Logo" className="logo" />
                            <h1 className="tripple-animated">Tripple</h1>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/trips">Trips</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/booked">Booked</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li className="dropdown">
                                <span className="dropdown-toggle">Join Community</span>
                                <div className="dropdown-menu">
                                    <Link to="/join-community">Join Community</Link>
                                    <Link to="/see-communities">See Communities Joined</Link>
                                </div>
                            </li>
                            <li><Link to="/booknow" className="navbar-booknow">Book Now</Link></li>
                        </ul>
                        <div className="nav-right">
                            <Link to="/" className="navbar-login">Login</Link>
                            <Profile />
                        </div>
                    </nav>
                </>
            )}
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/tripdetails" element={<TripDetails />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/booked" element={<Booked />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/booknow" element={<BookNow />} />
                <Route path="/join-community" element={<JoinCommunity onJoinCommunity={handleJoinCommunity} />} />
                <Route path="/see-communities" element={<SeeCommunities joinedCommunities={joinedCommunities} />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/yamaha-blog" element={<YamahaBlog />} />
                <Route path="/honda-blog" element={<HondaBlog />} />
                <Route path="/royalenfield-blog" element={<RoyalEnfieldBlog />} />
                <Route path="/bajaj-blog" element={<BajajBlog />} />
                <Route path="/estcc-blog" element={<EstccBlog />} />
            </Routes>
            {showNavAndFooter && <Footer />}
        </div>
    );
}

export default App;
