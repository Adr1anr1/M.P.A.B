import React, { useState } from 'react';

const tabs = [
  'Maskinverktyg',
  'Byggutrustning',
  'Rengöring och pumpar',
  'Elverktyg och tillbehör',
  'Övrigt'
];

const sample = {
  left: [
    { cat: 'Byggutrustning', items: [
      ['STÄMP GUL - Byggdag','60 kr']
    ]},
    { cat: 'Elverktyg och tillbehör', items: [
      ['GER OCH KAP DEWALT DWS1771 - Normalhyra','120 kr'],
      ['GER OCH KAP BOSCH GCM800SJ - Normalhyra','150 kr'],
      ['ELHYVEL HAKOKI - Normalhyra','80 kr'],
      ['PROPPMASKIN HIKOKI DH24P - Normalhyra','79 kr'],
      ['RAK SLIPMASKIN MAKITA - Normalhyra','60 kr']
    ]}
  ],
  right: [
    { cat: 'Maskinverktyg', items: [
      ['SÅGBORD - Normalhyra','129 kr'],
      ['SÅGBORD BOSCH GTS 10 XC - Normalhyra','159 kr'],
      ['SÅGBORD TILL DEWALT DWS1771 - Normalhyra','60 kr'],
      ['SÅGBORD BOSCH GTS 635-216 - Normalhyra','190 kr'],
      ['SÅGBORD TILL BOSCH GTA2500 - Normalhyra','70 kr'],
      ['SPIKPISTOL BASSO C28/65 A1C - Normalhyra','110 kr'],
      ['SPIKPISTOL HILTI GX 90-WF - Byggdag','190 kr']
    ]},
    { cat: 'Rengöring och pumpar', items: [
      ['LUFTRYCKSVINDA 30M - Normalhyra','50 kr']
    ]},
    { cat: 'Övrigt', items: [
      ['DIAM.SLIT.KLINGA 300 - Försäljning','500 kr'],
      ['BETONGBLANDARE - Normalhyra','120 kr'],
      ['STAKET 1M SNAPPY - Normalhyra','40 kr']
    ]}
  ]
};

const Col = ({data}) => (
  <div className="price-list">
    {data.map((group, i) => (
      <div key={i}>
        <h3>{group.cat}</h3>
        {group.items.map(([name, price], idx) => (
          <div className="price-row" key={idx}>
            <span>{name}</span>
            <span>{price}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const PriceList = () => {
  const [active, setActive] = useState(tabs[0]);
  return (
    <main className="content-section">
      <h1 className="section-title">Prislista</h1>
      <div className="tabs">
        {tabs.map(t => (
          <button key={t} className={`tab-btn ${active===t?'active':''}`} onClick={()=>setActive(t)}>{t}</button>
        ))}
      </div>
      {(() => {
        const leftData = sample.left.filter(g => g.cat === active);
        const rightData = sample.right.filter(g => g.cat === active);
        const singleColumn = (leftData.length === 0) !== (rightData.length === 0) || (leftData.length===0 && rightData.length===0);
        const style = singleColumn ? { display:'grid', gridTemplateColumns:'1fr', gap:'30px' } : {};
        return (
          <div className="price-grid" style={style}>
            {leftData.length>0 && <Col data={leftData} />}
            {rightData.length>0 && <Col data={rightData} />}
            {leftData.length===0 && rightData.length===0 && (
              <div className="price-list"><p>Inga produkter i denna kategori.</p></div>
            )}
          </div>
        );
      })()}
    </main>
  );
};

export default PriceList;


