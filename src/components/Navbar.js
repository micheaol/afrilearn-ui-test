import React from 'react';
import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


import './Navbar.css';


function Navbar() {
  return (
    <div>
        
        <nav className='nav-bar'>
           <div className="logo-container">
                <img src="https://myafrilearn.com/static/media/logonew.4424f4df.png" alt='logo'/>
           </div>
        <ul  className='navbar-ul'>
           
        </ul>
        <div className="left-items">
            <ul>
                <li className='search-icon'><FaSearch size={20}/></li>
                <li className='li-letter-only'>About Us</li>
                <li className='li-btn-nav'>Login</li>
                <li className='li-btn-nav'>Register</li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar