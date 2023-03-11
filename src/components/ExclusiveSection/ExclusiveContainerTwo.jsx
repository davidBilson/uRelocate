import {GiArcheryTarget} from 'react-icons/gi'
import {SiProcesswire} from 'react-icons/si'
import {AiOutlineWarning} from 'react-icons/ai'
import {GrStatusGood} from 'react-icons/gr'

const ExclusiveContainerTwo = () => {
  return (
    // VISA CONTAINER
    <div className='exclusive-container'>
    <div className="exclusive-container-one">
      <h3>What You Need to Know Before Applying for a Visa</h3>
      <p>Obtaining a visa is an essential part of traveling internationally. Before you apply, make sure you understand the requirements and process. Here's what you need to know before applying for a visa.</p>
      <button>Download all resources</button>
    </div>

    <div className="exclusive-container-two exc-con-two">
      
    <div className="">
            <span className='exclusive-icon'>
              <GiArcheryTarget />
            </span>
            <h4>Visa requirements</h4>
            <p>Types of visas and requirements</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <SiProcesswire />
            </span>
            <h4>Application process</h4>
            <p>Step-by-step guide to the visa application</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <AiOutlineWarning />
            </span>
            <h4>Mistakes to avoid</h4>
            <p>Avoid incomplete or inaccurate information</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <GrStatusGood />
            </span>
            <h4>Tips for success</h4>
            <p>Increase your chances of a successful visa application</p>
          </div>

    </div>
</div>
  )
}

export default ExclusiveContainerTwo