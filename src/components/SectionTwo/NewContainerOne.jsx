import {AiTwotoneCalendar} from 'react-icons/ai'
import Tag from '../Tags/Tag'
const NewContainerOne = () => {
  return (
    <div className='card card-1'>
        <div className='card-cover'>
            <div>
            <Tag tagName="Travel" tagClass="card-tag" />
            <h3><a href=""> Alluring: peaceful first world countries to settle in 2024</a></h3>
            <p className="card-date"><AiTwotoneCalendar /> Jan 28th, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default NewContainerOne