import React from 'react';
import './Gamified.css'

const Gamified = () => {
  return (
    <div className="gamified-container-fragment-parent-wrapper">
        <div className="unlimitted-table-wrapper">
            <div className="unlimitted-list-title">
            <div className="innner-comp">
              <h1 className='unlimitted-tittle-big'>
              Gamified experience with rewards.
                </h1>
                  </div>
              <h3 className='unlimited-tittle-small-letter'>
              Fun exam practice to ace WASSCE, JSSCE, GCE, NECO and more like a pro!
              </h3>
            </div>
        </div>
        <div className="image-wrapper">
                <img src="https://myafrilearn.com/static/media/gamified.d7bdf4e2.gif" alt="" />
        </div>
    </div>
  )
}

export default Gamified