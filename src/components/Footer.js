import React from 'react';
import './Footer.css';
import facebookIcon from './images/fb.png'; // Update the path as necessary
import twitterIcon from './images/twitter.png'; // Update the path as necessary
import instagramIcon from './images/instagram.png'; // Update the path as necessary

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:Tripple@gmail.com">Tripple@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919489799714">+91 9489799714</a></p>
                    <p>Address: Plot , Kovaipudur , Coimbatore
                    </p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" /> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" /> Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" /> Instagram
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
