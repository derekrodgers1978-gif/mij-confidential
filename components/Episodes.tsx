const episodes = [
  {
    num: '01',
    title: 'Why Japanese Guitars Matter',
    desc: 'How one guitar turns into a lifelong chase for ESP, Tokai, Greco, Navigator, Burny and the rest.',
    youtubeId: '', // Add your YouTube video ID here e.g. 'dQw4w9WgXcQ'
  },
  {
    num: '02',
    title: 'Catalogs, Myths & Unicorns',
    desc: 'Why old Japanese catalogs matter, what collectors look for, and how the legends get started.',
    youtubeId: '',
  },
  {
    num: '03',
    title: 'What Makes MIJ Special?',
    desc: 'Build quality, wood, factories, eras, pricing, and why the market keeps waking up.',
    youtubeId: '',
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7z"/>
    </svg>
  )
}

export default function Episodes() {
  return (
    <section id="episodes" className="episodes-bg">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">The Show</span>
          <div className="gold-rule" />
          <h2 className="display-section">Featured Episodes</h2>
          <p>Deep dives into the instruments, makers, eras, and obsessions that define the Made in Japan collector world.</p>
        </div>

        <div className="episodes-grid">
          {episodes.map((ep) => (
            <article key={ep.num} className="glass-card episode-card">
              <div className="episode-embed">
                {ep.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                    title={ep.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="episode-placeholder">
                    <div className="episode-placeholder-icon">
                      <PlayIcon />
                    </div>
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="episode-body">
                <p className="episode-num">Episode {ep.num}</p>
                <h3>{ep.title}</h3>
                <p>{ep.desc}</p>
                <a
                  href={ep.youtubeId ? `https://youtu.be/${ep.youtubeId}` : '#'}
                  className="btn btn-outline"
                  style={{ fontSize: '0.6rem', padding: '0.6rem 1.4rem' }}
                  target={ep.youtubeId ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {ep.youtubeId ? 'Watch Episode' : 'Coming Soon'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://youtube.com/@Tsunami_Guitars"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-crimson"
          >
            View All Episodes on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
