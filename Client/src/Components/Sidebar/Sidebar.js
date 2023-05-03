import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import profileimg from './pers1.jpg'

const Sidebar = (props) => {
    useEffect(() => {
        const handleDropdownClick = (event) => {
          const parentLi = event.target.closest(".sidebar-dropdown");
          const submenu = parentLi.querySelector(".sidebar-submenu");
          const allDropdowns = document.querySelectorAll(".sidebar-dropdown");
    
          // Close all other open submenus
          allDropdowns.forEach((dropdown) => {
            if (dropdown !== parentLi && dropdown.classList.contains("active")) {
              dropdown.classList.remove("active");
              dropdown.querySelector(".sidebar-submenu").style.display = "none";
            }
          });
    
          // Toggle current submenu
          if (parentLi.classList.contains("active")) {
            parentLi.classList.remove("active");
            submenu.style.display = "none";
          } else {
            parentLi.classList.add("active");
            submenu.style.display = "block";
          }
        };
    
        const handleSidebarClose = () => {
          document.querySelector(".page-wrapper").classList.remove("toggled");
        };
    
        const handleSidebarShow = () => {
          document.querySelector(".page-wrapper").classList.add("toggled");
        };
    
        // Register event listeners
        document.querySelectorAll(".sidebar-dropdown > a").forEach((link) => {
          link.addEventListener("click", handleDropdownClick);
        });
        document.querySelector("#close-sidebar").addEventListener("click", handleSidebarClose);
        document.querySelector("#show-sidebar").addEventListener("click", handleSidebarShow);
    
        // Unregister event listeners on unmount
        return () => {
          document.querySelectorAll(".sidebar-dropdown > a").forEach((link) => {
            link.removeEventListener("click", handleDropdownClick);
          });
          document.querySelector("#close-sidebar").removeEventListener("click", handleSidebarClose);
          document.querySelector("#show-sidebar").removeEventListener("click", handleSidebarShow);
        };
      }, []);


  return (
    <div className="page-wrapper chiller-theme toggled my-own-mod">
  <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
    <i className="fas fa-bars"></i>
  </a>
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a href="#">Task Manager</a>
        <div id="close-sidebar">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="sidebar-header">
        <div className="user-pic">
          <img className="rounded-circle" src={profileimg}
            alt="User picture"/>
        </div>
        <div className="user-info">
          <span className="user-name">Anas
            <strong> BADR EDDINE</strong>
          </span>
          <span className="user-role">Administrator</span>
          <span className="user-status">
            <i className="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>

      <div className="sidebar-search">
        <div>
          <div className="input-group">
            <input type="text" className="form-control search-menu" placeholder="Search..."/>
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul>
          
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-user"></i>
              <span>Users</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                    <Link to="/adduser">Add Users</Link>
                </li>
                <li>
                    <Link to="/showusers">Show Users</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-user-group"></i>
              <span>Groups</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                    <Link to="/addgroup">Add Groups</Link>
                </li>
                <li>
                    <Link to="/showgroups">Show Groups</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="">
            <Link to="/planning">
              <i className="far fa-calendar-days"></i>
              <span>Planning</span>
            </Link>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-square-check"></i>
              <span>Tasks</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <Link to="/addtask">Add Task</Link>
                </li>
                <li>
                  <Link to="/showtasks">Show tasks</Link>
                </li>
                
              </ul>
            </div>
          </li>
          

        </ul>
      </div>
    </div>

    <div className="sidebar-footer">
      <a href="#/">
        <i className="fa fa-right-from-bracket"></i>
      </a>
    </div>
  </nav>

  <main class="page-content my-own-mod1">
    {props.children}
  </main>

</div>
  )
}

export default Sidebar