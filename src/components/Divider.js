import React from 'react';
import './Divider.css';

const Divider = () => {
  return (
    <>
        <div className="divider-parent-container-frag">
            <div className="number-of-students">
                <h1>13,184
                + Star Students, Schools & <br /> Teachers love Afrilearn!
                </h1>
                <h3>New content added every week!</h3>
            </div>
            <div className="start-frag-container">
                <div className="top-frag-container">
                    <span className="top-image-fragment">
                        <img src="https://myafrilearn.com/static/media/videoLessons.d0ed402e.svg" alt="play" />
                    </span>
                    <div className="top-content-fragment">
                        <h3>
                        1,500 +
                        </h3>
                        <p>Video & Audio Lessons</p>
                    </div>
                </div>
                <div className="top-frag-container">
                    <span className="top-image-fragment">
                        <img src="https://myafrilearn.com/static/media/practice%20questions.2852ff88.svg" alt="graph" />
                    </span>
                    <div className="top-content-fragment">
                        <h3>
                        23,813 +
                        </h3>
                        <p>Practice Questions</p>
                    </div>
                </div>
                <div className="bottom-frag-container">
                <span className="bottom-image-fragment">
                        <img src="https://myafrilearn.com/static/media/classnote.6ccaef05.svg" alt="play" />
                    </span>
                    <div className="bottom-content-fragment">
                        <h3>
                        3,693 +
                        </h3>
                        <p>Rich & Ready Class Notes</p>
                    </div>
                </div>
                <div className="bottom-frag-container">
                <span className="bottom-image-fragment">
                        <img src="https://myafrilearn.com/static/media/engagements.d0788f27.svg" alt="play" />
                    </span>
                    <div className="bottom-content-fragment">
                        <h3>
                        345,948+ +
                        </h3>
                        <p>Learning Minutes</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Divider