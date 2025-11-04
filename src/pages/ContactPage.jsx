import React from 'react';

const ContactPage = () => {
  return (
    <main className="content-section">
      <div className="two-col">
        <div>
          <h1 className="section-title">Kontakta oss</h1>
          <p>Fyll i formuläret eller kontakta oss direkt via uppgifterna nedan.</p>
          <div className="muted-panel">
            <p>📞 Patrik: 070 712 86 26</p>
            <p>📞 Andrei: 070 060 04 14</p>
            <p>📍 Karolinagatan 5, 171 58 Solna</p>
            <p>⏰ Månd - Fre: 06.30 - 16.00</p>
          </div>
        </div>
        <form className="muted-panel">
          <label>Namn<input type="text" placeholder="Ditt namn" style={{display:'block',width:'100%',marginTop:6,marginBottom:12}} /></label>
          <label>Telefon<input type="tel" placeholder="070-..." style={{display:'block',width:'100%',marginTop:6,marginBottom:12}} /></label>
          <label>E-post<input type="email" placeholder="din@epost.se" style={{display:'block',width:'100%',marginTop:6,marginBottom:12}} /></label>
          <label>Meddelande<textarea rows="4" placeholder="Vad behöver du?" style={{display:'block',width:'100%',marginTop:6}} /></label>
          <button type="button" className="nav-cta" style={{marginTop:16}}>Skicka</button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;


