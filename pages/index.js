import AboutSection from "../components/LandingPage/AboutSection";
import HeroSection from "../components/LandingPage/HeroSection";
import NewSharkSection from "../components/LandingPage/NewSharkSection";
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
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10' >
        <img src="/images/connectors/blue-blue.png" className='w-full' />
        </div>
      </div>
      <AboutSection />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/blue-black.png" className='w-full' />
        </div>
      </div>
      <NewSharkSection />
      {/* <RoadmapSection /> */}
    </main>
    </>
  )
}
