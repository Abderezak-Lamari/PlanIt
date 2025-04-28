import React from 'react';
import { useState } from 'react'

import './App.css'
import Banner from './Banner'
import Preferences from './Preferences'
import Profile from './Profile'

const AccountSettings = ({ message: { setAllData, allData } }) => {

  const [Choice, setChoice] = useState(0)

  return (
    <>
      <Banner /> 
            <div className='ASBox'>
                <h2>Account Settings</h2>
                <div className='AccountSetting'>
                    <button className="AccountSettings"  onClick={() => setChoice(0)}>Profile</button>
                    <button className="AccountSettings" onClick={() => setChoice(1)}>Preferences</button>
                </div>
            </div>
        {Choice === 0 ? <Profile message={{ setAllData, allData }}/> : <Preferences message={{ setAllData, allData }}/>}
    </>
  );
}

export default AccountSettings;