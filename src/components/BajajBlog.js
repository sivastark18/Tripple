import React from 'react';
import './CommunityBlog.css';
import bajajImg from './images/bajajj.jpg';

function BajajBlog() {
  return (
    <div className="community-blog">
      <h1>Bajaj Community</h1>
      <img src={bajajImg} alt="Bajaj" className="community-blog-image" />
      <div className="blog-content">
        <section className="blog-section">
          <h2>About Bajaj Community</h2>
          <p>Bajaj Auto has cultivated a strong and passionate community of bikers around its range of motorcycles. Known for their affordability, performance, and reliability, Bajaj bikes have resonated with a wide audience, leading to the formation of a vibrant community.</p>
        </section>
        <section className="blog-section">
          <h2>Upcoming Trips & News</h2>
          <p>Bajaj Auto: The Thrill of the Ride</p><p>
New Model Launches: Bajaj Auto is known for its regular product updates. Keep an eye out for new models or variants in the Pulsar, Dominar, Avenger, or other popular ranges.
Electric Vehicle Push: Bajaj Auto is investing in electric mobility. News about electric two-wheelers or collaborations in this space is likely.   
Racing and Motorsports: Bajaj Auto has a history in racing. Any updates on racing teams or participation in motorsports events would be relevant.</p>
        </section>
        <section className="blog-section">
          <h2>Live Updates</h2>
          <p>Live updates or real-time chat can be integrated here.</p>
        </section>
      </div>
      <div className="chat-options">
        <button onClick={() => window.open('mailto:support@bajaj.com')}>Chat via Gmail</button>
        <button onClick={() => window.open('https://wa.me/yourNumber')}>Chat via WhatsApp</button>
      </div>
    </div>
  );
}

export default BajajBlog;
