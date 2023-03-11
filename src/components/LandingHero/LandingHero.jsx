import '../../styles/Landinghero.css'
import LandingCrossBanner from './LandingCrossBanner'
import { useRef, useEffect } from 'react';

const LandingHero = () => {
  const animationDuration = useRef('30s');

  useEffect(() => {
    // Update the animation duration value outside of the component rendering cycle
    animationDuration.current = '30s';
  }, []);

  return (
    <section style={{animationDuration: animationDuration.current}} className="landing-hero">
        <div>
            <div className='landing-hero-box'>
                <h1>Discover the Possibilities of <span className="hero-head-diff">Migration</span></h1>
                <p>Join our community and gain access to expert advice, success stories, and a step-by-step guide to help you navigate the complexities of migration and achieve your dreams abroad.</p>
                <LandingCrossBanner />
            </div>
        </div>
    </section>
  )
}
export default LandingHero