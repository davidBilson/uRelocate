import {useEffect, useState} from 'react'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import Ukraine from '../../assets/ukraine.png'
import '../../styles/TopBar.css'

const Top = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
    const intervalId = setInterval(() => {
        setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
    }, []);

    const dateString = date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="nav-section-one">
      <div className='nav-top'>
        <div className="nav-date">
          <p>{dateString}</p>
          <img src={Ukraine} id="ukraine" alt="" />
        </div>
        <div className="nav-social">
          <p className='dim'>Follow us on</p>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FiInstagram /></a>
            <a href=""><FaTwitter /></a>
        </div>
      </div>
    </div>
  )
}
export default Top