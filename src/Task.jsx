import React from 'react';
import './Home.css';

const Task = () => {
  return (
    <>
      <div className='TaskBox'>
            <div className='TaskLeft'>
              <p className='TaskTitle'>Team Meeting</p>
              <div className='BottomBox'>
                <p className='TaskBottomText'>1h30</p>
                <p className='TaskBottomText'>High Priority</p>
              </div>
            </div>
            <div className='TaskRight'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
        </div>
    </>
  );
};

export default Task;