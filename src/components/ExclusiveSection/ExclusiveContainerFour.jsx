import {GiTakeMyMoney, GiPayMoney, GiPriceTag} from 'react-icons/gi'
import {GrMoney} from 'react-icons/gr'

const ExclusiveCOntainerFour = () => {
  return (
    // BUDGET CONTAINER
    <div className='exclusive-container'>
    <div className="exclusive-container-one">
      <h3>Money Matters: How to Create a Realistic Travel Budget</h3>
      <p>If you're planning to relocate or immigrate to a new country, creating a realistic travel budget is crucial to ensuring a smooth transition. From visa fees to moving expenses, the costs can add up quickly. Our guide on "How to Create a Realistic Travel Budget" provides practical tips and strategies to help you budget effectively and make the most of your resources. Learn how to plan for the expenses of a big move and start your new life with financial peace of mind.</p>
      <button>Download all resources</button>
    </div>
    <div className="exclusive-container-two exc-con-four">
      
          <div className="">
            <span className='exclusive-icon'>
              <GiPriceTag />
            </span>
            <h4>Destination costs</h4>
            <p>Information on the average costs of travel in your destination.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <GrMoney />
            </span>
            <h4>Budgeting tips</h4>
            <p>Learn how  you can create a realistic travel budget.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <GiPayMoney />
            </span>
            <h4>Money management</h4>
            <p>Learn how to manage your money while traveling.</p>
          </div>

          <div className="">
            <span className='exclusive-icon'>
              <GiTakeMyMoney />
            </span>
            <h4>Hidden costs</h4>
            <p>Bank fees, travel insurance, unexpected expenses.</p>
          </div>

    </div>
</div>
  )
}

export default ExclusiveCOntainerFour