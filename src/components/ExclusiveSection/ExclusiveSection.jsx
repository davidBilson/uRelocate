import Card from '../Cards/CardOne'
import '../../styles/ExclusiveSection.css'
import FirstExclusiveCard from './FirstExclusiveCard'
import ButtonSelect from './ButtonSelect'

const ExclusiveSection = () => {
  const article = [
    {
      no: 1,
      title: "5 Common Mistakes to Avoid When Applying for an International Visa",
      linkText:"write link here",
      tag: "Visa",
      className: "card card-blue"
    },
    {
      no: 2,
      title: "5 Common Mistakes to Avoid When Applying for an International Visa",
      linkText:"write link here",
      tag: "Visa",
      className: "card card-orange"
    },
    {
      no: 3,
      title: "Budget for relocating to USA, UK, Australia, Germany, Canada. Poland",
      linkText:"write link here",
      tag: "Visa",
      className: "card card-crimson"
    },
  ];
  const exclusiveArticle = article.map(articles => (
    <article key={articles.no}>
    <Card key={articles.no} boxOneClassName={articles.className} boxTwoClassName="card-cover" contentLink={articles.linkText} linkText={articles.title} tagClass="no-tag" tagName={articles.tag} />
    </article>
  ));
  return (
    <section className='exclusive-section'>
        <ButtonSelect />
        <FirstExclusiveCard />
        <div className='second-exclusive-cards'>{exclusiveArticle}</div>
    </section>
  )
}
export default ExclusiveSection