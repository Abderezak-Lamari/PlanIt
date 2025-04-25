import React from 'react';

import Banner from './Banner';
import Element from './Element';

import './Week.css'

const Week = () => {
  return (
    <>
      <Banner />
      <div className='Void'>
      <div className='Quote'>
        <div className='Idk'>
          <h1 className='Hey'>Hey !</h1>
          <h1 className='Me'>"</h1>
          <h3 className='Mee'>Do stuff to get good (Skill issue tbh)</h3>
          <p className='M'>-Abderezak</p>
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
        <ul>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 3</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 3</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 3</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 3</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 3</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 1</li>
          <li className='CheckBox'><input type="checkbox" checked/> Item 2</li>
          <li className='CheckBox'><input type="checkbox" disabled/> Item 3</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Week;