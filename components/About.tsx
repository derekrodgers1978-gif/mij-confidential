const topics = [
  'Rare Japanese guitar showcases',
  'Vintage catalog breakdowns',
  'Collector interviews & buyer stories',
  'ESP, Navigator, Tokai, Greco, Burny',
  'Deviser, Headway & boutique makers',
  'Market values & authenticity',
  'Myths, restoration, fakes & finds',
  'Behind-the-scenes book updates',
]

export default function About() {
  return (
    <section id="about" className="about-bg">
      <div className="wrap">
        <div className="about-layout">
          <div className="about-image-wrap">
            <div className="about-image">
              <div className="about-image-placeholder">
                <span style={{ fontSize: '3rem' }}>🎸</span>
                <span>Host Photo</span>
              </div>
              <div className="about-image-label">
                <strong>Derek Rodgers</strong>
                <span>Host & Author</span>
              </div>
            </div>
            <div className="about-deco" />
          </div>

          <div className="about-content">
            <span className="eyebrow">About the Host</span>
            <div className="gold-rule" />
            <h2 className="display-section">Derek Rodgers</h2>

            <p>
              Derek Rodgers is the host of MIJ Confidential and author of the MIJ Confidential
              book. A lifelong guitar obsessive, he has owned hundreds of guitars and carries
              deep knowledge of the Made in Japan world — especially the rare, overlooked, and
              under-documented pieces that collectors chase.
            </p>
            <p>
              Based in Calgary, Derek runs Tsunami Guitars, a dedicated Japanese guitar
              dealership, and Luthify, a custom instrument marketplace. His collection spans
              ESP, Navigator, Greco, Tokai, Momose, Crews Maniac Sound, and beyond.
            </p>
            <p>
              This show is for people who want more than surface-level guitar content. It is
              about the stories, history, feel, tone, market, and mystery behind instruments
              that deserve a lot more attention than they get.
            </p>

            <div className="topics-grid">
              {topics.map((t) => (
                <div key={t} className="topic-item">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
