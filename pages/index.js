import AboutSection from "../components/LandingPage/AboutSection";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2'>
        <img src="/images/connectors/blue-blue.png" />
        </div>
      </div>
      <AboutSection />
    </main>
    </>
  )
}
