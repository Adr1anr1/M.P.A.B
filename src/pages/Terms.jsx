import React, { useState } from 'react';

const Section = ({title, children}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={()=>setOpen(!open)} aria-expanded={open}>
        {title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Terms = () => {
  return (
    <main className="content-section">
      <h1 className="section-title">Hyresvillkor</h1>
      <div className="accordion">
        <Section title="Leverans och återlämning">
          <p>Allt hyresmaterial levereras fritt från vårt lager och skall returneras i fullt oskadat skick...</p>
        </Section>
        <Section title="Skador & betalningsskyldighet">
          <p>Hyrestagaren svarar för all skada som uppstår på hyresmaterialet under hyrestiden...</p>
        </Section>
        <Section title="Rengöring">
          <p>Maskiner och material skall vara väl rengjorda vid återlämnandet...</p>
        </Section>
        <Section title="Försäkring">
          <p>Brand, stöld och skadeståndsförsäkring är ej tecknad av uthyraren...</p>
        </Section>
        <Section title="Leverans/betalningsvillkor">
          <p>30 dagar netto. Mervärdesskatt tillkommer på alla priser. Denna text är en platshållare.</p>
        </Section>
      </div>
    </main>
  );
};

export default Terms;


