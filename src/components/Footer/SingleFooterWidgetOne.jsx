import React from 'react'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import FooterIcon from './FooterIcon'

const SingleFooterWidgetOne = () => {
  return (
    <section className='single-footer-widget'>
            <h3>Helpful Links</h3>
            <div className='single-footer-widget-list'>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Coming Soon</a></li>
                    <li><a href="">Testimonies</a></li>
                    <li><a href="">FAQ's</a></li>
                    <li><a href="">Advertisment</a></li>
                </ul>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Coming Soon</a></li>
                    <li><a href="">Testimonies</a></li>
                    <li><a href="">FAQ's</a></li>
                    <li><a href="">Advertisment</a></li>
                </ul>
            </div>
            <h3>Follow Us</h3>
            <FooterIcon />
            </section>
  )
}

export default SingleFooterWidgetOne