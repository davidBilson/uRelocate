import React from 'react'
import '../../styles/Newsletter.css'

const NewsLetter = () => {
  return (
    <section className='newsletter-container'>
        <div>
            <h2>Subscribe To Our Weekly Newsletter</h2>
        </div>
        <div>
            <form action="">
                <input className='newsletter-form-input' type="email" placeholder='Enter your email address' />
                <input className='newsletter-form-btn' type="submit" value="Subscribe Now" />
            </form>
        </div>
        <div>
            <p>No spam, notification only about new updates.</p>
        </div>
    </section>
  )
}

export default NewsLetter