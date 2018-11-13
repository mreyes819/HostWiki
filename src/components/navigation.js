import React from 'react'
import { Link } from 'gatsby'
import './navigation.css'

const Navigation = ({ siteTitle }) => (
  
    <div className = "nav-container" >
      <nav className = "nav-layout" >
        <Link to="/" className = "home-link" > SPACIOUS </Link>
        


        <div className="dropdown" id="push-right">
          <button className="dropbtn">Onboarding</button>
          <div className="dropdown-content">
            <Link to="/404" className="nav-link">Employee Handbook</Link>
            <Link to="/404" className="nav-link">Orientation</Link>
            <Link to="/404" className="nav-link">Glossary</Link>
            <Link to="/404" className="nav-link">Apps & Tools</Link>
          </div>
        </div>         


        <div className="dropdown">
          <button className="dropbtn">Support Resources</button>
          <div className="dropdown-content">
            <Link to="/404" className="nav-link">Issue Escalation Chart</Link>
            <Link to="/404" className="nav-link">Internal Gesture Guide</Link>
            <Link to="/404" className="nav-link">Member Incident Procedure</Link>
            <Link to="/404" className="nav-link">Technical Support</Link>
            <Link to="/404" className="nav-link">FAQ</Link>
          </div>
        </div>      



        <div className="dropdown" id="margin-right">
          <button className="dropbtn">Space Guide</button>
          <div className="dropdown-content">
            <Link to="/new-york" className="nav-link">New York</Link>
            <Link to="/san-francisco" className="nav-link">San Francisco</Link>
          </div>
        </div>      






      </nav>       
    </div>

  
)

export default Navigation



  