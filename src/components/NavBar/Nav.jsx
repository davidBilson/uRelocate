import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className='nav-header'>
    <nav className="navigation">
    <Link to="/" className="brand-name">
            <span>
            <img src={Logo} alt="" className="logo-img" />
            ReloRoots
            </span>
    </Link>
    <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
      {isNavExpanded ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
    <div
      className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <NavLink to="/" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>About Us</NavLink>
        </li>
        <li>
          <NavLink  to="/newsletter" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Community</NavLink>
        </li>
        <li>
          <NavLink  to="/advert" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Advert</NavLink>
        </li>
        <li>
          <Link id='loginBtn'  to="/elibility" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Eligility</Link>
        </li>
      </ul>
    </div>
  </nav>
  </header>
  )
}
export default Nav