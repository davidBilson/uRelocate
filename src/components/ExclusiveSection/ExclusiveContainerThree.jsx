import {BiCurrentLocation} from 'react-icons/bi'
import {MdTravelExplore} from 'react-icons/md'
import {GrShieldSecurity} from 'react-icons/gr'
import {FaPeopleCarry} from 'react-icons/fa'

const ExclusiveContainerThree = () => {
  return (
    // DESTINATIONS CONTAINER
    <div className='exclusive-container'>
    <div className="exclusive-container-one">
      <h3>Everything You Need to Know Before You Go</h3>
      <p>Preparing for a trip can be a thrilling experience, but it can also be overwhelming. With so many details to consider, it's essential to have all the necessary information in one place. Our section on "Everything You Need to Know Before You Go" offers a comprehensive guide to help make your trip planning process easier.</p>
      <button>Download all resources</button>
    </div>

    <div className="exclusive-container-two exc-con-three">

          <div className="">
            <span className='exclusive-icon'>
              <BiCurrentLocation />
            </span>
            <h4>Destination information</h4>
            <p>Find out about the destination you are traveling to.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <GrShieldSecurity />
            </span>
            <h4>Safety & security</h4>
            <p>Safety and security concerns in your destination.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <MdTravelExplore />
            </span>
            <h4>Travel logistics</h4>
            <p>Booking flights, accomodation, packing tips.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <FaPeopleCarry />
            </span>
            <h4>Cultural Immersion</h4>
            <p>Learn how to immerse yourself in the local culture.</p>
          </div>

    </div>

</div>
  )
}

export default ExclusiveContainerThree