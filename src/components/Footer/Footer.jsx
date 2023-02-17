import React from 'react'
import Copyright from './Copyright'
import '../../styles/Footer.css'
import FooterWidget from './FooterWidget'

const Footer = () => {
  return (
    <footer>
        <FooterWidget />
        <Copyright />
    </footer>
  )
}

export default Footer