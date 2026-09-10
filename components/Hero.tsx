export default function Hero() {
  return (
    <section className="hero hero-image" id="home">
      {/* Full-screen logo background */}
      <div className="hero-image-bg" />

      {/* Bottom vignette fade into next section */}
      <div className="hero-fade-bottom" />

      {/* CTA overlay at bottom */}
      <div className="hero-image-content">
        <p className="hero-tagline">The history, the mystery and the passion of Japanese guitars</p>

        <div className="hero-actions">
          <a href="#listen" className="btn btn-gold">Start Listening</a>
          <a href="#book" className="btn btn-outline">Get the Book</a>
        </div>

        {/* Theme player intentionally sits below the hero buttons */}
        <div
          style={{
            margin: '14px auto 0',
            width: 'min(100%, 300px)',
            padding: '8px 10px',
            border: '1px solid rgba(196, 158, 77, 0.45)',
            borderRadius: '8px',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          <div
            style={{
              marginBottom: '5px',
              color: '#d3af61',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            MIJ Confidential Theme
          </div>
          <audio
            controls
            preload="metadata"
            src="/mij-confidential-theme.mp3"
            aria-label="Play the MIJ Confidential theme music"
            style={{ width: '100%', height: '30px', display: 'block' }}
          >
            Your browser does not support audio playback.
          </audio>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
