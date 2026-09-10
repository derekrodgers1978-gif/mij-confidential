export default function Hero() {
  return (
    <>
      <section className="hero hero-image" id="home">
        {/* Logo gets the hero area to itself */}
        <div className="hero-image-bg" />
        <div className="hero-fade-bottom" />
      </section>

      {/* All controls sit below the logo */}
      <section
        aria-label="MIJ Confidential actions"
        style={{
          padding: '30px 20px 42px',
          background: '#080808',
          textAlign: 'center',
        }}
      >
        <p className="hero-tagline" style={{ margin: '0 auto 20px' }}>
          The history, the mystery and the passion of Japanese guitars
        </p>

        <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: '16px' }}>
          <a href="#listen" className="btn btn-gold">Start Listening</a>
          <a href="#book" className="btn btn-outline">Get the Book</a>
        </div>

        <div
          style={{
            margin: '0 auto',
            width: 'min(100%, 300px)',
            padding: '8px 10px',
            border: '1px solid rgba(196, 158, 77, 0.45)',
            borderRadius: '8px',
            background: 'rgba(0, 0, 0, 0.5)',
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
      </section>
    </>
  )
}
