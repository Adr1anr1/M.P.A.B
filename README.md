# Digitorn - Digitalbyrå Landing Page

En modern och professionell landing page för digitalbyrån Digitorn, byggd med React.

## 🎨 Design

- **Minimalistisk design** med mycket vitt utrymme och rena linjer
- **Färgpalett**: Mörkblått (#1e3a8a) med ljusblå accentfärg (#3b82f6)
- **Responsiv design** som fungerar på både mobil och desktop
- **Subtila animationer** och hover-effekter för förbättrad användarupplevelse

## 🚀 Funktioner

### Sektioner
- **Hero Section**: Stor rubrik med företagsnamn och tagline
- **Om oss**: Presentation av företaget och värderingar
- **Tjänster**: Fyra tjänstekort (Webbutveckling, Design, UX/UI, Digital Strategi)
- **Portfolio**: Projektvisning med statusindikatorer
- **Kontakt**: Kontaktformulär och kontaktinformation
- **Footer**: Navigation och sociala medier

### Tekniska funktioner
- React 18 med funktionella komponenter
- Intersection Observer för scroll-animationer
- Responsiv grid-layout
- Formulärvalidering
- Smooth scrolling navigation
- Hover-effekter och transitioner

## 🛠️ Installation och körning

### Förutsättningar
- Node.js (version 14 eller högre)
- npm eller yarn

### Steg för att köra projektet

1. **Installera dependencies:**
   ```bash
   npm install
   ```

2. **Starta utvecklingsservern:**
   ```bash
   npm start
   ```

3. **Öppna webbläsaren:**
   Navigera till [http://localhost:3000](http://localhost:3000)

### Bygga för produktion

```bash
npm run build
```

Detta skapar en `build`-mapp med optimerade filer för produktion.

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Services.js & Services.css
│   ├── Portfolio.js & Portfolio.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js
└── index.css
```

## 🎯 Anpassning

### Färger
Huvudfärgerna kan enkelt ändras i CSS-filerna:
- Primär färg: `#1e3a8a` (mörkblått)
- Accent färg: `#3b82f6` (ljusblått)
- Bakgrund: `#ffffff` (vit)

### Innehåll
All text och innehåll kan enkelt ändras i respektive komponent-filer.

### Kontaktinformation
Uppdatera kontaktuppgifter i `Contact.js` och `Footer.js`.

## 📱 Responsivitet

Landing page är optimerad för:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobil (under 768px)

## 🔧 Teknologier

- **React 18** - UI-bibliotek
- **CSS3** - Styling med Grid och Flexbox
- **JavaScript ES6+** - Modern JavaScript
- **Intersection Observer API** - Scroll-animationer

## 📄 Licens

Detta projekt är skapat för Digitorn digitalbyrå.

---

**Utvecklat med ❤️ för modern webbutveckling**
