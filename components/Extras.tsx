const stats = [
  { value: '100+', label: 'Guitars Owned' },
  { value: '3', label: 'Decades Collecting' },
  { value: '20+', label: 'Brands Covered' },
  { value: '1', label: 'Definitive Book' },
]

const brands = [
  'ESP Custom Shop', 'Navigator', 'Tokai', 'Greco', 'Burny',
  'Fender Japan', 'Fujigen', 'Deviser', 'Momose', 'Crews Maniac Sound',
  'Headway', 'Moon', 'Orville', 'Bacchus', 'Edwards',
]

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="wrap">
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MarqueeBar() {
  const doubled = [...brands, ...brands]
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {doubled.map((b, i) => (
          <div key={i} className="marquee-item">{b}</div>
        ))}
      </div>
    </div>
  )
}
