import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfillment by Amazon</a></li>
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Center</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
