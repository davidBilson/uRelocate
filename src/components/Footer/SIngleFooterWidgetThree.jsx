import React from 'react'
import ImageOne from '../../assets/image-1.webp'
import DateIcon from '../DateIcon/DateIcon'

const SIngleFooterWidgetThree = () => {
  return (
<section className='single-footer-widget'>
            <h3>Latest Reviews</h3>
            <div className='single-footer-widget-post'>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <p><DateIcon /> February 2, 2023</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <p><DateIcon /> February 2, 2023</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={ImageOne} alt="" />
                    </div>
                    <div>
                        <h4>Countries Accepting Immigrants Hassle-free</h4>
                        <p><DateIcon /> February 2, 2023</p>
                    </div>
                </article>
            </div>
            </section>
  )
}

export default SIngleFooterWidgetThree