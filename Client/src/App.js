import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {Header} from './Sections/index'
import { Sidebar } from './Components/index';
import { AddGroup, AddTask, AddUser, Group, Planning, Task, User } from './Pages/index';
import { About, HomePage } from './HomePage';
import {Registration, Login} from './Authentification/index'


function App() {
  return (
    <>
    <Router>
      {/* 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      */}
      
      <Header/>
      <Sidebar>
        <Routes>
          <Route path='/addUser' element={<AddUser/>} />
          <Route path='/showusers' element={<User/>}/>
          <Route path='/addGroup' element={<AddGroup/>}/>
          <Route path='/showgroups' element={<Group/>}/>
          <Route path='/planning' element={<Planning/>}/>
          <Route path='/addtask' element={<AddTask/>}/>
          <Route path='/showtasks' element={<Task/>}/>
        </Routes>
      </Sidebar>
    </Router>
    </>
  );
}

export default App;
