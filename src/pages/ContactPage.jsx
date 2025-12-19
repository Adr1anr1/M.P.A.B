import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+46 ',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formTimestamp] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Specialhantering för telefonnummer - behåll +46 prefix
    if (name === 'phone') {
      // Ta bort allt utom siffror och +
      const cleaned = value.replace(/[^\d+]/g, '');
      // Om användaren tar bort +46, lägg tillbaka det
      if (!cleaned.startsWith('+46')) {
        setFormData({ ...formData, [name]: '+46 ' + cleaned.replace(/^\+46/, '') });
      } else {
        setFormData({ ...formData, [name]: cleaned.replace(/^\+46/, '+46 ') });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Rensa fel när användaren börjar skriva
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Namn krävs';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-post krävs';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ogiltig e-postadress';
    }
    
    if (formData.phone && formData.phone !== '+46 ') {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (!/^\+46[1-9]\d{8}$/.test(cleanPhone)) {
        newErrors.phone = 'Ange svenskt telefonnummer (9 siffror efter +46)';
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Meddelande krävs';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          honeypot: '', // Honeypot fält (tomt för legitima användare)
          timestamp: formTimestamp,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '+46 ',
          email: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setErrors({ submit: data.error || 'Ett fel uppstod' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ submit: 'Kunde inte skicka meddelandet. Försök igen senare.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="muted-panel contact-form" onSubmit={handleSubmit}>
          {/* Honeypot fält - dolt för användare */}
          <input
            type="text"
            name="website"
            style={{ position: 'absolute', left: '-9999px', tabIndex: -1 }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          
          <label>
            Namn *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ditt namn"
              required
              style={{display:'block',width:'100%',marginTop:6,marginBottom:12}}
            />
            {errors.name && <span style={{color:'#dc2626',fontSize:'0.875rem'}}>{errors.name}</span>}
          </label>
          
          <label>
            Telefon
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+46 70 123 45 67"
              style={{display:'block',width:'100%',marginTop:6,marginBottom:12}}
            />
            {errors.phone && <span style={{color:'#dc2626',fontSize:'0.875rem'}}>{errors.phone}</span>}
          </label>
          
          <label>
            E-post *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="din@epost.se"
              required
              style={{display:'block',width:'100%',marginTop:6,marginBottom:12}}
            />
            {errors.email && <span style={{color:'#dc2626',fontSize:'0.875rem'}}>{errors.email}</span>}
          </label>
          
          <label>
            Meddelande *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Vad behöver du?"
              required
              style={{display:'block',width:'100%',marginTop:6}}
            />
            {errors.message && <span style={{color:'#dc2626',fontSize:'0.875rem'}}>{errors.message}</span>}
          </label>
          
          {errors.submit && (
            <div style={{color:'#dc2626',marginBottom:12,fontSize:'0.875rem'}}>{errors.submit}</div>
          )}
          
          {submitStatus === 'success' && (
            <div style={{color:'#16a34a',marginBottom:12,fontSize:'0.875rem',fontWeight:600}}>
              ✓ Meddelandet skickades! Vi återkommer så snart som möjligt.
            </div>
          )}
          
          <button
            type="submit"
            className="nav-cta"
            disabled={isSubmitting}
            style={{marginTop:16,opacity:isSubmitting?0.6:1,cursor:isSubmitting?'not-allowed':'pointer'}}
          >
            {isSubmitting ? 'Skickar...' : 'Skicka'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;


