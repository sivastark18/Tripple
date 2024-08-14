import React from 'react';
import './CommunityBlog.css';
import yamahaImg from './images/yamahaa.jpg';

function YamahaBlog() {
  return (
    <div className="community-blog">
      <h1>Yamaha Community</h1>
      <img src={yamahaImg} alt="Yamaha" className="community-blog-image" />
      <div className="blog-content">
        <section className="blog-section">
          <h2>About Yamaha Community</h2>
          <p>A vibrant network of Yamaha enthusiasts.

Yamaha has fostered a strong community of riders and fans who share a passion for the brand.

 This community connects people through shared experiences, knowledge sharing, and a love for Yamaha products. It often includes online forums, social media groups, and local chapters for riders to connect and engage.   


Sources and related content
.</p>
        </section>
        <section className="blog-section">
          <h2>Upcoming Trips & News</h2>
          <p>Group Rides: Organized rides for various Yamaha models, catering to different experience levels.</p>
          <p>Track Days: Opportunities for riders to experience the thrill of track riding.</p>
          <p>Adventure Rides: Exploring off-road terrains and challenging routes.</p>
          <p>Service Camps: Free or discounted service checkups and maintenance.</p>
          <p>Model Launches: Unveiling of new Yamaha motorcycles and scooters.</p>
          <p>Riding Gear and Accessories Launches: Showcasing new products for riders.</p>
        </section>
        <section className="blog-section">
          <h2>Live Updates</h2>
          <p>Live updates or real-time chat.</p>
        </section>
      </div>
      <div className="chat-options">
        <button onClick={() => window.open('mailto:support@yamaha.com')}>Chat via Gmail</button>
        <button onClick={() => window.open('https://wa.me/yourNumber')}>Chat via WhatsApp</button>
      </div>
    </div>
  );
}

export default YamahaBlog;
