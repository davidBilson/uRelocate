import React from 'react'
import Date from '../DateIcon/Date'
import ImageOne from '../../assets/image-1.webp'
const SingleFooterWidgetTwo = () => {
  return (
    <section className='single-footer-widget'>
            <h3>Recent Posts</h3>
            <div className='single-footer-widget-post'>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <Date date="Feb 22nd, 2023" />
                    </div>
                </article>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <Date date="Feb 9th, 2023" />
                    </div>
                </article>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <Date date="March 11, 2023" />
                    </div>
                </article>
            </div>
            </section>
  )
}

export default SingleFooterWidgetTwo