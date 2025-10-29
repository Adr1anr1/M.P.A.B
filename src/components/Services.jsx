import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const servicesRef = useRef(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Webbutveckling',
      description: 'Moderna, responsiva webbplatser och webbapplikationer byggda med senaste teknologier.',
      features: ['React & Next.js', 'Responsiv design', 'SEO-optimering', 'Säkerhet & prestanda']
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Visuell identitet och grafisk design som förstärker ditt varumärke och budskap.',
      features: ['Logotyp & varumärke', 'Grafisk design', 'Printmaterial', 'Digitala medier']
    },
    {
      icon: '📱',
      title: 'UX/UI Design',
      description: 'Användarcentrerad design som skapar intuitiva och engagerande digitala upplevelser.',
      features: ['Användarresearch', 'Wireframing', 'Prototyping', 'Användbarhetstestning']
    },
    {
      icon: '🚀',
      title: 'Digital Strategi',
      description: 'Strategisk rådgivning och planering för att maximera din digitala närvaro.',
      features: ['Digital strategi', 'Marknadsföring', 'Analys & rapportering', 'Optimering']
    }
  ];

  return (
    <section id="services" className="services section" ref={servicesRef}>
      <div className="container">
        <h2 className="section-title">Vad vi gör</h2>
        <p className="section-subtitle">
          Vi erbjuder en komplett palett av digitala tjänster för att hjälpa ditt företag att växa
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
