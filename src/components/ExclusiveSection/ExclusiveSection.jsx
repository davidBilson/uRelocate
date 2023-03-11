import React, { useState } from 'react'
import ExclusiceContainerThree from './ExclusiveContainerThree';
import ExclusiveContainerFour from './ExclusiveContainerFour';
import ExclusiveContainerOne from './ExclusiveContainerOne';
import ExclusiveContainerTwo from './ExclusiveContainerTwo';
import '../../styles/Exclusive.css'

const ExclusiveSection = () => {
    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

  return (
    <div className='exclusive-parent-container'>
        <div className="exclusive-render-button">
            <button onClick={() => handleButtonClick(1)}>Resources</button>
            <button onClick={() => handleButtonClick(2)}>Visa</button>
            <button onClick={() => handleButtonClick(3)}>Destination</button>
            <button onClick={() => handleButtonClick(4)}>Budgeting</button>
        </div>
            
            {activeButton === 1 && <ExclusiveContainerOne />}
            {activeButton === 2 && <ExclusiveContainerTwo />}
            {activeButton === 3 && <ExclusiceContainerThree />}
            {activeButton === 4 && <ExclusiveContainerFour /> }          
    </div>
  )
}

export default ExclusiveSection