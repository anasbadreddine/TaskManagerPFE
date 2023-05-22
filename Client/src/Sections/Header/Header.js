import React from 'react'
import './Header.css'
import logo from './task.png'
import profilepic from './person-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div className="navbarprimary">
    <div className="logo"><img src={logo} alt=""/></div>
    <div className="account">
      <p className="accountname">nom prenom</p>
      <img src={profilepic} alt="" className="accountimg"/>
      <a href="/"> <FontAwesomeIcon icon={faSignOutAlt} color='white' className='icon1 disconnect'/> </a>
    </div>
  </div>
  )
}

export default Header