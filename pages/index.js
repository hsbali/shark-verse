import AboutSection from "../components/LandingPage/AboutSection";
import HeroSection from "../components/LandingPage/HeroSection";
import NewSharkSection from "../components/LandingPage/NewSharkSection";
import Navbar from "../components/shared/Navbar";

import useWindowDimension from '../hooks/useWindowDimension'

export default function Home() {
  const { width, height } = useWindowDimension()

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
      <AboutSection width={width} />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/blue-black.png" className='w-full' />
        </div>
      </div>
      <NewSharkSection width={width} />
      {/* <RoadmapSection /> */}
    </main>
    </>
  )
}
