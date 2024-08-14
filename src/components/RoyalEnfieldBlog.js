import React from 'react';
import './CommunityBlog.css';
import royalEnfieldImg from './images/ree.jpg';

function RoyalEnfieldBlog() {
  return (
    <div className="community-blog">
      <h1>Royal Enfield Community</h1>
      <img src={royalEnfieldImg} alt="Royal Enfield" className="community-blog-image" />
      <div className="blog-content">
        <section className="blog-section">
          <h2>About Royal Enfield Community</h2>
          <p>The Community
The Royal Enfield community is a unique blend of old-school charm and modern-day camaraderie. It's a place where experienced riders share their wisdom with newcomers, where long-distance adventures are planned, and where the simple joy of riding is celebrated.   

Key characteristics of the Royal Enfield community include:

Passion for riding: The core of the community is a shared love for motorcycles, especially Royal Enfields.
Adventure spirit: Many Royal Enfield riders are drawn to exploration and long-distance touring.   
DIY ethos: A strong emphasis on self-reliance and motorcycle customization.
Strong sense of camaraderie: A deep bond among riders, fostering a supportive and inclusive environment.</p>
        </section>
        <section className="blog-section">
          <h2>Upcoming Trips & News</h2>
          <p>Himalayan Challenges: Given the popularity of the Himalayan, there might be organized expeditions or challenges in mountainous regions.</p>
          <p>Long-Distance Rides: Royal Enfield enthusiasts are known for their long-distance rides, and the company might support or organize such events.</p>
          <p>Community Rides: Local chapters and riding clubs often organize group rides and meetups.   </p>

        </section>
        <section className="blog-section">
          <h2>Live Updates</h2>
          <p>Live updates or real-time chat .</p>
        </section>
      </div>
      <div className="chat-options">
        <button onClick={() => window.open('mailto:support@royalenfield.com')}>Chat via Gmail</button>
        <button onClick={() => window.open('https://wa.me/yourNumber')}>Chat via WhatsApp</button>
      </div>
    </div>
  );
}

export default RoyalEnfieldBlog;
