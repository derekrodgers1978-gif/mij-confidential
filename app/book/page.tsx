import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import Newsletter from '../../components/Newsletter'

export const metadata: Metadata = {
  title: 'MIJ Confidential — The Book',
  description: 'The definitive collector\'s guide to Made in Japan guitars by Derek Rodgers. ESP, Navigator, Tokai, Greco, Burny and more.',
}

export default function BookPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '6rem' }}>
        <Book />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
