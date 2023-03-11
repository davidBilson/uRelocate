import HeroSection from '../LandingHero/LandingHero'
import SectionTitle from '../FeaturedTitle/FeaturedTitle'
import GridSection from '../Hero/Hero'
import InfluencerSection from '../Influencer/Influencer'
import Newsletter from '../NewsLetter/NewsLetter'
import FourCategory from '../FourCategory/Fourcategory'
import ExclusiveSection from '../ExclusiveSection/ExclusiveSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionTitle id="featured" FeaturedTitle="Featured" classNameFeatured="featured-header" FeaturedTag="Releases"/>
      <GridSection />
      <ExclusiveSection />
      <InfluencerSection />
      <FourCategory />
      <Newsletter />
    </>
  )
}

export default Home