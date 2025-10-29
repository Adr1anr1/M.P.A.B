import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulera API-anrop
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Återställ status efter 3 sekunder
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'E-post',
      value: 'hej@digitorn.se',
      link: 'mailto:hej@digitorn.se'
    },
    {
      icon: '📞',
      title: 'Telefon',
      value: '+46 70 123 45 67',
      link: 'tel:+46701234567'
    },
    {
      icon: '📍',
      title: 'Adress',
      value: 'Storgatan 123, 123 45 Stockholm',
      link: 'https://maps.google.com'
    }
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
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="container">
        <div className="contact-content-simple">
          <div className="contact-text-section">
            <h2 className="contact-title">Kontakta oss</h2>
            <p className="contact-question">Vill du diskutera ditt nästa projekt?</p>
            <p className="contact-description">
              Fyll i formuläret så kontaktar vi dig med information om våra tjänster 
              och hur vi kan hjälpa dig att förverkliga dina digitala visioner.
            </p>
          </div>
          
          <div className="contact-form-box">
            <form className="simple-contact-form">
              <div className="form-group">
                <label htmlFor="name">Namn</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ditt namn"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-post</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="din@epost.se"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Berätta om ditt projekt..."
                ></textarea>
              </div>
              
              <button type="button" className="btn btn-primary">
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
