import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} BookTalk. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
        <a href="/terms" className="footer-link">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
