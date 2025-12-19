import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/Screenshot 2025-10-29 191215.png" alt="M.P.A.B. Logotyp" className="footer-logo-img" />
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Kontakt</h4>
            <div className="footer-contact-info">
              <p>📧 info@mpab.nu</p>
              <p>📞 Patrik: 070 712 86 26</p>
              <p>📞 Andrei: 070 060 04 14</p>
              <p>📍 Karolinagatan 5, 171 58 Solna</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
