import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
      <header className="navbar">
        <NavLink to="/"><i class="fas fa-home"></i></NavLink>
        <NavLink to="/wishlist"><i class="fas fa-cart-plus"></i></NavLink>
      </header>
  )
}

export default NavBar;