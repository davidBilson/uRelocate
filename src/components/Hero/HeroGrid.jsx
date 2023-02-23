import Card from '../Cards/CardOne'
const HeroGrid = () => {
    const heroCard = [
        {
          no:1,
          div:"div1",
          class:"card card-1",
          contentLink:"https://google.com",
          linkTitle:"5 Common Mistakes to Avoid When Applying for an International Visa",
          tagName:"Visa"
        },
        {
          no:2,
          div:"div2",
          class:"card card-2",
          contentLink:"https://google.com",
          linkTitle:"The Future of Immigration and International Travel",
          tagName:"Immigration"
        },
        {
          no:3,
          div:"div3",
          class:"card card-3",
          contentLink:"https://google.com",
          linkTitle:"The Pros and Cons of Obtaining a Tourist Visa for International Travel",
          tagName:"Tourism"
        },
        {
          no:4,
          div:"div4",
          class:"card card-4",
          contentLink:"https://google.com",
          linkTitle:"Top Destinations for Digital Nomads and Remote Workers in 2023",
          tagName:"Remote"
        },
        {
          no:5,
          div:"div5",
          class:"card card-5",
          contentLink:"https://google.com",
          linkTitle:"How to Navigate the International Visa Process for Business Travel",
          tagName:"Visa"
        },
        {
          no:6,
          div:"div6",
          class:"card card-6",
          contentLink:"https://google.com",
          linkTitle:"A Guide to Understanding International Visas for Study and Work",
          tagName:"Work"
        }
      ];
      const heroArticle = heroCard.map(heroArticles => (
        <div key={heroArticles.no} className={heroArticles.div}><Card boxOneClassName={heroArticles.class} boxTwoClassName="card-cover" contentLink={heroArticles.contentLink} linkText="5 Common Mistakes to Avoid When Applying for an International Visa" tagName={heroArticles.tagName} tagClass="card-tag" /></div>
      ))
  return (
    <div className="parent-grid">
            {heroArticle}
    </div>
  )
}
export default HeroGrid