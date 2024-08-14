import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="address">
          <h2>Our Address</h2>
          <p>123 Travel Lane</p>
          <p>Adventure City, AC 12345</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is the best time to book a trip?</h3>
          <p>The best time to book a trip is at least 3 months in advance to ensure availability and the best rates.</p>
        </div>
        <div className="faq-item">
          <h3>Can I customize my travel itinerary?</h3>
          <p>Yes, we offer customizable travel itineraries to meet your specific needs and preferences.</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95592391531884!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d50c1e4231!2s123%20Travel%20Ln%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1593957225764!5m2!1sen!2sus"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
