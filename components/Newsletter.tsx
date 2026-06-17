'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire to Mailchimp / ConvertKit / etc.
    setStatus('success')
    setEmail('')
  }

  return (
    <section id="subscribe" className="newsletter-bg">
      <div className="wrap">
        <div className="newsletter-inner">
          <span className="eyebrow">Join the List</span>
          <div className="gold-rule centered" />
          <h2 className="display-section">Get the Confidential Drop</h2>
          <p>
            New episode alerts, book updates, rare guitar finds, behind-the-scenes
            notes, and collector-only content. No noise. Just signal.
          </p>

          {status === 'success' ? (
            <div style={{
              padding: '1.5rem 2rem',
              border: '1px solid var(--glass-border-strong)',
              background: 'rgba(201,168,76,0.06)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              letterSpacing: '0.04em',
              color: 'var(--gold)',
            }}>
              You&apos;re on the list. The drop is coming.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          )}

          <p className="newsletter-note">
            No spam. Unsubscribe any time. For collectors, by a collector.
          </p>
        </div>
      </div>
    </section>
  )
}
