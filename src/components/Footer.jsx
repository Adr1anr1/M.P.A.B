import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Tjänster', id: 'services' },
    { name: 'Kontakt', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/digitorn'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/digitorn'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">M.P.A.B.</h3>
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
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} M.P.A.B. Alla rättigheter förbehållna.</p>
          </div>
          <div className="footer-legal">
            <button className="footer-legal-link">Integritetspolicy</button>
            <button className="footer-legal-link">Användarvillkor</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
