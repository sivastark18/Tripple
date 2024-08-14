import React from 'react';
import './AboutUs.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="about-us">
        <h2>About Tripple</h2>
        <p>
          Tripple is a premier travel company dedicated to providing personalized travel experiences. We specialize in creating bespoke travel itineraries that cater to the unique preferences and needs of our clients. With a passion for adventure and a commitment to excellence, Tripple ensures that every journey is memorable and fulfilling.
        </p>
        <p>
          Established in 2024, Tripple was founded by a group of avid travelers who shared a common vision: to make travel planning easy, enjoyable, and accessible to everyone. Over the years, we have grown into a trusted name in the travel industry, known for our attention to detail, exceptional customer service, and innovative travel solutions.
        </p>
        <p>
          At Tripple, we believe that travel is more than just visiting new places; it's about experiencing different cultures, meeting new people, and creating lifelong memories. Our team of experienced travel consultants works tirelessly to curate unique travel experiences that are tailored to the individual interests and preferences of our clients. Whether you're looking for a relaxing beach vacation, an adventurous trek through the mountains, or an immersive cultural experience, we have the expertise and resources to make it happen.
        </p>
        <p>
          Our commitment to sustainability and responsible tourism sets us apart from other travel companies. We strive to minimize our environmental impact and support local communities in the destinations we visit. By partnering with eco-friendly accommodations, promoting sustainable travel practices, and contributing to local conservation efforts, we aim to make a positive difference in the world through travel.
        </p>
        <p>
          Tripple offers a wide range of travel services, including flight bookings, hotel reservations, guided tours, travel insurance, and more. Our user-friendly website and mobile app make it easy to plan and book your next adventure from the comfort of your home. With just a few clicks, you can explore our extensive selection of travel packages, read reviews from fellow travelers, and customize your itinerary to suit your needs.
        </p>
        <p>
          Our dedication to customer satisfaction is reflected in the numerous awards and accolades we have received over the years. From being named "Best Travel Agency" by Travel Weekly to receiving the "Excellence in Customer Service" award from the Travel Industry Association, our commitment to quality and excellence has been consistently recognized by industry experts and our valued clients.
        </p>
        <p>
          At Tripple, we understand that travel planning can sometimes be overwhelming. That's why we offer personalized travel consultations to help you navigate the myriad of options and make informed decisions. Our friendly and knowledgeable travel consultants are always available to answer your questions, provide expert advice, and assist with every aspect of your trip planning.
        </p>
        <p>
          Join the thousands of satisfied travelers who have experienced the Tripple difference. Let us take the stress out of travel planning and help you create unforgettable journeys that you will cherish for a lifetime. Whether you're a solo traveler, a couple, a family, or a group of friends, Tripple is your trusted partner for all your travel needs.
        </p>
        <p>
          Thank you for choosing Tripple. We look forward to making your travel dreams come true.
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95592391531884!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d50c1e4231!2s123%20Travel%20Ln%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1593957225764!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
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
    </div>
  );
}

export default ContactUs;
