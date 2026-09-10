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

        <div
          style={{
            margin: '18px auto 20px',
            width: 'min(100%, 420px)',
            padding: '12px 14px',
            border: '1px solid rgba(196, 158, 77, 0.55)',
            borderRadius: '10px',
            background: 'rgba(0, 0, 0, 0.58)',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28)',
          }}
        >
          <div
            style={{
              marginBottom: '8px',
              color: '#d3af61',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
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
            style={{ width: '100%', height: '34px', display: 'block' }}
          >
            Your browser does not support audio playback.
          </audio>
        </div>

        <div className="hero-actions">
          <a href="#listen" className="btn btn-gold">Start Listening</a>
          <a href="#book" className="btn btn-outline">Get the Book</a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
