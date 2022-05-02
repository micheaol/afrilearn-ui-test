import React from 'react';
import ReactPlayer from "react-player";

import './Unlimited.css';

function Unlimited() {
  return (
    <div className="unlimtted-container-fragment-parent-wrapper">
        <div className="image-wrapper">
                <ReactPlayer
                url="https://youtu.be/F8XFbBiyrLc"
            />
        </div>
        <div className="unlimitted-table-wrapper">
            <div className="unlimitted-list-title">
            <div className="innner-comp">
              <h1 className='unlimitted-tittle-big'>
              Enjoy unlimited video lessons!
                </h1>
                  </div>
              <h3 className='unlimited-tittle-small-letter'>
              Download your favorite videos to watch offline and always have something to learn.
              </h3>
            </div>
            <button className='button-unlimitted-frag'>Start Learning</button>
        </div>
    </div>
  )
}

export default Unlimited