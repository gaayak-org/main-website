import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Vision from '@/components/Vision'
import Gap from '@/components/Gap'
import Aim from '@/components/Aim'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export default function Home() {
  return (
    <main className="page-container">
      <BackgroundAnimation />
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="problem">
        <Problem />
      </div>
      <div id="vision">
        <Vision />
      </div>
      <div id="gap">
        <Gap />
      </div>
      <div id="aim">
        <Aim />
      </div>
      <div id="signup">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}