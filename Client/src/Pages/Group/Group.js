import React from 'react'
import './Group.css'
import { Link } from 'react-router-dom'

const Group = () => {
  return (
    <div>All Groups</div>
  )
}

const AddGroup = () => {
    return(
      <div className='ownbodygroup'>
      <div className="wrapper">
  <h2>Add Group</h2>
  <form action="#">
    <div className="input-box">
      <input type="text" placeholder="Enter Group Name" required/>
    </div>
    <div className="input-box">
      <input type="text" placeholder="Enter Group Description" required/>
    </div>
    <div className="input-box">
      <input type='file'  id="avatar" name="avatar"
       accept="image/png, image/jpeg, image/jpg"/>
    </div>
    
    
    
    <div className="input-box button">
      <input type="Submit" value="Add Group"/>
    </div>
    <div className="text">
      <h3><Link to='/showgroups'>Cancel</Link></h3>
    </div>
  </form>
</div>
      </div>
    )
}

export default Group
export {AddGroup}