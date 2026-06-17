import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Merch from '../../components/Merch'
import Newsletter from '../../components/Newsletter'

export const metadata: Metadata = {
  title: 'MIJ Confidential — Merch Store',
  description: 'Limited-run MIJ Confidential merchandise for Japanese guitar collectors.',
}

export default function MerchPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '6rem' }}>
        <Merch />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
