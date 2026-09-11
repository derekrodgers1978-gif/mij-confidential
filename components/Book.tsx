const bookFeatures = [
  'The hunt — great finds, bad decisions and the guitars that got away',
  'Navigators, Burnys, Tokais, Grecos and the instruments that started the obsession',
  'Collectors, dealers, lowballers and the characters surrounding the guitar world',
  'True stories including the Cat Piss SG, the Purple Burny and a five-hour blizzard drive',
  'Japan, Ochanomizu and what years of buying and selling taught me',
  'A brutally honest confession from a guitar addict who can barely play',
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
              MIJ Confidential is not a price guide, catalogue or factory encyclopedia.
              It is my personal journey through the history, mystery and passion of
              Japanese guitars — told through the instruments I chased, bought, sold,
              loved and occasionally regretted. Part memoir, part guitar obsession,
              and full of the collectors, dealers, lowballers and stories encountered
              along the way.
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
