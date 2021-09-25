import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
      <header className="navbar">
        <Link to="/"><i className="home-btn">hello</i></Link>
      </header>
  )
}

export default Header;