import {BiMenuAltRight} from 'react-icons/bi'
import './Navbar.css'
import { useState } from 'react'
import Logo from '../../assets/logo.webp'

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className='nav-header'>
    <nav className="navigation">
    <a href="#" className="brand-name">
            <span>
            <img src={Logo} alt="" className="logo-img" />
            URELOCATE
            </span>
    </a>
    <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
      <BiMenuAltRight />
    </button>
    <div
      className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <a href="#about" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Home</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>About Us</a>
        </li>
        <li>
          <a href="#contact" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Community</a>
        </li>
        <li>
          <a href="#contact" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Advert</a>
        </li>
        <li>
          <a id='loginBtn' href="#contact" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Login</a>
        </li>
      </ul>
    </div>
  </nav>
  </header>
  )
}
export default Nav