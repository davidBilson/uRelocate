import HotCategory from './HotCategory'
import SocialCategory from './SocialCategory'
import '../../styles/FourCategory.css'
import CategoryThree from './CategoryThree'
import CategoryFour from './CategoryFour'
import CategoryFive from './CategoryFive'

const Fourcategory = () => {
  return (
    <section className='four-category'>
        <CategoryFive />
        <CategoryThree />
        <CategoryFour />
        <HotCategory />
        <SocialCategory />
    </section>
  )
}

export default Fourcategory