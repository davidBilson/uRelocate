import '../../styles/FeaturedTitle.css'
const FeaturedTitle = (props) => {
  return (
    <header id={props.id} className={props.classNameFeatured}>
        <h2>{props.FeaturedTitle}</h2>
        <p>{props.FeaturedTag}</p>
    </header>
  )
}
export default FeaturedTitle