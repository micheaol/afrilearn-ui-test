import React from 'react';
import { Link } from 'react-router-dom';

import './WhyAfrilearnWorks.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPersonSquare, BsBook } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';

function WhyAfrilearnWorks() {
  return (
    <div className="why-container-fragment-parent-wrapper">
           <div className="head-title-wrapper">
            <h1 className="title-wrapper">
                Why Afrilearn works…
            </h1>
        </div>
    <div className='involved-wrapper'>
            <div className="table-wrapper">
            <div className="list-title">
              <h3 className='tittle-big'>Get Involved</h3>
              <h3 className='tittle-small-letter'>Find out how you can participate</h3>
            </div>
            <div className="other-list-title">
                <span><AiOutlineHeart size={25} color='black' /></span>
                <h3 className='other-tittle-big'>Mantle Give</h3>
            </div>
            <div className="other-list-title">
            <span><BsPersonSquare size={25} color='black' /></span>
              <h3 className='other-tittle-big'>Membership class</h3>
            </div>
            <div className="other-list-title">
            <span><MdLeaderboard size={25} color='black' /></span>
            
              <h3 className='other-tittle-big'>Leadership class</h3>
         
            </div>

        </div>
        <div className="image-wrapper">
                <img src="https://myafrilearn.com/static/media/animation_500_klge8ksp.6828eb4e.gif" alt="logo" srcset="" />
        </div>
        <div className="table-wrapper">
            <div className="list-title">
              <h3 className='tittle-big'>Get Involved</h3>
              <h3 className='tittle-small-letter'>Find out how you can participate</h3>
            </div>
            <div className="other-list-title">
                <span><AiOutlineHeart size={25} color='black' /></span>
              
                <h3 className='other-tittle-big'>Mantle Give</h3>
             
            </div>
            <div className="other-list-title">
            <span><BsPersonSquare size={25} color='black' /></span>
            
              <h3 className='other-tittle-big'>Membership class</h3>
            
            </div>
            <div className="other-list-title">
            <span><MdLeaderboard size={25} color='black' /></span>
            
              <h3 className='other-tittle-big'>Leadership class</h3>
            
            </div>

        </div>
    </div>
    </div>
  )
}

export default WhyAfrilearnWorks