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
      <Hero />
      <Problem />
      <Vision />
      <Gap />
      <Aim />
      <FinalCTA />
      <Footer />
    </main>
  )
}