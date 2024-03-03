import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from '../../assets/images/ARKA-logo.png'
import LogoSubtitle from '../../assets/images/ARKA-name-logo.png'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faThreads } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
   
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        >
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="ARKA" />
      </Link>
      <nav>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/arka-acharya-018743258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Arkaa2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.threads.net/@arka_acharyaa"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faThreads}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100076201548548&mibextid=ZbWKwL" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      
    </div>



  )
}

export default Sidebar;