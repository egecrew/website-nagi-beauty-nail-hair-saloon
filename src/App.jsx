import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">Işletmeniz</div>
          <nav className="nav">
            <a href="#about">Hakkında</a>
            <a href="#services">Hizmetler</a>
            <a href="#gallery">Galeri</a>
            <a href="#contact">İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hoşgeldiniz</h1>
            <p>Profesyonel hizmetlerimiz ile en iyi deneyimi yaşayın</p>
            <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              İletişim Kurun
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Hakkımızda</h2>
          <p>
            Yıllardır müşterilerimize en kaliteli hizmetleri sunmaktan gurur duyuyoruz. 
            Profesyonel ekibimiz ve modern hizmetlerimiz ile işletmeniz için en iyi seçimiz.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Hizmet 1</h3>
              <p>Açıklamalar ve detaylar</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⭐</div>
              <h3>Hizmet 2</h3>
              <p>Açıklamalar ve detaylar</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>Hizmet 3</h3>
              <p>Açıklamalar ve detaylar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Galeri</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">Fotoğraf 1</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Fotoğraf 2</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Fotoğraf 3</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">Fotoğraf 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>İletişim</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h3>Telefon</h3>
                  <p>+90 (252) XXX XXXX</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>info@isletme.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Adres</h3>
                  <p>Bodrum, Muğla</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
              <button type="submit" className="submit-button">Gönder</button>
              {submitted && <p className="success-message">✓ Mesajınız alındı!</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Işletmeniz. Tüm hakları saklıdır.</p>
          <p className="footer-credit">Vite + React ile oluşturuldu</p>
        </div>
      </footer>
    </div>
  )
}

export default App
