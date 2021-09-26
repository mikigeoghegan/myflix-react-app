import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
      <header className="navbar">
        <NavLink to="/"><i className="home-btn">hello</i></NavLink>
      </header>
  )
}

export default NavBar;