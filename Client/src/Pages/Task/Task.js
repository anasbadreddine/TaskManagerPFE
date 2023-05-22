import React from 'react'
import './Task.css'
import { Link } from 'react-router-dom'

const Task = () => {
  return (
    <div>show all tasks</div>
  )
}

const AddTask = () => {
    return(
        <>
        <div className='ownbodyuser'>
      <div className="wrapper">
      <h2>Add Task</h2>
      <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Task Title" required/>
      </div>
      {/* 
      <div className="input-box input_desc">
       <input type="text" placeholder="Task Description" required/>
      </div>*/}


      <div className="input-box">
       <textarea placeholder="Task Description" required/>
      </div>
      

      <div className="input-box button">
      <input type="Submit" value="Add Task"/>
    </div>
    <div className="text">
      <h3><Link to='/showtasks'>Cancel</Link></h3>
    </div>
      </form>
      </div>
      </div> 
        </>
    )
}

export default Task
export {AddTask}