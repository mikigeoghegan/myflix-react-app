import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
      <header className="navbar">
        <NavLink to="/"><img src = './../../public/901847-200.png' className="home-btn"/></NavLink>
      </header>
  )
}

export default NavBar;