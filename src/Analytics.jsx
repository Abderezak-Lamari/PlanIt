import React from 'react';

import './App.css'
import './Analytics.css'

import Banner from './Banner';

const Analytics = () => {
  return (
    <>
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
            <div className='Circle'>
              <p className='Percentage'>40%</p>
              <div class="water-wave1"></div>
              <div class="water-wave2"></div>
              <div class="water-wave3"></div>
              <div class="water-wave4"></div>
            </div>
          </div>
        </div>

        <div className='Divider'></div>

        <div className='WeekBox'>
          <div className='Stat'>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Saturday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Sunday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Monday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Tuesday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Wednesday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Thursday</p>
            </div>
            <div className='DayAnalytic'>
              <div className='Tower'></div>
              <p className='WeekDay'>Friday</p>
            </div>
          </div>

          <div className='dividerX'></div>

          <div className='InfoAnalytics'>
            <div className='BoxInfo'>
              <div className='InfoAnalytic'>
                <div className='ColorInfo1'></div>
                <p className='guideStatWeek'>Wooop Woooop</p>
              </div>
              <div className='InfoAnalytic'>
                <div className='ColorInfo2'></div>
                <p className='guideStatWeek'>Keep Going idk maybe</p>
              </div>
              <div className='InfoAnalytic'>
                <div className='ColorInfo3'></div>
                <p className='guideStatWeek'>Thats kinda cool fr fr no cap</p>
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
          <div className='Graph'>
            <div className='Colum1'></div>
            <div className='Colum2'></div>
            <div className='Colum3'></div>
            <div className='Colum4'></div>
            
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
             <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
             <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
             <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
            <div className='MonthTower'>
              <div className='MonthStick'></div>
            </div>
          </div>

          <div className='GraphMonths'>
            <p className='Month'>January</p>
            <p className='Month'>February</p>
            <p className='Month'>March</p>
            <p className='Month'>April</p>
            <p className='Month'>May</p>
            <p className='Month'>June</p>
            <p className='Month'>July</p>
            <p className='Month'>August</p>
            <p className='Month'>September</p>
            <p className='Month'>October</p>
            <p className='Month'>November</p>
            <p className='Month'>December</p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
    </>
  );
}
export default Analytics;