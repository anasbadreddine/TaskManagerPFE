import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <h1>Task Manager App</h1>
    <nav>
      <ul className='ulheader'>
        <li className='liheader'><Link to="/" className="btn1">Home</Link></li>
        <li className='liheader'><Link to="/About" className="btn1">About</Link></li>
        <li className='liheader'><Link to="#" className="btn1">Contact</Link></li>
        <li className='liheader'><Link to="/Registration" className="btn1">Sign up</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header