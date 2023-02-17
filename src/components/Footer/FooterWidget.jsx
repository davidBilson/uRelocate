import React from 'react'
import SingleFooterWidgetOne from './SingleFooterWidgetOne'
import SIngleFooterWidgetThree from './SIngleFooterWidgetThree'
import SingleFooterWidgetTwo from './SingleFooterWidgetTwo'

const FooterWidget = () => {
  return (
    <section className='footer-widget'>
    <SingleFooterWidgetOne />
    <SingleFooterWidgetTwo />
    <SIngleFooterWidgetThree />
    </section>
  )
}

export default FooterWidget