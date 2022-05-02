import React from 'react'
import FourBanners from '../components/FourBanners'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import Unlimited from '../components/Unlimited'
import WhyAfrilearnWorks from '../components/WhyAfrilearnWorks'

const Home = () => {
  return (
    <main className='home-container'>
        <Navbar />
        <div className="overlay-message-top">
            <h1 className='top-message-overlay'>Get Ahead with Afrilearn!</h1>
            <h4 className='bottom-message-overlay'>Enjoy Complete Primary & Secondary School Education Online (Ages 6-18) 
                <br />
                for Best Grades and Success in life.
            </h4>
            <div className="search-bar-container">
                <div className="serch-div-container">
                    <input type="search" className='search-input-overlay' placeholder='Select a class'/>
                </div>
                <div className="search-btn-container">
                    <button type="button" className='search-btn-overlay'>Join for free</button>
                </div>
            </div>
            
        </div>
        <WhyAfrilearnWorks />
        <FourBanners />
        <Unlimited />
        <Trending />
    </main>
  )
}

export default Home