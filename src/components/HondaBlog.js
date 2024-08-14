import React from 'react';
import './CommunityBlog.css';
import hondaImg from './images/hondaa.jpg';

function HondaBlog() {
  return (
    <div className="community-blog">
      <h1>Honda Community</h1>
      <img src={hondaImg} alt="Honda" className="community-blog-image" />
      <div className="blog-content">
        <section className="blog-section">
          <h2>The Honda Community: A Focus on People and Progress</h2>
          <p>History
Honda's commitment to community is deeply rooted in its founding principles. Since its inception, the company has recognized the importance of being an integral part of the societies it operates in. This philosophy has driven Honda to engage in various philanthropic and social responsibility initiatives over the decades. /<p>  

<p>The Honda Community
The Honda community encompasses a broad spectrum, including:

Customers: Owners and enthusiasts of Honda products, forming a loyal and passionate base.
Employees: The dedicated workforce that drives the company's success and contributes to local communities.   
Partners: Collaborators, suppliers, and dealers who share Honda's vision.
Communities: The neighborhoods, cities, and regions where Honda operates and invests.</p>
<p>Mission
Honda's mission within its community is centered around the following core principles:

Giving Back: Honda actively supports various causes and communities, focusing on areas like education, environment, mobility, traffic safety, and community development.   
Building Relationships: Fostering strong connections with customers, employees, and partners to create a sense of belonging.
Enhancing Quality of Life: Contributing to the well-being of communities through initiatives that improve living conditions and opportunities.
Sustainability: Promoting environmental responsibility and sustainable practices.   
Key initiatives undertaken by Honda to fulfill its community mission include:</p>

<p>Charitable Giving: Providing financial support to non-profit organizations working on critical issues.   
Volunteerism: Encouraging employees to contribute their time and skills to community projects.</p>   
Education: Investing in programs that support youth development and educational attainment.   
Environmental Stewardship: Implementing eco-friendly practices and supporting environmental initiatives.</p></p>
        </section>
        <section className="blog-section">
          <h2>Upcoming Trips & News</h2>
          <p>New Model Launches: Honda frequently introduces new or updated models in various segments.
Technology Advancements: The automotive industry is focused on electric vehicles, autonomous driving, and other innovative technologies. Honda is likely to be at the forefront of these developments.
Corporate Social Responsibility Initiatives: Honda has a strong commitment to community and sustainability. There might be news related to their CSR efforts.
Motorsport Updates: If Honda is involved in any motorsport competitions, there could be news about race results, driver changes, or team updates..</p>
        </section>
        <section className="blog-section">
          <h2>Live Updates</h2>
          <p>Live updates or real-time chat.</p>
        </section>
      </div>
      <div className="chat-options">
        <button onClick={() => window.open('mailto:support@honda.com')}>Chat via Gmail</button>
        <button onClick={() => window.open('https://wa.me/yourNumber')}>Chat via WhatsApp</button>
      </div>
    </div>
  );
}

export default HondaBlog;
