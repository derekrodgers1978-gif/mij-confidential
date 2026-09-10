export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a href="#home" className="footer-logo" aria-label="MIJ Confidential — back to top">
          <img src="/hero-logo.webp" alt="MIJ Confidential" />
        </a>
        <p className="footer-copy">
          © 2026 MIJ Confidential. Hosted by Derek Rodgers.<br />
          <span style={{ opacity: 0.6 }}>The history, the mystery and the passion of Japanese guitars</span>
        </p>
        <nav className="footer-links">
          <a href="#episodes">Episodes</a>
          <a href="#book">Book</a>
          <a href="#merch">Merch</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://tsunamiguitars.com" target="_blank" rel="noopener noreferrer">
            Tsunami Guitars
          </a>
        </nav>
      </div>
    </footer>
  )
}
