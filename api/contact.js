// Vercel Serverless Function för kontaktformulär
// Använder Resend för att skicka e-post

export default async function handler(req, res) {
  // Bara POST tillåts
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, message, honeypot, timestamp } = req.body;

  // Honeypot check - om fältet är ifyllt är det spam
  if (honeypot) {
    return res.status(200).json({ success: true }); // Fake success för att inte avslöja
  }

  // Tidstämpel check - om formuläret skickades för snabbt (< 2 sekunder) är det troligen spam
  if (timestamp && Date.now() - timestamp < 2000) {
    return res.status(429).json({ error: 'För snabbt, vänta lite' });
  }

  // Validering
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Namn, e-post och meddelande krävs' });
  }

  // E-post validering
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Ogiltig e-postadress' });
  }

  // Telefonnummer validering (svenskt format)
  if (phone) {
    // Ta bort alla mellanslag och bindestreck
    const cleanPhone = phone.replace(/[\s-]/g, '');
    // Kolla om det är +46 följt av 9 siffror, eller 07 följt av 8 siffror
    const phoneRegex = /^(\+46[1-9]\d{8}|0[1-9]\d{8})$/;
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({ error: 'Ogiltigt telefonnummer. Använd svenskt format (+46 eller 07X)' });
    }
  }

  // Rate limiting (enkel version - i produktion bör du använda Redis/Upstash)
  // Här kan du lägga till IP-baserad rate limiting om du vill

  try {
    // Skicka e-post via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY saknas i miljövariabler');
      return res.status(500).json({ error: 'E-posttjänst är inte konfigurerad' });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kontaktformulär <noreply@mpab.nu>', // Ändra till din verifierade domän
        to: ['info@mpab.nu'],
        replyTo: email,
        subject: `Nytt meddelande från ${name}`,
        html: `
          <h2>Nytt meddelande från kontaktformuläret</h2>
          <p><strong>Namn:</strong> ${name}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Meddelande:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
Nytt meddelande från kontaktformuläret

Namn: ${name}
${phone ? `Telefon: ${phone}` : ''}
E-post: ${email}

Meddelande:
${message}
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend error:', errorData);
      return res.status(500).json({ error: 'Kunde inte skicka meddelandet' });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, message: 'Meddelandet skickades!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Ett fel uppstod när meddelandet skulle skickas' });
  }
}

