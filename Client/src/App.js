import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Pages/Planning/store';
import reportWebVitals from './Pages/Planning/reportWebVitals';
import {Header} from './Sections/index'
import { Sidebar } from './Components/index';
import { AddGroup, AddTask, AddUser, Group, Task, User } from './Pages/index';
import  Planning from './Pages/Planning/components/Planning'
//import { About, HomePage } from './HomePage';
//import {Registration, Login} from './Authentification/index'


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
      <Provider store={store}>
        <Routes>
        
          <Route path='/addUser' element={<AddUser/>} />
          <Route path='/showusers' element={<User/>}/>
          <Route path='/addGroup' element={<AddGroup/>}/>
          <Route path='/showgroups' element={<Group/>}/>
          
          <Route path='/planning' element={<Planning/>}/>
          
          <Route path='/addtask' element={<AddTask/>}/>
          <Route path='/showtasks' element={<Task/>}/>
          
        </Routes>
        </Provider>
      </Sidebar>
    </Router>
    </>
  );
}
reportWebVitals();
export default App;
