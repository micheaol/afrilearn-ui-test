import React from 'react';
import './Footer.css';

import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-main-wrapper'>
        <div className="image-holder-sec">
            <img src="https://myafrilearn.com/static/media/whitelogo2.1e06445e.png" alt="" />
       </div>
       <div className="privacy-police-frag">
           <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
           </ul>
       </div>
       <div className="social-icons">
       <a href="https://twitter.com/mantlechurch" rel="noreferrer" target='_blank'> 
          <span>
            <AiOutlineTwitter size={20}/>
          </span>
        </a>
        <a href="https://web.facebook.com/TheMantleChurch/" rel="noreferrer" target='_blank'> 
          <span>
          <FaFacebookF  size={20}/>
          </span>
        </a>
        <a href="https://www.instagram.com/themantlechurch/" rel="noreferrer" target='_blank'> 
          <span>
          <AiOutlineInstagram size={20}/>
          </span>
        </a>
        <a href="https://www.youtube.com/channel/UCokRF5AoBZ3PVd2Ea3VXxvg/videos" rel="noreferrer" target='_blank'> 
          <span>
          <AiFillYoutube size={20}/>
          </span>
        </a>
       </div>
      
    </div>
  )
}

export default Footer