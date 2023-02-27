import Card from '../Cards/CardOne'
import heroData from './HeroData'
const HeroGrid = () => {
    const heroCard = heroData;
      const heroArticle = heroCard.map(heroArticles => (
        <div key={heroArticles.no} className={heroArticles.div}>
        <Card boxOneClassName={heroArticles.class} boxTwoClassName="card-cover" contentLink={heroArticles.contentLink} linkText={heroArticles.linkTitle} tagName={heroArticles.tagName} tagClass="card-tag" />
        </div>
      ))
  return (
    <div className="parent-grid">
            {heroArticle}
    </div>
  )
}
export default HeroGrid