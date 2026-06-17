import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Episodes from '../components/Episodes'
import Listen from '../components/Listen'
import Book from '../components/Book'
import Merch from '../components/Merch'
import About from '../components/About'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { StatsBar, MarqueeBar } from '../components/Extras'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <MarqueeBar />
        <Episodes />
        <Listen />
        <Book />
        <Merch />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
