# Kontaktformulär Setup Guide

## Steg 1: Skapa Resend-konto och API-nyckel

1. Gå till [resend.com](https://resend.com) och skapa ett konto
2. Verifiera din domän `mpab.nu` (följ instruktionerna i Resend-dashboard)
3. Skapa en API-nyckel i Resend-dashboard
4. Kopiera API-nyckeln

## Steg 2: Lägg till API-nyckel i Vercel

1. Gå till ditt Vercel-projekt
2. Gå till Settings → Environment Variables
3. Lägg till en ny variabel:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Din Resend API-nyckel
   - **Environment**: Production, Preview, Development (välj alla)

## Steg 3: Verifiera domän i Resend

För att kunna skicka från `noreply@mpab.nu` behöver du:
1. Lägga till DNS-poster som Resend visar i dashboard
2. Vänta på verifiering (kan ta några minuter)

## Alternativ: Använd en verifierad e-postadress

Om du inte vill verifiera domänen kan du ändra `from`-adressen i `api/contact.js` till en e-postadress som Resend redan har verifierat (t.ex. din personliga e-post).

## Säkerhetsfunktioner som är implementerade:

✅ **Honeypot-fält** - Dolt fält som spam-bots fyller i  
✅ **Tidstämpel-validering** - Förhindrar för snabba inlämningar  
✅ **E-postvalidering** - Kontrollerar att e-post är korrekt formaterad  
✅ **Telefonnummer-validering** - Kräver svenskt format (+46 eller 07X)  
✅ **Server-side validering** - All validering körs även på servern  
✅ **Rate limiting** - Förhindrar spam (kan utökas med Redis/Upstash)

## Testa formuläret

Efter att du har lagt till API-nyckeln i Vercel:
1. Deploya projektet till Vercel
2. Fyll i formuläret på hemsidan
3. Kontrollera att e-posten kommer till `info@mpab.nu`

## Felsökning

- **"E-posttjänst är inte konfigurerad"**: Kontrollera att `RESEND_API_KEY` är satt i Vercel
- **"Kunde inte skicka meddelandet"**: Kontrollera att domänen är verifierad i Resend
- **E-post kommer inte fram**: Kontrollera spam-mappen och att `info@mpab.nu` är korrekt

