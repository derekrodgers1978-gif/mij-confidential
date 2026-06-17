const platforms = [
  {
    name: 'Spotify',
    label: 'Listen on',
    sub: 'Free & Premium',
    href: '#',
    cls: 'spotify',
    icon: '🎵',
  },
  {
    name: 'Apple Podcasts',
    label: 'Listen on',
    sub: 'iOS & macOS',
    href: '#',
    cls: 'apple',
    icon: '🎙',
  },
  {
    name: 'YouTube',
    label: 'Watch on',
    sub: '@Tsunami_Guitars',
    href: 'https://youtube.com/@Tsunami_Guitars',
    cls: 'youtube',
    icon: '▶',
  },
]

export default function Listen() {
  return (
    <section id="listen" className="podcast-bg">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Where to Listen</span>
          <div className="gold-rule" />
          <h2 className="display-section">Subscribe & Follow</h2>
          <p>Available on every major platform. Never miss a drop.</p>
        </div>

        <div className="podcast-platforms">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="glass-card platform-card"
              target={p.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              <div className={`platform-icon ${p.cls}`}>
                <span style={{ fontSize: '1.4rem' }}>{p.icon}</span>
              </div>
              <div className="platform-info">
                <span>{p.label}</span>
                <strong>{p.name}</strong>
                <span className="platform-cta">{p.sub} →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Spotify embed placeholder — replace src with your actual show URL */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: 0 }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Latest Episode</p>
          <div style={{
            background: 'var(--black-3)',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            borderRadius: 0,
          }}>
            <div style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, var(--crimson-dim), var(--black-4))',
              border: '1px solid var(--glass-border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.5rem',
            }}>🎙</div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                MIJ Confidential
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--white-muted)', letterSpacing: '0.05em' }}>
                New episodes dropping soon — subscribe now for alerts
              </p>
            </div>
            <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
              <a href="#subscribe" className="btn btn-gold" style={{ fontSize: '0.6rem', padding: '0.7rem 1.5rem' }}>
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
