import React from 'react';

import './App.css'
import Banner from './Banner';

const Preferences = () => {
  return (
    <>
      <div className='AccountSettingsBox'>
          <p>Theme</p>
          <select id="Theme" name="Theme" className='Choose'>
            <option value="option1">Light Theme (Default)</option>
            <option value="option2">Dark Theme</option>
            <option value="option3">Option 3</option>
          </select>

          <h3 className='Notifications'>Notifications</h3>
          <label><input type="checkbox" name="item1" value="EmailNotifications"/> Email notifications</label><br/>
          <label><input type="checkbox" name="item2" value="Reminders"/> Reminders</label><br/>
          <label><input type="checkbox" name="item3" value="AffirmationMessages"/> Affirmation messages</label><br/>
          <label><input type="checkbox" name="item4" value="MarketingEmails"/> Marketing emails</label><br/>

          <p>Time Zone</p>
          <select id="TimeZone" name="TimeZone" className='Choose'>
            <option value="option1">Pacific time (UTC-8)</option>
            <option value="option2">Dark Theme</option>
            <option value="option3">Option 3</option>
          </select>

          <div className="OptionsCorS">
              <button className='Cancel'>Cancel</button>
              <button className='Save'>Save Preferences</button>
          </div>

          <div className="Bar"></div>

          <div className="DangerZone">
              <h3 className='DTitle'>Danger Zone</h3>
              <p className='DTxt'>Once you delete your account, there is no going back. Please be certain. If you log out you pay.</p>
              <button className='DButton'>Delete Account</button>
          </div>
      </div>
    </>
  );
}

export default Preferences;
