import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeId, setActiveId] = useState('hem');

  useEffect(() => {
    const sections = ['hem','om-oss','prislista','hyresvillkor','kontakt'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const onClickScroll = (id) => (e) => {
    // Om vi är på '/' med Landing, scrolla. Annars navigera dit.
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="brand">
          <img src="/Screenshot 2025-10-29 191215.png" alt="Företagslogotyp" className="brand-logo" />
        </div>

        <nav className="main-nav" aria-label="Huvudnavigation">
          <a href="#hem" onClick={onClickScroll('hem')} className={`nav-link ${activeId==='hem'?'active':''}`}>Hem</a>
          <a href="#om-oss" onClick={onClickScroll('om-oss')} className={`nav-link ${activeId==='om-oss'?'active':''}`}>Om oss</a>
          <a href="#prislista" onClick={onClickScroll('prislista')} className={`nav-link ${activeId==='prislista'?'active':''}`}>Prislista</a>
          <a href="#hyresvillkor" onClick={onClickScroll('hyresvillkor')} className={`nav-link ${activeId==='hyresvillkor'?'active':''}`}>Hyresvillkor</a>
          <a href="#kontakt" onClick={onClickScroll('kontakt')} className={`nav-link nav-cta ${activeId==='kontakt'?'active':''}`}>Kontakt</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


