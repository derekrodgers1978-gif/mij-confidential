const platforms = [
  {
    name: 'Instagram',
    label: 'Follow on',
    sub: '@mijconfidential',
    href: 'https://instagram.com/mijconfidential',
    cls: 'instagram',
    icon: '◎',
  },
  {
    name: 'YouTube',
    label: 'Watch on',
    sub: '@confidentialmij',
    href: 'https://youtube.com/@confidentialmij',
    cls: 'youtube',
    icon: '▶',
  },
]

export default function Listen() {
  return (
    <section id="listen" className="podcast-bg">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Where to Follow</span>
          <div className="gold-rule" />
          <h2 className="display-section">Subscribe & Follow</h2>
          <p>Follow MIJ Confidential and never miss a drop.</p>
        </div>

        <div className="podcast-platforms">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="glass-card platform-card"
              target="_blank"
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
            }}>▶</div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                MIJ Confidential
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--white-muted)', letterSpacing: '0.05em' }}>
                New episodes dropping soon — subscribe now for alerts
              </p>
            </div>
            <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
              <a href="https://youtube.com/@confidentialmij" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ fontSize: '0.6rem', padding: '0.7rem 1.5rem' }}>
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
