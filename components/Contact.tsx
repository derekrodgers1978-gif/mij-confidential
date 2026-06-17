const contactLinks = [
  { label: 'Email', value: 'hello@mijconfidential.com', href: 'mailto:hello@mijconfidential.com' },
  { label: 'YouTube', value: '@Tsunami_Guitars', href: 'https://youtube.com/@Tsunami_Guitars' },
  { label: 'Instagram', value: '@tsunamiguitars', href: 'https://instagram.com/tsunamiguitars' },
  { label: 'Apple Podcasts', value: 'MIJ Confidential', href: '#' },
  { label: 'Spotify', value: 'MIJ Confidential', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-bg">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-panel">
            <span className="eyebrow">Work Together</span>
            <div className="gold-rule" />
            <h2 className="display-section">Guests &<br/>Sponsors</h2>
            <p>
              Have a rare MIJ guitar, collection, story, shop, luthier background,
              or brand that fits the show? MIJ Confidential is open for guest spots,
              sponsor placements, collaborations, and book-related media.
            </p>
            <p>
              This is a niche show for a passionate audience. If your product or
              story belongs in front of serious collectors, reach out.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="mailto:hello@mijconfidential.com" className="btn btn-gold">
                Send a Message
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <span className="eyebrow">Get in Touch</span>
            <div className="gold-rule" />
            <h2 className="display-section">Contact</h2>

            <div className="contact-links">
              {contactLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="contact-link"
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="contact-link-label">{l.label}</span>
                    {l.value}
                  </div>
                  <span style={{ marginLeft: 'auto', opacity: 0.5, fontSize: '0.7rem' }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
