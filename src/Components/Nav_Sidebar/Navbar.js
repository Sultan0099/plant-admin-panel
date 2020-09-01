import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import icon from '../../Icon/icon.png'
import './Navbar.css';



function Sidebar() {

  

  return (
    <div>
      {/* Nav Bar */}
      <div className="wrapper">
        <div className="top_navbar">
          <div className="hamburger">
            <FaIcons.FaThList className="one" />
          </div>
          <div className="top_menu">
            <div className="logo">
              <img  src={icon}/>
            </div>
            <ul>
              <li>
                <Link to="/">
                  <FaIcons.FaUser />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Side __Bar */}

      <div className="sidebar">
        <ul>
            {/* At Mobile View */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="icon">
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                  </Link>
                </li>
              )
            })}

            {/* At Laptop or Desktop View */}
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="title">
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </div>

  );


}

export default Sidebar;
