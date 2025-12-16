import React, { useState } from 'react';

const catalog = {
  'Maskinverktyg': [
    {
      title: 'Såg & kapstationer',
      items: [
        ['Art.nr 2876 - SÅGBORD (Normalhyra)', '129 kr'],
        ['Art.nr 3206 - SÅGBORD BOSCH GTS 10 XC (Normalhyra)', '159 kr'],
        ['Art.nr 3207 - GER OCH KAP DEWALT DWS1771 (Normalhyra)', '120 kr'],
        ['Art.nr 3209 - SÅGBORD TILL DEWALT DWS1771 (Normalhyra)', '60 kr'],
        ['Art.nr 3211 - SÅGBORD BOSCH GTS 635-216 (Normalhyra)', '190 kr'],
        ['Art.nr 3212 - GER OCH KAP BOSCH GCM800SJ (Normalhyra)', '150 kr'],
        ['Art.nr 3213 - SÅGBORD TILL BOSCH GTA2500 (Normalhyra)', '70 kr'],
        ['Art.nr 120023 - SÅGBORD (Normalhyra)', '159 kr'],
        ['Art.nr 120024 - SÅGBORD -70 (Normalhyra)', '149 kr'],
        ['Art.nr 20008 - SPÅRSÅG (Normalhyra)', '140 kr'],
        ['Art.nr 200081 - SPÅRRSÅG PROTOOL WSP 50 (Normalhyra)', '180 kr'],
        ['Art.nr 200082 - SPÅRRSÅG DCH 180 - SL (Normalhyra)', '190 kr'],
        ['Art.nr 20009 - KAPMASKIN HILTI 305MM (Normalhyra)', '200 kr'],
        ['Art.nr 200091 - VÅT KAP 350MM HUSQUARNA K3000 (Normalhyra)', '220 kr'],
        ['Art.nr 200095 - MOTORKAP HUSQUARNA 350 (Normalhyra)', '260 kr'],
        ['Art.nr 120015 - PLASMASKÄRARE (Normalhyra)', '180 kr']
      ]
    },
    {
      title: 'Bilning & kombihammare',
      items: [
        ['Art.nr 10000 - BILMASKIN HILTI TE-905 (Normalhyra)', '145 kr'],
        ['Art.nr 100004 - BILMASKIN HILTI TE-2000 (Normalhyra)', '220 kr'],
        ['Art.nr 100005 - BILMASKIN HILTI TE-1000 (Normalhyra)', '210 kr'],
        ['Art.nr 100006 - BILMASKIN MAKITA (Normalhyra)', '160 kr'],
        ['Art.nr 10001 - BILMASKIN HILTI TE-706 (Normalhyra)', '180 kr'],
        ['Art.nr 10002 - BILMASKIN HILTI TE-505 (Normalhyra)', '149 kr'],
        ['Art.nr 100025 - BILMASKIN SDS PLUS TE 300 (Normalhyra)', '100 kr'],
        ['Art.nr 10005 - BILMASKIN HILTI TE-3000 (Normalhyra)', '280 kr'],
        ['Art.nr 10023 - BILMASKIN HILTI TE-505 BATTERI (Normalhyra)', '110 kr'],
        ['Art.nr 10004 - KOMBIHAMMARE TE-76P (Normalhyra)', '135 kr'],
        ['Art.nr 10006 - KOMBIHAMMARE TE-50-AVR (Normalhyra)', '120 kr'],
        ['Art.nr 10007 - PROPPMASKIN T7 (Normalhyra)', '79 kr'],
        ['Art.nr 3224 - PROPPMASKIN HIKOKI DH24P (Normalhyra)', '79 kr'],
        ['Art.nr 11000 - BILNINGSMEJSEL (Normalhyra)', '25 kr'],
        ['Art.nr 11001 - BILNINGSMEJSEL BRED (Normalhyra)', '30 kr']
      ]
    },
    {
      title: 'Slip, fräs & golv',
      items: [
        ['Art.nr 130001 - BETONGSLIP FESTOOL RG-130 (Normalhyra)', '170 kr'],
        ['Art.nr 130002 - BETONGSLIP METABO RS 14-125 (Normalhyra)', '157 kr'],
        ['Art.nr 130003 - BETONGSLIP FLEX 180MM (Normalhyra)', '189 kr'],
        ['Art.nr 130004 - BETONGSLIP DGH 130 (Normalhyra)', '170 kr'],
        ['Art.nr 130009 - BETONGSLIP GIRAFF MED STÄLLNIN (Normalhyra)', '350 kr'],
        ['Art.nr 3003 - SLIPMASKIN GIRAFF (Normalhyra)', '150 kr'],
        ['Art.nr 13001 - BETONGSLIP DG 150 (Normalhyra)', '250 kr'],
        ['Art.nr 2056 - BETONGSLIP DG 125 P (Normalhyra)', '170 kr'],
        ['Art.nr 130052 - ABS-SLIP (Normalhyra)', '135 kr'],
        ['Art.nr 130053 - GOLVSLIP SCAN 330 (Normalhyra)', '300 kr'],
        ['Art.nr 13005 - GOLVSLIP SCAN 45 (Normalhyra)', '470 kr'],
        ['Art.nr 13006 - YTFRÄS RT-200 (Normalhyra)', '380 kr'],
        ['Art.nr 13007 - MATTSTRIPPER (Normalhyra)', '300 kr'],
        ['Art.nr 130072 - SUPERCUT (Normalhyra)', '110 kr'],
        ['Art.nr 130073 - HYDRALSTRIPPER STRATOS (Normalhyra)', '700 kr'],
        ['Art.nr 130074 - VÄGGSTRIPPER (Normalhyra)', '119 kr'],
        ['Art.nr 20007 - SANERINGSFRÄS SAF 700 (Normalhyra)', '159 kr'],
        ['Art.nr 130015 - FESTOOL ÖVERHANDSFRÄS OF-1010 (Normalhyra)', '100 kr']
      ]
    }
  ],
  'Byggutrustning': [
    {
      title: 'Ställning & fallskydd',
      items: [
        ['Art.nr 425485996 - STÄMP GUL (Byggdag)', '60 kr'],
        ['Art.nr 13008 - HANTVERKSSTÄLLNING ZIP-UP (Normalhyra)', '160 kr'],
        ['Art.nr 130081 - FÖRHÖJNINGSDEL 2M SNAPPY (Normalhyra)', '50 kr'],
        ['Art.nr 130082 - STAKET 1M SNAPPY (Normalhyra)', '40 kr'],
        ['Art.nr 130083 - STÖDBEN SNAPPY TELESKÅP (Normalhyra)', '35 kr'],
        ['Art.nr 3219 - STAKET 1M SNAPPY (Normalhyra)', '40 kr'],
        ['Art.nr 130012 - SÄKERHETSSELE (Normalhyra)', '149 kr'],
        ['Art.nr 1340850365 - SÄKERHETSBLOCK (Normalhyra)', '50 kr'],
        ['Art.nr 130013 - KÄTTINGTELLFER (Normalhyra)', '149 kr']
      ]
    },
    {
      title: 'Stegar & plattformar',
      items: [
        ['Art.nr 13009 - A-STEGE 2,5M (Normalhyra)', '90 kr'],
        ['Art.nr 130091 - 3-STEGSBOCK (Normalhyra)', '60 kr'],
        ['Art.nr 130092 - A-STEGE 2 STEG (Normalhyra)', '50 kr']
      ]
    },
    {
      title: 'Blandare, kärror & vagnar',
      items: [
        ['Art.nr 2840 - BETONGBLANDARE (Normalhyra)', '120 kr'],
        ['Art.nr 130056 - BETONGBLANDARE (Normalhyra)', '90 kr'],
        ['Art.nr 130055 - VIBRASTAV DYNAPACK 1-FAS (Normalhyra)', '149 kr'],
        ['Art.nr 13010 - BRUKSKÄRRA (Normalhyra)', '60 kr'],
        ['Art.nr 30000 - BETONKÄRRA MED LYFTÖRON (Normalhyra)', '60 kr'],
        ['Art.nr 30001 - VERKTYGSVAGN (Normalhyra)', '110 kr'],
        ['Art.nr 30002 - FÖNSTER O DÖRR KÄRRA (Normalhyra)', '50 kr'],
        ['Art.nr 20016 - FODERVAGN (Normalhyra)', '60 kr'],
        ['Art.nr 200161 - PALLVAGN (Normalhyra)', '149 kr'],
        ['Art.nr 20161 - GIPSHISS (Normalhyra)', '90 kr'],
        ['Art.nr 20162 - GIPSVAGN (Normalhyra)', '110 kr']
      ]
    },
    {
      title: 'El & klimat på arbetsplatsen',
      items: [
        ['Art.nr 10008 - EL SKÅP/VÄSKA 16A (Normalhyra)', '30 kr'],
        ['Art.nr 10009 - ELSKÅP/VÄSKA 32A (Normalhyra)', '35 kr'],
        ['Art.nr 2006 - BYGG BELYSNING (Normalhyra)', '50 kr'],
        ['Art.nr 20015 - VÄRMEFLÄKT 9KW (Normalhyra)', '70 kr'],
        ['Art.nr 200151 - VÄRMEFLÄKT 2KW (Normalhyra)', '50 kr'],
        ['Art.nr 40000 - ELVERK HONDA GX200 (Normalhyra)', '210 kr']
      ]
    }
  ],
  'Rengöring och pumpar': [
    {
      title: 'Luftrenare',
      items: [
        ['Art.nr 20000 - LUFTRENARE A 300 (Normalhyra)', '90 kr'],
        ['Art.nr 20002 - LUFTRENARE DC 500/A 700 (Normalhyra)', '110 kr'],
        ['Art.nr 200025 - LUFTRENARE A 1000 (Normalhyra)', '150 kr'],
        ['Art.nr 20003 - LUFTRENARE A 1700 (Normalhyra)', '160 kr'],
        ['Art.nr 200045 - LUFTRENARE A 2000 (Normalhyra)', '180 kr'],
        ['Art.nr 20005 - LUFTRENARE DC AIR CUBE, A 2000 (Normalhyra)', '180 kr'],
        ['Art.nr 2344 - LUFTRENARE A 300 (Normalhyra)', '90 kr']
      ]
    },
    {
      title: 'Stoftavskiljare & föravskiljare',
      items: [
        ['Art.nr 200001 - STOFTAVSKILJARE FESTOOL CTL (Normalhyra)', '100 kr'],
        ['Art.nr 20004 - STOFTAVSKILJARE PULLMAN S13 (Normalhyra)', '150 kr'],
        ['Art.nr 20006 - STOFTAVSKILJARE PVL2800 (Normalhyra)', '160 kr'],
        ['Art.nr 20061 - STOFTAVSKILJARE PULLMAN S26 (Normalhyra)', '220 kr'],
        ['Art.nr 20062 - STOFTAVSKILJARE DC5800 (Normalhyra)', '310 kr'],
        ['Art.nr 20064 - FÖRAVSKILJARE PULLMAN (Normalhyra)', '90 kr']
      ]
    },
    {
      title: 'Pumpar & vattenhantering',
      items: [
        ['Art.nr 20011 - DRÄNKPUMP 1-FAS (Normalhyra)', '110 kr'],
        ['Art.nr 20012 - SLAMPUMP 3FAS (Normalhyra)', '199 kr'],
        ['Art.nr 20017 - PUMPVAGN (Normalhyra)', '119 kr'],
        ['Art.nr 20063 - VATTENDAMMSUGARE MED PUMP (Normalhyra)', '190 kr'],
        ['Art.nr 2001 - UTKASTARSLANG (Normalhyra)', '22 kr'],
        ['Art.nr 2002 - EVAKUERINGSSLANG (Normalhyra)', '12 kr'],
        ['Art.nr 200092 - PUMPFLASKA WT15 (Normalhyra)', '60 kr'],
        ['Art.nr 200093 - PUMPFLASKA MANUEL (Normalhyra)', '60 kr']
      ]
    },
    {
      title: 'Klimat',
      items: [
        ['Art.nr 20018 - AVFUKTARE VEAB (Normalhyra)', '100 kr']
      ]
    }
  ],
  'Elverktyg och tillbehör': [
    {
      title: 'Borr & skruv',
      items: [
        ['Art.nr 10003 - BATTERI SKRUVDRAGARE (Normalhyra)', '80 kr'],
        ['Art.nr 100031 - SKRUVAUTOMAT (Normalhyra)', '153 kr'],
        ['Art.nr 100032 - MUTTERDRAGARE BATTERI (Normalhyra)', '110 kr'],
        ['Art.nr 100041 - BORRMASKIN /CHUCK (Normalhyra)', '70 kr']
      ]
    },
    {
      title: 'Såg & kap (handhållet)',
      items: [
        ['Art.nr 12000 - TIGERSÅG WSR1400 (Normalhyra)', '111 kr'],
        ['Art.nr 12003 - TIGERSÅG METABO (Normalhyra)', '100 kr'],
        ['Art.nr 12004 - TIGERSÅG DEWALT BATTERIDRIVEN (Normalhyra)', '100 kr'],
        ['Art.nr 12001 - CIRKELSÅG 50MM (Normalhyra)', '70 kr'],
        ['Art.nr 120011 - SÄNKSÅG TS55 (Normalhyra)', '79 kr'],
        ['Art.nr 120012 - SÄNKSÅG BATTERIDRIVEN (Normalhyra)', '80 kr'],
        ['Art.nr 120013 - STICKSÅG (Normalhyra)', '75 kr']
      ]
    },
    {
      title: 'Slip & multiverktyg',
      items: [
        ['Art.nr 120014 - FESTOOL ,PROTOOL ROTEX (Normalhyra)', '70 kr'],
        ['Art.nr 1202 - MULTIMASTER FMM350Q (Normalhyra)', '80 kr'],
        ['Art.nr 13000 - VINKELSLIP (Normalhyra)', '75 kr'],
        ['Art.nr 10010 - VINKELSLIP 125MM (Normalhyra)', '89 kr'],
        ['Art.nr 20010 - VINKELSLIP 230MM (Normalhyra)', '80 kr'],
        ['Art.nr 13002 - RAK SLIPMASKIN (Normalhyra)', '125 kr'],
        ['Art.nr 3234 - RAK SLIPMASKIN MAKITA (Normalhyra)', '60 kr']
      ]
    },
    {
      title: 'Tryckluft & spik',
      items: [
        ['Art.nr 3215 - SPIKPISTOL BASSO C28/65 A1C (Normalhyra)', '110 kr'],
        ['Art.nr 50075 - SPIKPISTOL HILTI GX 90-WF (Byggdag)', '190 kr'],
        ['Art.nr 130113 - SPIKPISTOL (Normalhyra)', '157 kr'],
        ['Art.nr 130111 - DYCKERTPISTOL (Normalhyra)', '55 kr'],
        ['Art.nr 20019 - DYCKERPISTOL BATT (Normalhyra)', '110 kr'],
        ['Art.nr 130112 - TRYCKLUFTSLANG (Normalhyra)', '20 kr'],
        ['Art.nr 3216 - LUFTRYCKSVINDA 30M (Normalhyra)', '50 kr'],
        ['Art.nr 13011 - KOMPRESSOR (Normalhyra)', '75 kr']
      ]
    },
    {
      title: 'Special & mät',
      items: [
        ['Art.nr 3217 - ELHYVEL HAKOKI (Normalhyra)', '80 kr'],
        ['Art.nr 2007 - LASER (Normalhyra)', '140 kr'],
        ['Art.nr 20013 - NIBBLER MAKITA JN3201 (Normalhyra)', '160 kr'],
        ['Art.nr 20014 - PAPPEGOJA BENDOF DC 16 (Normalhyra)', '180 kr'],
        ['Art.nr 130006 - OMRÖRARE PROTOOL (Normalhyra)', '149 kr']
      ]
    }
  ],
  'Förbrukning & slitage': [
    {
      title: 'Försäljning och slitage',
      items: [
        ['Art.nr 14-400 - DIAM.SLIT.KLINGA 300 (Försäljning)', '500 kr'],
        ['Art.nr 5000 - DIAMANTSLITAGE (Normalhyra)', '30 kr'],
        ['Art.nr 130051 - DIANOVA 500 (Normalhyra)', '510 kr'],
        ['Art.nr 1300510 - DIAMANTSLITAGE SEGMENT 9ST (Normalhyra)', '1350 kr'],
        ['Art.nr 1300511 - DIAMANTSLITAGE SEGMENT 9ST (Normalhyra)', '1650 kr'],
        ['Art.nr 2005 - RIVDIAMANT PCB (Normalhyra)', '540 kr']
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

