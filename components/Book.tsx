const bookFeatures = [
  'A personal journey through the world of Japanese guitars',
  'Stories of collecting, discovery and obsession',
  'Honest reflections on the people and experiences along the way',
  'Written for collectors, players and anyone drawn to uncommon instruments',
]

export default function Book() {
  return (
    <section id="book" className="book-bg">
      <div className="wrap">
        <div className="book-layout">
          <div
            className="book-cover-wrap"
            style={{
              width: '100%',
              maxWidth: '700px',
              justifySelf: 'center',
            }}
          >
            <div className="book-cover-shadow" />
            <div
              className="book-cover"
              style={{
                background: 'transparent',
                border: 0,
                boxShadow: 'none',
                height: 'auto',
                aspectRatio: 'auto',
                overflow: 'visible',
                padding: 0,
                width: '100%',
              }}
            >
              <img
                src="/book-cover.png"
                alt="MIJ Confidential by Derek Rodgers"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 'none',
                  objectFit: 'contain',
                  display: 'block',
                  transform: 'scale(1.35)',
                  transformOrigin: 'center',
                }}
              />
            </div>
          </div>

          <div className="book-content">
            <span className="eyebrow">The Book</span>
            <div className="gold-rule" />
            <h2 className="display-section">MIJ Confidential</h2>
            <p className="body-lg">
              MIJ Confidential is a personal journey into the history, mystery and
              passion of Japanese guitars. Part memoir, part road story and part
              confession, it explores how a simple interest became a lifelong
              obsession. Honest, funny and written from inside the chase, it is a
              book about far more than guitars.
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
