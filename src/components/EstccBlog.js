import React from 'react';
import './CommunityBlog.css';
import estccImg from './images/dirt.jpeg';

function EstccBlog() {
  return (
    <div className="community-blog">
      <h1>Monster Community</h1>
      <img src={estccImg} alt="Estcc" className="community-blog-image" />
      <div className="blog-content">
        <section className="blog-section">
          <h2>About Monster Community</h2>
          <p>The Dirt Bike Community is a passionate group of off-road motorcycle enthusiasts who enjoy the thrill of riding across various terrains. From deserts to forests, this community is all about adventure, skill, and camaraderie.</p>
        </section>
        <section className="blog-section">
          <h2>Upcoming Trips & News</h2>
          <p>Desert Dash Adventure</p>

<p>Date: September 15-17, 2024</p>
<p>Location: Mojave Desert, California</p>
<p>Details: A three-day ride through the challenging dunes and rugged terrain of the Mojave Desert. The trip includes overnight camping under the stars. Suitable for intermediate to advanced riders.</p>
<p>Registration: Sign up by September 5th to secure your spot. Limited to 20 riders..</p>
        </section>
        <section className="blog-section">
          <h2>Live Updates</h2>
          <p>Live updates or real-time chat can be integrated here.</p>
        </section>
      </div>
      <div className="chat-options">
        <button onClick={() => window.open('mailto:support@estcc.com')}>Chat via Gmail</button>
        <button onClick={() => window.open('https://wa.me/yourNumber')}>Chat via WhatsApp</button>
      </div>
    </div>
  );
}

export default EstccBlog;
