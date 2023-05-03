import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>show users</div>
  )
}

const AddUser = () => {
    return (
      <div className='ownbodyuser'>
      <div className="wrapper">
  <h2>Add User</h2>
  <form action="#">
    <div className="input-box">
      <input type="text" placeholder="Enter First Name" required/>
    </div>
    <div className="input-box">
      <input type="text" placeholder="Enter Last Name" required/>
    </div>
    <div className="input-box">
      <select className='groupselect' name="groups">
          <option value="G1">G1</option>
          <option value="G2">G2</option>
          <option value="G3">G3</option>
          <option value="G4">G4</option>
</select>
    </div>
    <div className="input-box">
      <input type='file'  id="avatar" name="avatar"
       accept="image/png, image/jpeg, image/jpg"/>
    </div>
    
    
    
    <div className="input-box button">
      <input type="Submit" value="Add User"/>
    </div>
    <div className="text">
      <h3><Link to='/showusers'>Cancel</Link></h3>
    </div>
  </form>
</div>
      </div>
    )
}

export default User

export {AddUser}