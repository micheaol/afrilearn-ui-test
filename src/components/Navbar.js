import React from 'react';
import { Link } from 'react-router-dom';


// import { NavData } from './NavbarData';

// import logo from '../images/logo.png'
import './Navbar.css';
// import MobileMenu from './MobileMenu';

function Navbar() {
  return (
    <div>
        
        <nav className='nav-bar'>
           <div className="logo-container">
                <img src="https://myafrilearn.com/static/media/logonew.4424f4df.png" alt='logo'/>
           </div>
        <ul  className='navbar-ul'>
            <li >
               About Us
            </li>
        </ul>
        <div className="left-items">
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
        {/* <div className="social-media-container">
            <ul className="social-media-icons">
                <li>
                    <a href='https://web.facebook.com/TheMantleChurch/' rel="noreferrer" target='_blank' ></a>
                </li>
                <li>
                    <a href="https://twitter.com/mantlechurch" rel="noreferrer" target='_blank'>
                    
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCokRF5AoBZ3PVd2Ea3VXxvg/videos" rel="noreferrer" target='_blank'>
                    
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/themantlechurch/" rel="noreferrer" target='_blank'>
                        
                    </a>
                </li>
            </ul>
        </div> */}
        {/* <div className="hamburger-button">
            <MobileMenu />
        </div> */}
        </nav>
    </div>
  )
}

export default Navbar