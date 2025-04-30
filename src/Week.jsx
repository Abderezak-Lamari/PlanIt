import React from 'react';

import { useEffect, useState } from 'react';

import Banner from './Banner';
import Element from './Element';

import './Week.css'

const Week = () => {

  return (
    <div className='b'>
      <Banner />
      <div className='Void'>
      <div className='Quote'>
        <div className='Idk'>
          <h1 className='Hey'>Hey !</h1>
          <h1 className='Me'>"</h1>
          <h3 className='Mee'>Start before you’re ready. Good things happen when you start before you’re ready</h3>
          <p className='M'>-Steven Pressfield​</p>
        </div>
        <img className='Cat' src='Cat.png'></img>
      </div>

      <h1>My week</h1>
      <p className='Date'>📅 From 11 April, 2025 to 18 April, 2025</p>

      <div className='List'>
        <button className='LeftB'>&lt;</button>
        <div className='RealList'>
          <Element day={"Sat"} num={11}></Element>
          <Element day={"Sun"} num={12}></Element>
          <Element day={"Mon"} num={13}></Element>
          <Element day={"Tue"} num={14}></Element>
          <Element day={"Wed"} num={15}></Element>
          <Element day={"Thu"} num={16}></Element>
          <Element day={"Fri"} num={17}></Element>
        </div>
        <button className='RightB'>&gt;</button>
      </div>

      <div className='Titl'>
        <h3 className='TitleP'>MyPlans</h3>
        <p className='TitlePS'>for 11 sunday 2025</p>
      </div>

      <div className='Checkmarks'>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>study</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>rest</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Go outside</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do laundry</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Go to the gym</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Study</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Meditate</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Read a book</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Study</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Study</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Study</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Study</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do homework</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Read book</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Read book</p>
        </div>
      </div>
      </div>
      <div className='f'></div>
    </div>
  );
}

export default Week;