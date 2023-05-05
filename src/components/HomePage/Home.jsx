import LandingHero from '../LandingHero/LandingHero'
import SectionTitle from '../FeaturedTitle/FeaturedTitle'
import HeroGrid from '../Hero/Hero'
import InfluencerSection from '../Influencer/Influencer'
import Newsletter from '../NewsLetter/NewsLetter'
import FourCategory from '../FourCategory/Fourcategory'
import ExclusiveSection from '../ExclusiveSection/ExclusiveSection'

const Home = () => {
  return (
    <>
      <LandingHero />
      <SectionTitle id="featured" FeaturedTitle="Featured" classNameFeatured="featured-header" FeaturedTag="Releases"/>
      <HeroGrid />
      <ExclusiveSection />
      <InfluencerSection />
      <FourCategory />
      <Newsletter />
    </>
  )
}

export default Home