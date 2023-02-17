import NewContainerOne from './NewContainerOne'
import NewContainerThree from './NewContainerThree'

const NewContain = () => {
  return (
    <section className='new-container'>
            <NewContainerOne />
            <div className='new-container-two'>
                <div>
                    <div>0</div>
                    <div>0</div>
                </div>
                <div>
                    <div>0</div>
                    <div>0</div>
                </div>
                <div>
                    <div>0</div>
                    <div>0</div>
                </div>
            </div>
            <NewContainerThree />
        </section>
  )
}

export default NewContain