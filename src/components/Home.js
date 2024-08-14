import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import hikeimage from "./images/hike.jpeg";
import desert from "./images/desert.jpeg";
import coast from "./images/coast.jpeg";
import companyImage from "./images/logo.jpg";
import yamahaImg from './images/yamaha.jpeg';
import hondaImg from './images/honda.jpeg';

function Home() {
  const [showMore, setShowMore] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleToggle = () => setShowMore(!showMore);

  return (
    <div className="home">
      <header className="home-header">
        <div className='h1title'>
          <h2>Welcome, {user ? user.name : 'Guest'}!</h2>
          <h1>TRIPPLE</h1>
          <p>Ride. Roam. Repeat</p>
        </div>
      </header>

      <div className="home-content">
        <section className="company-description">
          <div className="company-card">
            <img src={companyImage} alt="Company" className="company-image" />
            <div className="company-info">
              <h2>About Us</h2>
              <p>
                At TRIPPLE, we connect adventure enthusiasts who love to explore the world on two wheels. 
                Whether you're a seasoned rider or a newbie, join us to make unforgettable memories and friendships.
              </p>
              <button onClick={handleToggle}>
                {showMore ? 'Show Less' : 'Know More'}
              </button>
              {showMore && (
                <div className="detailed-description">
                  <p>
                    We provide a platform for bikers and travelers to find and book organized trips.
                    Our team of experienced trip organizers ensures a safe and enjoyable experience,
                    tailored to your interests and skill level. Join our community and embark on your next adventure with us!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="trips-section">
          <h2>Trips</h2>
          <div className="trips-cards">
            <div className="trip-card">
              <img src={hikeimage} alt="Trip 1" />
              <h3>Mountain Adventure</h3>
              <p>Explore the breathtaking mountain trails.</p>
              <Link to="/trips"><button>Explore More</button></Link>
            </div>
            <div className="trip-card">
              <img src={desert} alt="Trip 2" />
              <h3>Desert Safari</h3>
              <p>Experience the thrill of desert riding.</p>
              <Link to="/trips"><button>Explore More</button></Link>
            </div>
            <div className="trip-card">
              <img src={coast} alt="Trip 3" />
              <h3>Coastal Cruise</h3>
              <p>Ride along the beautiful coastline.</p>
              <Link to="/trips"><button>Explore More</button></Link>
            </div>
          </div>
        </section>

        <section className="communities-section">
          <h2>Featured Communities</h2>
          <div className="communities-cards">
            <div className="community-card">
              <img src={yamahaImg} alt="Yamaha Community" />
              <h3>Yamaha Riders</h3>
              <p>Join fellow Yamaha enthusiasts for exciting rides and discussions.</p>
              <Link to="/join-community"><button>Join Now</button></Link>
            </div>
            <div className="community-card">
              <img src={hondaImg} alt="Honda Community" />
              <h3>Honda Bikers</h3>
              <p>Connect with Honda riders and share your passion for the brand.</p>
              <Link to="/join-community"><button>Join Now</button></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;