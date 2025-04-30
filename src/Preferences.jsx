import React, { useState, useEffect } from 'react';
import './App.css'
import Banner from './Banner';

const Preferences = ({ message: { setAllData, allData }}) => {
  const [editStates, setEditStates] = useState({
    theme: allData?.theme || 0,
    EN: allData?.notify[0] || 0,
    Re: allData?.notify[1] || 0,
    Aff: allData?.notify[2] || 0,
    Mark: allData?.notify[3] || 0,
  });

  const [darkMode, setDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("option1"); // Default to Light Theme
  useEffect(() => {
    if (allData) {
      setDarkMode(allData.theme === 1); // true if theme is 1 (dark mode), false otherwise
      setSelectedTheme(allData.theme === 1 ? "option2" : "option1");
    }
  }, [allData]);



  // Update the theme when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  // Handle theme change from the dropdown
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleCheckChange = (event, field) => {
    const isChecked = event.target.checked;
    setEditStates((prev) => ({
      ...prev,
      [field]: isChecked ? 1 : 0,
    }));

  };

  // Handle Save Preferences button click
  const handleSavePreferences = () => {
    if (selectedTheme === "option2") {
      setDarkMode(true);  // Set dark mode if "Dark Theme" is selected
      setEditStates((prev) => ({
        ...prev,
        theme: 1,
      }));
    } else {
      setDarkMode(false); // Set light mode if "Light Theme" is selected
      setEditStates((prev) => ({
        ...prev,
        theme: 0,
      }));
    }

    const SendIt = {
      theme: selectedTheme === "option2" ? 1 : 0,
      options : [editStates.EN, editStates.Re, editStates.Aff, editStates.Mark]
    };

    console.log(SendIt);
    SavePreferences(SendIt)
  };

  const SavePreferences = async(SendIt) => {
    try {
      const response = await fetch(`http://localhost:5000/savePreferences-1/${allData.user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(SendIt),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      console.log('User updated:', data.user);
        
    } catch (error) {
      console.error('Error updating user:', error);
    }

    setAllData(prev => ({
      ...prev,
      theme: SendIt.theme,
      notify: SendIt.options
    }));
  }

  return (
    <>
      <div className='AccountSettingsBox'>
        <p>Theme</p>
        <select
          id="Theme"
          name="Theme"
          className='Choose'
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          <option value="option1">Light Theme (Default)</option>
          <option value="option2">Dark Theme</option>
        </select>

        <h3 className='Notifications'>Notifications</h3>
        <label><input type="checkbox" name="item1" value="EmailNotifications" checked={editStates.EN === 1} onChange={(e) => handleCheckChange(e, 'EN')}/> Email notifications</label><br/>
        <label><input className='checkbox' type="checkbox" name="item2" value="Reminders" checked={editStates.Re === 1} onChange={(e) => handleCheckChange(e, 'Re')}/> Reminders</label><br/>
        <label><input className='checkbox1' type="checkbox" name="item3" value="AffirmationMessages" checked={editStates.Aff === 1} onChange={(e) => handleCheckChange(e, 'Aff')}/> Affirmation messages</label><br/>
        <label><input type="checkbox" name="item4" value="MarketingEmails" checked={editStates.Mark === 1} onChange={(e) => handleCheckChange(e, 'Mark')}/> Marketing emails</label><br/>

        <p>Time Zone</p>
        <select id="TimeZone" name="TimeZone" className='Choose'>
          <option value="option1">Pacific time (UTC-8)</option>
          <option value="option2">Dark Theme</option>
          <option value="option3">Option 3</option>
        </select>

        <div className="OptionsCorS">
          <button className='Cancel'>Cancel</button>
          <button className='Save' onClick={handleSavePreferences}>Save Preferences</button>
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