import React from 'react'
import "./Navbar.css"
import Darkmode from '../Darkmode/Darkmode'
import fire from "../../assets/fire.png"
import Star from "../../assets/glowingstar.png"
import Party from "../../assets/party-blower.png"
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar-links">
          <Darkmode />
            <NavLink to="/">Popular <img src={fire} alt="fire emoji"  className='navbar_emoji'/></NavLink>
            <NavLink to="/top_rated">Top Rated <img src={Star} alt="star emoji"  className='navbar_emoji'/></NavLink>
            <NavLink to="/upcoming">Upcoming<img src={Party} alt="party face emoji"  className='navbar_emoji'/></NavLink>
        </div>
    </nav>
  )
}

export default Navbar