export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-logo">MIJ Confidential</div>
        <p className="footer-copy">
          © 2026 MIJ Confidential. Hosted by Derek Rodgers.<br />
          <span style={{ opacity: 0.6 }}>The History, Mystery and Passion of Japanese Guitars</span>
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
