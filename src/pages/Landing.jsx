import React, { useEffect } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import PriceList from './PriceList.jsx';
import Terms from './Terms.jsx';
import ContactPage from './ContactPage.jsx';

const withSection = (id, Component, titleOverride) => (
  <section id={id} className="section-anchor" key={id}>
    {titleOverride ? null : null}
    <Component />
  </section>
);

const Landing = () => {
  useEffect(() => {
    // Om det finns hash i URL:en, scrolla dit vid initial laddning
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#','');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div>
      {withSection('hem', Home)}
      {withSection('om-oss', About)}
      {withSection('galleri', Gallery)}
      {withSection('prislista', PriceList)}
      {withSection('hyresvillkor', Terms)}
      {withSection('kontakt', ContactPage)}
    </div>
  );
};

export default Landing;


