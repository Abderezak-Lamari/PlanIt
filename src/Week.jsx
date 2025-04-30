import React from 'react';

import { useEffect, useState } from 'react';

import Banner from './Banner';
import Element from './Element';

import './Week.css'

const Week = () => {

  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setQuote(data.slip.advice);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='b'>
      <Banner />
      <div className='Void'>
      <div className='Quote'>
        <div className='Idk'>
          <h1 className='Hey'>Hey !</h1>
          <h1 className='Me'>"</h1>
          <h3 className='Mee'>{quote}</h3>
          <p className='M'>-From AdviceClip</p>
        </div>
        <img className='Cat' src='Cat.png'></img>
      </div>

      <h1>My week</h1>
      <p className='Date'>📅 From 11 April, 2025 to 18 April, 2025</p>

      <div className='List'>
        <button className='LeftB'>&lt;</button>
        <div className='RealList'>
          <Element></Element>
          <Element></Element>
          <Element></Element>
          <Element></Element>
          <Element></Element>
          <Element></Element>
          <Element></Element>
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
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='0.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
        <div className='check'>
          <img src='1.png' className='squareCheck'></img>
          <p className='do'>Do stuff</p>
        </div>
      </div>
      </div>
      <div className='f'></div>
    </div>
  );
}

export default Week;