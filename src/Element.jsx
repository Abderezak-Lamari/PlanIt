import React from 'react';

import './Week.css'

const Element = ({ day, num }) => {
  return (
    <div className='Element'>
      <div className='Face'>
        <img src='f.png' className='fa'></img>
      </div>
      <h3 className='Num'>{num}</h3>
      <p className='Day'>{day}</p>
    </div>
  );
};

export default Element;