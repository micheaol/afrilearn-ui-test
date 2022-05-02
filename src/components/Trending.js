import React from 'react';
import './Trending.css';

const Trending = () => {
  return (
    <div>
        <div className='parent-container-frag'>
        <div className="banner-container-frag">
            <div className="image-fragment-container">
                <img src="https://afrilearn-media.s3.eu-west-3.amazonaws.com/jss-one/civic-education/third-term/national-unity/thumbnail/national-unity.jpeg" alt="" />
            </div>
            <div className="trending-content-fragment-container">
                    <h4 className="course-container-frag">JSS One</h4>
                    <span className='trending-civic'>Civic Education</span>
            </div>
                <p className="last-message-frag">National Unity</p>
        </div>
        <div className="banner-container-frag">
            <div className="image-fragment-container">
                <img src="https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/thumbnail/production.jpeg" alt="" />
            </div>
            <div className="trending-content-fragment-container">
                    <h4 className="course-container-frag">SSS One</h4>
                    <span className='trending-civic'>Economics</span>
            </div>
                <p className="last-message-frag">Theory Of Production</p>
        </div>
        <div className="banner-container-frag">
            <div className="image-fragment-container">
                <img src="https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg" alt="" />
            </div>
            <div className="trending-content-fragment-container">
                    <h4 className="course-container-frag">SSS One</h4>
                    <span className='trending-civic'>Literature in English</span>
            </div>
                <p className="last-message-frag">Figures Of Speech 11</p>
        </div>
        <div className="banner-container-frag">
            <div className="image-fragment-container">
                <img src="https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg" alt="" />
            </div>
            <div className="trending-content-fragment-container">
                    <h4 className="course-container-frag">SSS One</h4>
                    <span className='trending-civic'>Economics</span>
            </div>
                <p className="last-message-frag">Meaning Of Economics</p>
        </div>
    </div>
    </div>
  )
}

export default Trending