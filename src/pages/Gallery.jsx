import React, { useEffect, useState } from 'react';

const slides = [
  { src: '/IMG_3130.png', alt: 'Miljöbild 3130' },
  { src: '/IMG_3131.png', alt: 'Miljöbild 3131' },
  { src: '/IMG_3132.png', alt: 'Miljöbild 3132' },
  { src: '/IMG_3133.png', alt: 'Miljöbild 3133' },
  { src: '/IMG_3134.png', alt: 'Miljöbild 3134' },
  { src: '/IMG_3135.png', alt: 'Miljöbild 3135' }
];

const Gallery = () => {
  const [active, setActive] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % slideCount);
    }, 4500);
    return () => clearInterval(id);
  }, [slideCount]);

  const goTo = (idx) => setActive(idx);
  const prev = () => setActive((active - 1 + slideCount) % slideCount);
  const next = () => setActive((active + 1) % slideCount);

  return (
    <section className="content-section">
      <h2 className="section-title">Galleri</h2>
      <div className="muted-panel slideshow-card">
        <div className="slideshow-viewport">
          {slides.map((slide, idx) => (
            <div key={slide.src} className={`slide ${idx === active ? 'active' : ''}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="slideshow-controls">
          <button type="button" className="slideshow-btn" onClick={prev} aria-label="Föregående bild">‹</button>
          <div className="slideshow-dots" role="tablist">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === active ? 'active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Gå till bild ${idx + 1}`}
              />
            ))}
          </div>
          <button type="button" className="slideshow-btn" onClick={next} aria-label="Nästa bild">›</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

