import React from 'react'
import { Link } from 'gatsby'
import './navigation.css'
import Helmet from 'react-helmet'

const Navigation = () => (
  
    <div className = "nav-container" >
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      </Helmet>    
      <nav className = "nav-layout" >
        <Link to="/" className = "home-link" > SPACIOUS </Link>
        


        <div className="dropdown" id="push-right">
          <button className="dropbtn">Onboarding</button>
          <div className="dropdown-content">
            <Link to="/404" className="nav-link"> 404 - Employee Handbook</Link>
            <Link to="/404" className="nav-link"> 404 - Orientation</Link>
            <Link to="/404" className="nav-link"> 404 - Glossary</Link>
            <Link to="/404" className="nav-link"> 404 - Apps & Tools</Link>
          </div>
        </div>         
        

        <div className="dropdown">
          <button className="dropbtn">Support Resources</button>
          <div className="dropdown-content">
            <Link to="/404" className="nav-link"> 404 - Issue Escalation Chart</Link>
            <Link to="/404" className="nav-link"> 404 - Internal Gesture Guide</Link>
            <Link to="/404" className="nav-link"> 404 - Member Incident Procedure</Link>
            <Link to="/404" className="nav-link"> 404 - Technical Support</Link>
            <Link to="/404" className="nav-link"> 404 - FAQ</Link>
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



  