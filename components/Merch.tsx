const products = [
  {
    name: 'MIJ Confidential Tee',
    price: '$45',
    icon: '👕',
    tag: 'Apparel',
  },
  {
    name: 'Collector\'s Enamel Pin Set',
    price: '$28',
    icon: '📍',
    tag: 'Accessories',
  },
  {
    name: 'Vintage Japan Poster Print',
    price: '$65',
    icon: '🖼',
    tag: 'Art Print',
  },
  {
    name: 'MIJ Confidential Tote Bag',
    price: '$35',
    icon: '🛍',
    tag: 'Accessories',
  },
]

export default function Merch() {
  return (
    <section id="merch" className="merch-bg">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">The Store</span>
          <div className="gold-rule" />
          <h2 className="display-section">Merch & Collectibles</h2>
          <p>Limited-run pieces for the collector who appreciates the details.</p>
        </div>

        <div className="merch-grid">
          {products.map((p) => (
            <div key={p.name} className="glass-card merch-card">
              <div className="merch-img">
                <div className="merch-img-placeholder">
                  <div className="merch-img-icon">{p.icon}</div>
                  <span>{p.tag}</span>
                </div>
                <div className="merch-overlay">
                  <a
                    href="#"
                    className="btn btn-gold"
                    style={{ fontSize: '0.6rem', padding: '0.7rem 1.4rem' }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="merch-info">
                <h3>{p.name}</h3>
                <span className="merch-price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn btn-outline">View Full Store</a>
        </div>
      </div>
    </section>
  )
}
