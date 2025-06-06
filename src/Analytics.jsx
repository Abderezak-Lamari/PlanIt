import React, { useEffect, useRef, useState } from 'react';

import './App.css'
import './Analytics.css'

import Banner from './Banner';

import { Chart } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const Analytics = () => {

  const [fdata, setFdata] = useState([]);
  const [Percentage, setPercentage] = useState([]);

  const RetrieveDatabase = async () => {
    try {
      const response = await fetch("http://localhost:5000/day-tasks/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log('Retrieved data:', data);
      setFdata(data);
      const var1 = data.length;
      const var2 = data.filter(task => task.status === 1).length;
      setPercentage(var2 * 100 / var1);

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    RetrieveDatabase()
  }, []);

  const labels = ["January", "February", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const labels2 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return (
    <div className='b'>
    <Banner /> 
    <div className='DayWeekBoxB'>
      <div className='StatName'>
        <h2 className='DayText'>Your Day Progress</h2>
        <h2 className='WeekText'>Your Week Progress</h2>
      </div>
      
      <div className='DayWeekBox'>
        <div className='DayBox'>
          <div className='Bottle'>
            <div className='Square'></div>
            <div className='Circle shadow-drop-2-center'>
              <p className='Percentage'>{Percentage}%</p>
              <div className="wave one"></div>
              <div className="wave two"></div>
              <div className="wave three"></div>
            </div>
          </div>
        </div>

        <div className='Divider'></div>

        <div className='WeekBox'>
          <div className='Stat'>
            
            <Bar
              data={{
                labels: labels2,
                datasets: [
                  {
                    label: "Progress",
                    data: [10, 14, 43, 4, 14, 37, 5, 9, 11, 1, 1, 0],
                    tension: 0.3,
                    backgroundColor: 'rgba(238, 164, 191, 1)',
                    borderColor: 'rgba(226, 43, 111, 1)',
                    fill: true,
                    borderRadius: 20,
                    barThickness: 15,
                  }
                ],
                options: {
                  responsive: true,
                }
              }}
            ></Bar>
          </div>

          <div className='InfoAnalytics'>
            <div className='BoxInfo'>
              <div className='InfoAnalytic'>
                <div className='ColorInfo1'></div>
                <p className='guideStatWeek'>excellent progress!</p>
              </div>
              <div className='InfoAnalytic'>
                <div className='ColorInfo2'></div>
                <p className='guideStatWeek'>Thats impressive!</p>
              </div>
              <div className='InfoAnalytic'>
                <div className='ColorInfo3'></div>
                <p className='guideStatWeek'>Thats really good</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    <div className='YearBoxB'>
      <div className='YearBox'>
        <h2>Your Year Progress</h2>
        <div className='TasksInfo'>
          <p>Total Tasks</p>
          <div className='DateGraph'>
            <p className='Date'>from</p>
            <p className='Date'>August2018</p>
            <p className='Date'>to</p>
            <p className='Date'>May2019</p>
          </div>
        </div>
        <div className='GraphBox'>
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Progress",
                  data: [10, 14, 43, 4, 14, 37, 5, 9, 11, 1, 1, 0],
                  tension: 0.3,
                  backgroundColor: 'rgba(238, 164, 191, 1)',
                  borderColor: 'rgba(226, 43, 111, 1)',
                  fill: true,
                }
              ],
            }}
          ></Line>

          <div className='Air'></div>
        </div>
        
      </div>
    </div>
    </div>
    <div className='f'></div>
    </div>
  );
}
export default Analytics;