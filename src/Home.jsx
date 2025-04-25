import React from 'react';

import Banner from './Banner';

import './Home.css'
import './Task'
import Task from './Task';

const Home = () => {
  return (
    <>
      <Banner />
      <h2 className='Title'>Your AI Planner</h2>
      <h3 className='AskText'>Tell me about your tasks</h3>
      <textarea id="message" className='TextAI'></textarea>
      <button className='TaskButton'>Generate</button>
      <h3 className='AskText'>Today's Tasks</h3>
      <div className='TasksBox'>
        <div className='TasksContainer'>

          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>

        </div>
        <img src="Cat.png" className='Cat'></img>
      </div>

      <button className='TaskButton'>Generate My Planner</button>
      <h3 className='AskText'></h3>
      <h3 className='AskText'>Your Planner:</h3>
      <div className='PlannerBox'>
        <table className='Planner'>
          <tr> 
            <td className='PlannerOption'></td>
            <td className='PlannerOption'>0-15 mins</td>
            <td className='PlannerOption'>15-30 mins</td>
            <td className='PlannerOption'>30-45 mins</td>
            <td className='PlannerOption'>45-60 mins</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'>Column 2</td>
            <td className='PlannerCell'>Column 3</td>
            <td className='PlannerCell'>Column 4</td>
            <td className='PlannerCell'>Column 5</td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
          </tr>
          <tr> 
            <td className='PlannerOption CollumnOption'>1AM</td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
            <td className='PlannerCell'></td>
          </tr>
        </table>
      </div>
      <h3 className='AskText'>Are you Satisfied? If not not hesitate to give notes to your ai and regenerate!</h3>
      <textarea id="message" className='TextAI'></textarea>
      <button className='TaskButton'>Regenerate</button>
    </>
  );
}

export default Home;