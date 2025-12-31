import React from "react";
import { Link } from "react-router-dom";
import "./HomeFooter.css";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import StarIcon from "@mui/icons-material/Star";

const HomeFooter = () => {
  return (
    <>
      <div className="newsletter-section">
        <h2 className="footer-title">Why Choose Us</h2>

        <div className="features">
          <div className="feature-card">
            <MenuBookIcon className="feature-icon" />
            <p>Wide Book Collection</p>
          </div>

          <div className="feature-card">
            <LocalShippingIcon className="feature-icon" />
            <p>Fast Delivery</p>
          </div>

          <div className="feature-card">
            <LockIcon className="feature-icon" />
            <p>Secure Payments</p>
          </div>

          <div className="feature-card">
            <StarIcon className="feature-icon" />
            <p>Trusted by Readers</p>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Fiction</li>
            <li>Children Books</li>
            <li>Travel Books</li>
            <li>Competitive Exams</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 WebBook. All Rights Reserved.
      </div>
    </>
  );
};

export default HomeFooter;
