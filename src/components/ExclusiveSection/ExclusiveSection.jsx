import '../../styles/ExclusiveSection.css'
import FirstExclusiveCard from './FirstExclusiveCard'
import ButtonSelect from './ButtonSelect'
import ExclusiveSlider from './ExclusiveSlider'

const ExclusiveSection = () => {
  return (
    <section className='exclusive-section'>
        <ButtonSelect />
        <FirstExclusiveCard />
        <div className='second-exclusive-cards'>
        <ExclusiveSlider />
        </div>
    </section>
  )
}
export default ExclusiveSection