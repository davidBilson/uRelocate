import Card from '../Cards/CardOne'
import heroData from './HeroData'

const HeroGrid = () => {
    const heroCard = heroData;
      const heroArticle = heroCard.map(heroArticles => (
        <div key={heroArticles.id} className={heroArticles.div}>
        <Card 
        boxOneClassName={heroArticles.class} 
        id={heroArticles.id} 
        boxTwoClassName="card-cover" 
        linkText={heroArticles.linkTitle} 
        tagName={heroArticles.tagName} 
        tagClass="card-tag" />
        </div>
      ))
  return (
    <div className="parent-grid">
            {heroArticle}
    </div>
  )
}
export default HeroGrid