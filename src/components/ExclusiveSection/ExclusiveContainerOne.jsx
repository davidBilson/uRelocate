import {GrResources} from 'react-icons/gr'
import {RiGovernmentLine} from 'react-icons/ri'
import {MdOutlinePaid} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'

const ExclusiveContainerOne = () => {
  return (
    // RESOURCES CONTAINER
    <div className='exclusive-container'>

        <div className="exclusive-container-one">
          <h3>Navigating Immigration: Explore Free Tools and Resources</h3>
          <p>Navigating immigration can be daunting, but we've compiled a list of free resources to help. From online tools to legal aid, this section guides you through the best resources for a smoother immigration journey.</p>
          <button>Download all resources</button>
        </div>

        <div className="exclusive-container-two">
          
          <div className="">
            <span className='exclusive-icon'>
              <GrResources />
            </span>
            <h4>Free online resources</h4>
            <p>Access immigration information with ease</p>
          </div>
          
          <div className="">
          <span className='exclusive-icon'>
              <MdOutlinePaid />
            </span>
            <h4>Legal aid</h4>
            <p>Access legal aid for immigration issues</p>
          </div>
          <div className="">
          <span className='exclusive-icon'>
              <IoIosPeople />
            </span>
            <h4>Community support</h4>
            <p>Connect with other immigrants for support</p>
          </div>
          <div className="">
          <span className='exclusive-icon'>
              <RiGovernmentLine />
            </span>
            <h4>Government programs</h4>
            <p>Government-funded services for immigrants</p>
          </div>
        </div>
    </div>
  )
}

export default ExclusiveContainerOne