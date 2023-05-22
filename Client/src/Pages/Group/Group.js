import React from 'react'
import './Group.css'
import { Link } from 'react-router-dom'


const Group = () => {
  return (
    <>
    <h2 className='sghead'>All Groups</h2>

    {/*button to add groups*/}

    <div className='sg_container'>
    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>


    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>



    
    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>
    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>
    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>
    <div className='sg_card'>
      <img src='' alt='' className='group_img' />
      <h4 className='sg_title'>Groupe1</h4>
      <p className='sg_description'>Le Lorem Ipsum est simplement du faux texte 
      employé dans la composition et la mise en page avant impression.
       Le Lorem Ipsum est le faux texte standard de...</p>
       <ul className='sg_ul'>
        <h6 className='sg_team'>Team Members</h6>
        <li>anas</li>
        <li>mhmd</li>
        <li>fachi</li>
       </ul>
    </div>


    </div>
    </>
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