import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import Newsletter from '../../components/Newsletter'

export const metadata: Metadata = {
  title: 'MIJ Confidential — The Book',
  description: 'A personal, funny and honest journey through Japanese guitars, collecting, dealing and the stories behind more than 600 instruments.',
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
