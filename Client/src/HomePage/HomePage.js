import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'
import {Header, Footer} from './index'

const HomePage = (props) => {
  return (
    <>
    <Header>{props.children}</Header>
  <main className='mainhome'>
    <h2>Stay organized and get things done with our task manager app</h2>
    <div className="click1">
      <Link to="/Registration" className="auth">Sign up for free</Link>
      <Link to="/Login" className="auth">Login</Link>
    </div>
  </main>
  <Footer>{props.children}</Footer>
    </>
  )
}


const About = (props) => {
    return(
        <>
        <Header>{props.children}</Header>
        <div className='aboutus'>
            <h1 className='title-about'>About Us</h1>
            <p><br/><br/>Welcome to our Task Manager app! We are a team of passionate individuals dedicated to creating the best task management software available.
                 Our team is made up of experienced developers, designers, and project managers who work together to ensure that our app meets the needs of our users.
                 <br/><br/>At our core, we believe that task management should be simple and intuitive.<br/>
                  We understand that our users have busy lives, and we want to make it easy for them to stay on top of their tasks and get things done.
                   That's why we've designed our app to be user-friendly and customizable, with features like task categorization, priority settings, and deadline reminders.
                   <br/><br/>Our team is committed to providing top-notch support to our users. Whether you have a question about a feature or need help troubleshooting an issue, we're here to help. We believe in building strong relationships with our users and working together to make our app even better.
                   <br/><br/>Thank you for choosing our Task Manager app. We look forward to helping you stay organized and productive!</p>
        </div>
        <Footer>{props.children}</Footer>
        </>
    )
}

export default HomePage
export {About} 