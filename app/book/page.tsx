import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import Newsletter from '../../components/Newsletter'

export const metadata: Metadata = {
  title: 'MIJ Confidential — The Book',
  description: 'A personal, honest and entertaining journey into the history, mystery and passion of Japanese guitars.',
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
