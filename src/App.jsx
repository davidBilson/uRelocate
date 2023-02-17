import ExclusiveSection from './components/ExclusiveSection/ExclusiveSection'
import FeaturedTitle from './components/FeaturedTitle/FeaturedTitle'
import Footer from './components/Footer/Footer'
import Fourcategory from './components/FourCategory/Fourcategory'
import Hero from './components/Hero/Hero'
import Influencer from './components/Influencer/Influencer'
import LandingHero from './components/LandingHero/LandingHero'
import Nav from './components/NavBar/Nav'
import NewsLetter from './components/NewsLetter/NewsLetter'
import SectionTwo from './components/SectionTwo/SectionTwo'
import Top from './components/Top/Top'
import './styles/Cards.css'


function App() {
  return (
    <>
      <Top />
      <Nav />
      <LandingHero />
      {/* <FeaturedTitle id="featured" FeaturedTitle="Featured" classNameFeatured="featured-header" FeaturedTag="Releases"/>
      <Hero />
      <ExclusiveSection />
      <FeaturedTitle FeaturedTitle="What's New?" classNameFeatured="featured-header featured-header-two" FeaturedTag="Releases"/>
      <SectionTwo />
      <Influencer />
      <Fourcategory />
      <NewsLetter />
      <Footer /> */}
    </>
  )
}

export default App