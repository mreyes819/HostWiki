import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className = "nav-container" >
    <nav className = "nav-layout" >
      <Link to="/" className = "home-link" > {siteTitle} </Link>
      <Link to="/404" className = "nav-link" id="push-right"> Onboarding </Link>
      <Link to="/404" className = "nav-link" > Resources </Link>
      <Link to="/404" className = "nav-link" > Space Guide </Link>
    </nav>

          
  </div>
)

export default Header



