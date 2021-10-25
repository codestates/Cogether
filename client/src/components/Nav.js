import React from 'react'
import '../scss/Nav.scss'
import UserControl from './UserControl'

const Nav = () => {
  return (
    <nav>
      <div className = "nav-logo">
        <img className = "nav-logo-full"
          src="images/logo_cogether-removebg-preview.png"
          >
        </img>
        <img className = "nav-logo-small"
          src="images/favicon-removebg.png"
          >
        </img>
      </div>
      <UserControl />
    </nav>
  )
}

export default Nav
