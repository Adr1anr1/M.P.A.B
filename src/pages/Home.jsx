import React, { useEffect, useState } from 'react';

const logos = [
  { href: 'https://www.bastadgruppen.com/sv/produkter/', src: '/bastadgruppen.png', alt: 'Båstadgruppen' },
  { href: 'https://osnordic.se/', src: '/osnordic.png', alt: 'OS Nordic' },
  { href: 'https://teejays.com/sv/home', src: '/teejays.png', alt: 'Tee Jays' },
  { href: 'https://www.nwg.se/vara-varumarken/', src: '/nwg.png', alt: 'NWG' },
  { href: 'https://www.flexscandinavia.se/sv/', src: '/flex.png', alt: 'FLEX' },
  { href: 'https://www.pullman-ermator.se/product/', src: '/pullman.png', alt: 'Pullman Ermator' },
  { href: 'https://www.husqvarna.com/', src: '/husqvarna.png', alt: 'Husqvarna' },
  { href: 'https://g-man.se/sv/produkter', src: '/g-man-logo.png', alt: 'G-Man' },
  { href: 'https://www.bigbag.se/', src: '/big-bag.png', alt: 'Big Bag' },
  { href: 'https://drome.se/product-category/diamantklingor/', src: '/drome-ny-logo.png', alt: 'Drome' },
  { href: 'https://www.ejendals.com/', src: '/ejendals-logotype.svg', alt: 'Ejendals' },
  { href: 'https://www.skydda.se/skyddase/sv/', src: '/skydda-logo.svg', alt: 'Skydda' }
];

const Home = () => {
  const [active, setActive] = useState(0);
  const logoCount = logos.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 2 >= logoCount ? 0 : prev + 2));
    }, 9000);
    return () => clearInterval(id);
  }, [logoCount]);

  const goTo = (idx) => setActive(idx);
  const prev = () => setActive(curr => (curr - 2 < 0 ? Math.max(0, logoCount - 2) : curr - 2));
  const next = () => setActive(curr => (curr + 2 >= logoCount ? 0 : curr + 2));

  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <video src="/hero.mp4" autoPlay muted loop playsInline poster="/Screenshot 2025-10-29 191215.png"></video>
        </div>
        <div className="hero-content">
          <span className="hero-kicker">Välkommen</span>
          <h1 className="hero-title">Uthyrningsföretag i byggbranschen</h1>
          <p className="hero-sub">Behöver du maskiner för bilning, sågning och borrning i betong? Även golvslipar, snickerimaskiner, maskiner för luftrening m.m</p>
        </div>
      </section>

      <section className="content-section">
        <div className="two-col">
          <div className="muted-panel">
            <h2>Vi är även återförsäljare</h2>
            <div className="logo-carousel-wrapper">
              <div className="logo-carousel-track" style={{ transform: `translateX(-${active * 50}%)` }}>
                {logos.map((logo, idx) => (
                  <a key={logo.src} href={logo.href} target="_blank" rel="noreferrer" className="logo-slide-card">
                    <img src={logo.src} alt={logo.alt} onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode(logo.alt));}} />
                  </a>
                ))}
              </div>
            </div>
            <div className="slideshow-controls">
              <button type="button" className="slideshow-btn" onClick={prev} aria-label="Föregående">‹</button>
              <div className="slideshow-dots" role="tablist">
                {logos.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === active ? 'active' : ''}`}
                    onClick={() => goTo(idx)}
                    aria-label={`Gå till logotyp ${idx + 1}`}
                  />
                ))}
              </div>
              <button type="button" className="slideshow-btn" onClick={next} aria-label="Nästa">›</button>
            </div>
          </div>
          <div className="muted-panel opening-hours">
            <h2>Öppettider</h2>
            <p>Månd - Fre: 06.30 - 16.00</p>
            <p>Lör - Sön - Stängt</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;


