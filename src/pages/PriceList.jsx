import React, { useState } from 'react';

const catalog = {
  'BILMASKINER': [
    {
      title: 'Bilmaskiner',
      items: [
        ['BILMASKIN SDS PLUS TE 300', '100 kr'],
        ['BILMASKIN HILTI TE-505', '129 kr'],
        ['BILMASKIN HILTI TE-700', '149 kr'],
        ['KOMBIHAMMARE TE-76P', '135 kr'],
        ['BILMASKIN HILTI TE-2000', '220 kr'],
        ['BILMASKIN HILTI TE-3000', '240 kr'],
        ['BILNINGSMEJSEL / PIK', '25 kr'],
        ['BILNINGSMEJSEL BRED', '30 kr']
      ]
    }
  ],
  'BORRMASKINER': [
    {
      title: 'Borrmaskiner',
      items: [
        ['BATTERI SKRUVDRAGARE', '60 kr'],
        ['SKRUVAUTOMAT', '153 kr'],
        ['MUTTERDRAGARE BATTERI', '110 kr'],
        ['BORRMASKIN /CHUCK', '70 kr'],
        ['PROPPMASKIN T7', '79 kr']
      ]
    }
  ],
  'KAPMASKINER SÅGAR': [
    {
      title: 'Kap & såg',
      items: [
        ['TIGERSÅG', '100 kr'],
        ['TIGERSÅG BATTERIDRIVEN', '129 kr'],
        ['CIRKELSÅG 50MM', '70 kr'],
        ['SÄNKSÅG TS55', '79 kr'],
        ['SÄNKSÅG BATTERIDRIVEN', '80 kr'],
        ['STICKSÅG', '75 kr'],
        ['GER OCH KAP', '70 kr'],
        ['SÅGBORD', '159 kr'],
        ['FEIN', '80 kr'],
        ['RAK SLIPMASKIN', '125 kr'],
        ['DUPLOFRÄS', '60 kr'],
        ['VINKELSLIP 125MM', '70 kr'],
        ['VINKELSLIP 230MM', '80 kr'],
        ['KAPMASKIN HILTI 305MM', '200 kr'],
        ['SPÅRSÅG 140MM', '140 kr'],
        ['SPÅRSÅG 150MM', '180 kr'],
        ['MOTORKAP HUSQUARNA 350', '260 kr']
      ]
    }
  ],
  'BETONG BEARBETNING': [
    {
      title: 'Betongbearbetning',
      items: [
        ['FESTOOL ,PROTOOL ROTEX', '70 kr'],
        ['BETONGSLIP DG 125 P', '157 kr'],
        ['FESTOOL RG-130', '170 kr'],
        ['BETONGSLIP DGH 130', '170 kr'],
        ['BETONGSLIP DG 150', '250 kr'],
        ['BETONGSLIP FLEX 180MM', '189 kr'],
        ['BETONGSLIP GIRAFF MED STÄLLNIN', '350 kr'],
        ['SLIPMASKIN GIRAFF', '150 kr'],
        ['YTFRÄS RT-200', '380 kr'],
        ['GOLVSLIP SCAN 330', '300 kr'],
        ['GOLVSLIP SCAN 45', '470 kr'],
        ['GOLVSLIP SCAN 500', '1050 kr'],
        ['GOLVSLIP SCAN 650', '1550 kr'],
        ['GOLVSLIP ABS-SLIP', 'Pris saknas']
      ]
    }
  ],
  'MATTBORTAGARE': [
    {
      title: 'Mattborttagare',
      items: [
        ['HYDRALSTRIPPER STRATOS', '700 kr']
      ]
    }
  ],
  'Spikpistol': [
    {
      title: 'Spikpistol',
      items: [
        ['DYCKERTPISTOL', '110 kr'],
        ['DYCKERPISTOL BATT', '110 kr'],
        ['HILTI SPIKPISTOL BX3 BATTERI', '157 kr'],
        ['SPIKPISTOL BASSO C28/65 A1C', '157 kr'],
        ['SPIKPISTOL FÖR ANKARSPIK IBASO', '157 kr'],
        ['SPIKPISTOL PASLODE PPN 50', '157 kr'],
        ['SPIKPISTOL HILTI GX 90-WF', '190 kr']
      ]
    }
  ],
  'KLIPPUTRUSTNING': [
    {
      title: 'Klipputrustning',
      items: [
        ['PLÅTSAX MAKITA JS-1601', '160 kr'],
        ['NIBBLER MAKITA JN3201', '160 kr'],
        ['PAPPEGOJA BENDOF DC 16', '169 kr']
      ]
    }
  ],
  'STÄLLNINGAR VAGNAR': [
    {
      title: 'Ställningar & vagnar',
      items: [
        ['FÖNSTER O DÖRR KÄRRA', '50 kr'],
        ['VERKTYGSVAGN', '80 kr'],
        ['GIPSVAGN', '80 kr'],
        ['HANTVERKARSTÄLLNING', '100 kr'],
        ['FÖRHÖJNINGSDEL 2M', '30 kr'],
        ['STAKET 1M SNAPPY', '20 kr'],
        ['STÖDBEN SNAPPY TELESKÅP', '25 kr'],
        ['EXTRA PLATTFORM 2M', '5 kr'],
        ['3-STEGSBOCK', '60 kr'],
        ['A-STEGE 2,5M', '90 kr']
      ]
    }
  ],
  'RENGÖRINGSUTRUSTNING': [
    {
      title: 'Rengöring',
      items: [
        ['STOFTAVSKILJARE PULLMAN S26', '170 kr'],
        ['STOFTAVSKILJARE PULLMAN S13', '150 kr'],
        ['FÖRAVSKILJARE PULLMAN', '90 kr'],
        ['VATTENDAMMSUGARE MED PUMP', '190 kr'],
        ['LUFTRENARE A 2000', '180 kr'],
        ['LUFTRENARE A 1700', '150 kr'],
        ['LUFTRENARE A 1000', '115 kr'],
        ['LUFTRENARE DC 500/A 700', '100 kr'],
        ['LUFTRENARE A 300', '90 kr']
      ]
    }
  ],
  'ELARTIKLAR': [
    {
      title: 'Elartiklar',
      items: [
        ['BYGG BELYSNING', '50 kr'],
        ['EL SKÅP/VÄSKA 16A', '30 kr'],
        ['ELSKÅP/VÄSKA 32A', '35 kr'],
        ['ELVERK HONDA GX200', '210 kr']
      ]
    }
  ],
  'ÖVRIGT': [
    {
      title: 'Övrigt',
      items: [
        ['BRUKSKÄRRA', '60 kr'],
        ['GIPSHISS', '90 kr'],
        ['PIRRA', '25 kr'],
        ['LASER', '140 kr'],
        ['SÄKERHETSBLOCK', '50 kr'],
        ['STAKSELE 10M LINA', '149 kr'],
        ['VÄRMEPISTOL', '50 kr'],
        ['SLAMPUMP 3FAS', '199 kr'],
        ['OMRÖRARE PROTOOL', '149 kr'],
        ['KÄTTINGTELLFER', '149 kr'],
        ['ELHYVEL BOSCH', '157 kr'],
        ['ELHYVEL MILWAKEY BATTERI', '80 kr']
      ]
    }
  ]
};

const tabOrder = Object.keys(catalog);

const splitGroups = (groups) => groups.reduce((cols, group, idx) => {
  cols[idx % 2].push(group);
  return cols;
}, [[], []]);

const Col = ({ groups }) => (
  <div className="price-list">
    {groups.map((group, i) => (
      <div key={i}>
        <h3>{group.title}</h3>
        {group.items.map(([name, price], idx) => (
          <div className="price-row" key={`${i}-${idx}`}>
            <span>{name}</span>
            <span>{price}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const PriceList = () => {
  const [active, setActive] = useState(tabOrder[0]);

  const groups = catalog[active] || [];
  const [leftGroups, rightGroups] = splitGroups(groups);
  const singleColumn = leftGroups.length === 0 || rightGroups.length === 0;
  const style = singleColumn ? { display: 'grid', gridTemplateColumns: '1fr', gap: '30px' } : {};

  return (
    <main className="content-section">
      <h1 className="section-title">Prislista</h1>
      <div className="tabs">
        {tabOrder.map(t => (
          <button
            key={t}
            className={`tab-btn ${active === t ? 'active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="price-grid" style={style}>
        {leftGroups.length > 0 && <Col groups={leftGroups} />}
        {rightGroups.length > 0 && <Col groups={rightGroups} />}
        {groups.length === 0 && (
          <div className="price-list"><p>Inga produkter i denna kategori.</p></div>
        )}
      </div>
    </main>
  );
};

export default PriceList;

