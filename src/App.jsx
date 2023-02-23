import ExclusiveSection from './components/ExclusiveSection/ExclusiveSection'
import FeaturedTitle from './components/FeaturedTitle/FeaturedTitle'
import Footer from './components/Footer/Footer'
import Fourcategory from './components/FourCategory/Fourcategory'
import Hero from './components/Hero/Hero'
import Influencer from './components/Influencer/Influencer'
import LandingHero from './components/LandingHero/LandingHero'
import Nav from './components/NavBar/Nav'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Top from './components/Top/Top'
import './styles/Cards.css'


function App() {
  return (
    <>
      <Top />
      <Nav />
      <LandingHero />
      <FeaturedTitle id="featured" FeaturedTitle="Featured" classNameFeatured="featured-header" FeaturedTag="Releases"/>
      <Hero />
      <ExclusiveSection />
      <Influencer />
      {/* <Fourcategory /> */}
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App