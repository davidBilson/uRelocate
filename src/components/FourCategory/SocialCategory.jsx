import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

const SocialCategory = () => {
  return (
    <section className="hot-category">
        <h3 className='hot-category-title'>Connect With Us</h3>
        <div className="category-tag-social">
            <div>
                <span>Follow us On Facebook</span>
                <span className='social-icon'><FaFacebookF /></span>
            </div>
            <div>
                <span>Follow us On Twitter</span>
                <span className='social-icon'><AiOutlineTwitter /></span>
            </div>
            <div>
                <span>Follow us On Linkedin</span>
                <span className='social-icon'><FaLinkedinIn /></span>
            </div>
            <div>
                <span>Follow us On Instagram</span>
                <span className='social-icon'><AiOutlineInstagram /></span>
            </div>
        </div>
    </section>
  )
}

export default SocialCategory