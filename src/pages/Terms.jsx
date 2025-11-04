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
          <p>Allt hyresmaterial levereras fritt från vårt lager och skall returneras i fullt oskadat skick på hyrestagarens bekostnad. Hyrestagaren är skyldig att underrätta oss om eventuell skada, som uppstått på hyresmaterialet under hyrestiden.</p>
          <p>MPAB garanterar ej hyresmaterialens lämplighet för hyrestagaren.</p>
          <p>Saknad maskin/material debiteras till nytt anskaffningsvärde. Hyra debiteras fram till att hyrestagaren erlagt ersättning för saknad maskin/material.</p>
        </Section>

        <Section title="Betalning">
          <p>Utöver deponerat belopp betalas hyresbelopp och övriga varor i förskott såvida ej annat överenskommit.</p>
        </Section>

        <Section title="Hyrestid">
          <p>Hyrestiden räknas dygnsvis från och med den tid/dag då materialet bokats, avhämtats eller avsänts t.o.m. tiden/dagen för dess återkomst, såvida annat ej överenskommits.</p>
          <p>Exempel: Överskrides hyrestiden med ett (1) dygn debiteras alltså ytterligare ett (1) dygn.</p>
        </Section>

        <Section title="Förlängning">
          <p>Hyra utgår per dygn oavsett om varan används eller ej. Önskas hyrestiden förlängas, skall detta aviseras senast 1 dygn innan avtalad hyresperiod utgår. Den överenskomna dygnshyran baseras på användning i ett arbetsskift = 8 timmar.</p>
          <p>Vid ökad användning, t.ex. vid fler skift, helger m.m. skall hyrestagaren omgående anmäla detta till MPAB för rätt hyresdebitering.</p>
          <p>För bodar, containers, valvstämp, skyddsräcken, ställningar och vissa pumpar, värmeaggregat och fläktar debiteras hyra för alla dagar med viss reducering för semestertider. Semesteruppehåll skall alltid meddelas uthyraren minst 14 dagar före uppehållet.</p>
          <p>Ombesörjer uthyraren transport, åligger det hyrestagaren att meddela hämtning senast 2 dygn före avhämtande.</p>
        </Section>

        <Section title="Skador & betalningsskyldighet">
          <p>Det åligger hyrestagaren att under hyrestiden omsorgsfullt sköta och vårda materialet enligt gällande skötselinstruktioner. Hyrestagaren svarar för all skada som uppstår på hyresmaterialet under hyrestiden, och som ej är att anse som normalt slitage. Eventuella reparationer får endast utföras av, eller med tillstånd av uthyraren.</p>
        </Section>

        <Section title="Rengöring">
          <p>Maskiner och material skall vara väl rengjorda vid återlämnandet. Sladdar och slangar skall vara ordentligt buntade och rullade. Skyddsräckedetaljer och ställningar skall buntas och pallas.</p>
          <p>Kostnader för att MPAB personal skall utföra dessa arbeten debiteras extra och skall meddelas i förväg. Retur skall alltid åtföljas av följesedel.</p>
        </Section>

        <Section title="Försäkring">
          <p>Brand, stöld och skadeståndsförsäkring på materialen med tillbehör är ej tecknad av uthyraren. Materialen betraktas följaktligen ur försäkrings- och arbetarskyddssynpunkt som hyrestagarens egen.</p>
          <p>Maskiner och material skall under hyrestiden handhavas och förvaras av hyrestagaren på ett sådant sätt att de icke utsätts för åverkan, olovligt nyttjande eller tillgrepp. Hyrestagaren svarar för skada som uppstått på materialen under hyrestiden, oavsett om skadan tillkommit genom hyrestagarens vållande eller ej.</p>
          <p><strong>OBS</strong> – Försäkring skall tecknas av hyrestagaren själv!</p>
        </Section>

        <Section title="Äganderätt">
          <p>Försålda produkter förblir MPAB egendom till dess att full betalning erlagts. Hyrestagaren äger inte rätt att pantsätta, överlåta eller försälja förhyrd egendom, utan svarar för densamma tills dess att den återlämnats till oss.</p>
          <p>Skall lånet överföras, måste maskin/material först inlämnas till MPAB för översyn och kontroll. Hyrestagaren är skyldig att hålla uthyraren underrättad om var hyresmaskinen/materialen förvaras och används.</p>
        </Section>

        <Section title="Förbrukningsmaterial">
          <p>Förslitningsmaterial såsom borr, spett, sågklingor m.m. samt förbrukningsmaterial, smörjmedel och drivmedel ingår ej i hyrespriset.</p>
        </Section>

        <Section title="Uppsägning och återtagande av hyresmaterialet">
          <p>MPAB äger rätt att omedelbart säga upp avtalet och återta förhyrd egendom även utan anlitande av myndighet, om egendomen hotas av utmätning eller andra exekutiva åtgärder. Vi äger rätt att omedelbart säga upp avtalet och återtaga förhyrd egendom, även utan anlitande av myndighet, om hyrestagaren dröjer med betalning av hyra utöver 8 dagar efter förfallodatum.</p>
          <p>Samma gäller om hyrestagaren vanvårdar förhyrd egendom, vägrar oss eller vår representant att besikta egendomen, eller om hyrestagaren i övrigt bryter mot villkoren i detta avtal.</p>
          <p>Samtliga kostnader i samband med eventuella återtaganden av förhyrd egendom betalas av hyrestagaren.</p>
        </Section>

        <Section title="Avvikelser från hyresvillkor">
          <p>Avvikelser från dessa hyresvillkor skall för att vara giltiga, vara skriftligt angivet i hyres/leasingavtalet.</p>
        </Section>

        <Section title="Leverans / betalningsvillkor">
          <p>Avtal om leverans av hyresmaterial m.m. från oss gäller med reservation för force majeure såsom krig, militärinkallelse, förhinder av in- och utförsel, eldsvåda, strejk, lockout, driftsstörningar, bristande transportmöjligheter och andra omständigheter vi inte råder över och som i något avseende verkar hindrande, försvårande eller försenande på leveransen.</p>
          <p>Hyrestagaren är ej berättigad att utkräva någon som helst ersättning på grund av sålunda utebliven eller försenad leverans.</p>
          <p><strong>Leverans/betalningsvillkor vid fakturering:</strong><br />Fritt vårt lager i Solna.<br />30 dagar netto. Vid betalning efter förfallodag debiteras dröjsmålsränta med 2% per månad samt påminnelseavgift. Om, trots påminnelse, betalning uteblir överlämnas ärendet till inkasso, varvid räntekostnad och inkassokostnad tillkommer.<br />Mervärdesskatt tillkommer på alla våra priser.<br />Order noteras till leveransdagens priser.</p>
        </Section>

        <Section title="Deposition">
          <p>Därest vi så påfordrar, skall hyrestagaren som ej åtnjuter kredit hos oss, deponera ett belopp som motsvarar materialens värde.</p>
        </Section>
      </div>
    </main>
  );
};

export default Terms;


