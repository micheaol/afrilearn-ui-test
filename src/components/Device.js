import React from 'react';
import './Device.css';

const Device = () => {
  return (
    <div className="device-container-fragment-parent-wrapper">
        <div className="device-image-wrapper">
                <img src="https://myafrilearn.com/static/media/learn%20on%20any%20device%20mockup.e27b0cd4.png" alt="" />
        </div>
        <div className="unlimitted-table-wrapper">
            <div className="unlimitted-list-title">
            <div className="device-innner-comp">
              <h1 className='device-tittle-big'>
              Learn on any device.
                </h1>
            </div>
              <h3 className='device-tittle-small-letter'>
              Anywhere, everywhere. Cancel anytime.
              </h3>
              <div className="image-holder-devi">
                <img src="https://myafrilearn.com/static/media/playstore.9fa1ebae.png" alt="google" />
                <img src="https://myafrilearn.com/static/media/applestore.265ef526.png" alt="google" />
            </div>
            </div>
          
        </div>
     
    </div>
  )
}

export default Device