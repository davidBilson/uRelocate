import {Link} from 'react-router-dom'
import FooterIcon from './FooterIcon'

const SingleFooterWidgetOne = () => {
  return (
    <section className='single-footer-widget'>
            <h3>Helpful Links</h3>
            <div className='single-footer-widget-list'>
                <ul>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/policy'>Privacy Policy</Link></li>
                    <li><Link to='/new-features'>New Features</Link></li>
                    <li><Link to='/testimonies'>Testimonies</Link></li>
                    <li><Link to='/faqs'>Frequently Asked Questions</Link></li>
                    <li><Link to='/advert'>Advertisment</Link></li>
                </ul>
                <ul>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/policy'>Privacy Policy</Link></li>
                    <li><Link to='/new-features'>New Features</Link></li>
                    <li><Link to='/testimonies'>Testimonies</Link></li>
                    <li><Link to='/faqs'>Frequently Asked Questions</Link></li>
                    <li><Link to='/advert'>Advertisment</Link></li>
                </ul>
            </div>
            <h3>Follow Us</h3>
            <FooterIcon />
            </section>
  )
}

export default SingleFooterWidgetOne