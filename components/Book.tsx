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
            <div className="book-cover">
              <img
                src="/book-cover.png"
                alt="MIJ Confidential by Derek Rodgers"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: 'var(--black)' }}
              />
            </div>
          </div>

          <div className="book-content">
            <span className="eyebrow">The Book</span>
            <div className="gold-rule" />
            <h2 className="display-section">MIJ Confidential</h2>
            <p className="body-lg">
              The history, the art, the passion and the secrets of Japan's greatest guitars.
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
