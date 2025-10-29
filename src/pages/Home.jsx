import React from 'react';

const Home = () => {
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
            <div className="logo-strip">
              {/* Byt ut filerna i public/logos/ till riktiga logotyper när du har dem */}
              <a href="https://www.bastadgruppen.com/sv/produkter/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/bastadgruppen.png" alt="Båstadgruppen" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('Båstadgruppen'));}} />
              </a>
              <a href="https://osnordic.se/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/osnordic.png" alt="OS Nordic" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('OS Nordic'));}} />
              </a>
              <a href="https://teejays.com/sv/home" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/teejays.png" alt="Tee Jays" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('Tee Jays'));}} />
              </a>
              <a href="https://www.nwg.se/vara-varumarken/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/nwg.png" alt="NWG" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('NWG'));}} />
              </a>
              <a href="https://www.flexscandinavia.se/sv/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/flex.png" alt="FLEX" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('FLEX'));}} />
              </a>
              <a href="https://www.pullman-ermator.se/product/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/pullman.png" alt="Pullman Ermator" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('Pullman Ermator'));}} />
              </a>
              <a href="https://www.husqvarna.com/" target="_blank" rel="noreferrer" className="logo-card">
                <img src="/husqvarna.png" alt="Husqvarna" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode('Husqvarna'));}} />
              </a>
            </div>
          </div>
          <div className="muted-panel">
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


