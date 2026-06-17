export default function Hero() {
  return (
    <section className="hero hero-image" id="home">
      {/* Full-screen logo background */}
      <div className="hero-image-bg" />

      {/* Bottom vignette fade into next section */}
      <div className="hero-fade-bottom" />

      {/* CTA overlay at bottom */}
      <div className="hero-image-content">
        <p className="hero-tagline">The History, Mystery and Passion of Japanese Guitars</p>
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
