import AboutSection from "../components/LandingPage/AboutSection";
import HeroSection from "../components/LandingPage/HeroSection";
import NewSharkSection from "../components/LandingPage/NewSharkSection";
import RoadmapSection from '../components/LandingPage/RoadmapSection'
import TeamSection from '../components/LandingPage/TeamSection';
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import useWindowDimension from '../hooks/useWindowDimension'

export default function Home() {
  const { width } = useWindowDimension()

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection width={width} />
      <div className='relative'> 
        <div className='absolute top-2/3 -translate-y-1/4 w-full z-10' >
        <img src="/images/connectors/lightblue-lightblue.png" className='w-full' />
        </div>
      </div>
      <AboutSection width={width} />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/blue-black.png" className='w-full' />
        </div>
      </div>
      <NewSharkSection width={width} />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/dark-blue.png" className='w-full' />
        </div>
      </div>
      <RoadmapSection width={width} />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/blue-black.png" className='w-full' />
        </div>
      </div>
      <TeamSection width={width} />
      <div className='relative'> 
        <div className='absolute top-1/2 -translate-y-1/2 w-full z-10'>
        <img src="/images/connectors/black-black.png" className='w-full' />
        </div>
      </div>
      <Footer width={width} />
    </main>
    </>
  )
}
