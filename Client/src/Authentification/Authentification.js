import React from 'react'
import {Link} from 'react-router-dom'
import './Authentification.css'

const Registration = () => {
  return (
    <div className='ownbody'>
    <div className="wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter new username" required/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div className="text">
        <h3>Already have an account? <Link to='/Login'>Login now</Link></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

// login function
const Login = () => {
    return(
        <div className='ownbody'>
        <div className="wrapper">
    <h2>Login</h2>
    <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter your username" required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Enter your password" required/>
      </div>
      
      <div className="policy">
        <input type="checkbox"/>
        <h3>Remember me</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Login"/>
      </div>
      <div className="text">
        <h3>You don't have an account? <Link to='/Registration'>Register Now</Link></h3>
      </div>
    </form>
  </div>
        </div>
    )
}
export default Registration
export {Login}