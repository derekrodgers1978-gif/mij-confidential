const bookFeatures = [
  'The complete history of ESP, Navigator, and the Custom Shop lineage',
  'Factory breakdowns — Fujigen, Tokai, Greco, Burny and the Lawsuit Era',
  'Rare catalog documentation and decade-by-decade collector\'s guide',
  'Identification, authentication, and valuation frameworks',
  'Collector interviews and the stories behind legendary pieces',
  'The modern MIJ revival and what\'s undervalued right now',
]

export default function Book() {
  return (
    <section id="book" className="book-bg">
      <div className="wrap">
        <div className="book-layout">
          <div className="book-cover-wrap">
            <div className="book-cover-shadow" />
            <div
              className="book-cover"
              style={{
                background: 'radial-gradient(circle at 50% 10%, #171717 0%, #090909 45%, #020202 100%)',
                border: '1px solid rgba(212,175,55,0.28)',
                boxShadow: 'inset 10px 0 20px rgba(0,0,0,.8), 0 28px 60px rgba(0,0,0,.55)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '11% 7% 8%',
                aspectRatio: '2 / 3',
              }}
              aria-label="MIJ Confidential by Derek Rodgers"
            >
              <div style={{
                position: 'absolute', inset: 0, opacity: .18,
                backgroundImage: 'repeating-radial-gradient(circle at 20% 20%, #777 0 1px, transparent 1px 4px)',
                mixBlendMode: 'overlay', pointerEvents: 'none'
              }} />

              <div style={{
                fontFamily: 'Georgia, Times New Roman, serif',
                fontWeight: 700,
                fontSize: 'clamp(4.8rem, 9vw, 7rem)',
                lineHeight: .9,
                letterSpacing: '-0.055em',
                background: 'linear-gradient(180deg, #fff0a0 0%, #d4a52f 35%, #8e5a08 75%, #f0c85c 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 0 rgba(255,220,120,.25)',
                zIndex: 1,
                marginTop: '5%',
              }}>MIJ</div>

              <div style={{
                zIndex: 2,
                marginTop: '-1%',
                transform: 'rotate(-5deg)',
                border: '5px solid #b50d16',
                boxShadow: 'inset 0 0 0 2px rgba(181,13,22,.35)',
                padding: '.26em .38em .18em',
                color: '#c5141c',
                fontFamily: 'Impact, Arial Black, sans-serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                textShadow: '0 0 1px #7b0000',
              }}>CONFIDENTIAL</div>

              <div style={{ width: '82%', marginTop: '16%', borderTop: '2px solid #b50d16' }} />
              <div style={{
                zIndex: 1,
                fontFamily: 'Georgia, Times New Roman, serif',
                color: '#d9ad4b',
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '.09em',
                fontSize: 'clamp(.78rem, 1.35vw, 1.05rem)',
                lineHeight: 1.55,
                padding: '6% 5%',
              }}>
                THE HISTORY, THE MYSTERY AND<br />THE PASSION OF JAPANESE GUITARS
              </div>
              <div style={{ width: '82%', borderTop: '2px solid #b50d16' }} />

              <div style={{
                marginTop: 'auto',
                marginBottom: '4%',
                zIndex: 1,
                fontFamily: 'Georgia, Times New Roman, serif',
                color: '#d9ad4b',
                textTransform: 'uppercase',
                letterSpacing: '.22em',
                fontSize: 'clamp(1rem, 2vw, 1.55rem)',
                whiteSpace: 'nowrap',
              }}>DEREK RODGERS</div>
            </div>
          </div>

          <div className="book-content">
            <span className="eyebrow">The Book</span>
            <div className="gold-rule" />
            <h2 className="display-section">MIJ Confidential</h2>
            <p className="body-lg">
              The history, the mystery and the passion of Japanese guitars.
              From the factories of the 1970s to the premium boutique makers of today —
              this is the book the collector world has been waiting for.
            </p>

            <div className="book-features">
              {bookFeatures.map((f, i) => (
                <div key={i} className="book-feature">
                  <div className="book-feature-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="book-actions">
              <a href="#" className="btn btn-gold">Pre-Order Now</a>
              <a href="#subscribe" className="btn btn-outline">Get Launch Updates</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
