import React from 'react';
import { useState } from 'react';

import './App.css'

const Profile = ({ message: { setAllData, allData } }) => {
    const [editStates, setEditStates] = useState({
        name: false,
        dateOfBirth: false,
        gender: false,
        email: false,
        username: false,
        password: false,
        joiningDate: false,
    });

    const [formValues, setFormValues] = useState({
        name: allData.name,
        dateOfBirth: allData.dateOfBirth,
        gender: allData.gender,
        email: allData.email,
        username: allData.username,
        password: allData.password,
        joiningDate: allData.joiningDate,
    });

    console.log(formValues);

    const handleInputChange = (field, value) => {
        setFormValues((prev) => ({
          ...prev,
          [field]: value,
        }));
    };

    const flip = (field) => {
        setEditStates((prev) => ({
          ...prev,
          [field]: !prev[field],
        }));
    };

    const SavePreferences = () => {
        
    }

  return (
    <div className='AccountSettingsBox'>
        <div className='BasicInfo'>
            <div className='BasicInfoLeft'>
                <p className='TitleB'>Basic Info</p>
                <div className='Info'>
                    <p className='InfoText1'>Name</p>
                    {editStates.name ? (
                        <input 
                        type="text"
                        value={formValues.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.name}</p>
                    )}
                    <img src='pencil.png' className='Pen' onClick={() => flip('name')}></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Date of Birth</p>
                    {editStates.dateOfBirth ? (
                        <input 
                        type="text"
                        value={formValues.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.dateOfBirth}</p>
                        )}
                    <img src='pencil.png' className='Pen' onClick={() => flip('dateOfBirth')}></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Gender</p>
                    {editStates.gender ? (
                        <input 
                        type="text"
                        value={formValues.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.gender}</p>
                        )}
                    <img src='pencil.png' className='Pen' onClick={() => flip('gender')}></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Email</p>
                    {editStates.email ? (
                        <input 
                        type="text"
                        value={formValues.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.email}</p>
                        )}
                    <img src='pencil.png' className='Pen' onClick={() => flip('email')}></img>
                </div>
            </div>
            <div className='BasicInfoRight'>
                <button className='UserPhoto'></button>
                <p className='UploadUserPhoto'>Upload Photo</p>
            </div>
        </div>

        <h3>Account Info</h3>
        <div className='Info'>
            <p className='InfoText1'>Username</p>
            {editStates.username ? (
                        <input 
                        type="text"
                        value={formValues.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.username}</p>
                    )}
            <img src='pencil.png' className='Pen' onClick={() => flip('username')}></img>
        </div>
        <div className='Info'>
            <p className='InfoText1'>Password</p>
            {editStates.password ? (
                        <input 
                        type="text"
                        value={formValues.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>**************</p>
                        )}
            <img src='pencil.png' className='Pen' onClick={() => flip('password')}></img>
        </div>
        <div className='Info'>
            <p className='InfoText1'>Joining date</p>
            {editStates.joiningDate ? (
                        <input 
                        type="text"
                        value={formValues.joiningDate}
                        onChange={(e) => handleInputChange('joiningDate', e.target.value)}
                        autoFocus
                        />
                    ) : (
                        <p className='InfoText2'>{allData.joiningDate}</p>
                        )}
            <img src='pencil.png' className='Pen' onClick={() => flip('joiningDate')}></img>
        </div>
        
        <div className='space'></div>

        <div className="OptionsCorS">
            <button className='Cancel'>Cancel</button>
            <button className='Save' onClick={SavePreferences}>Save Preferences</button>
        </div>

    </div>
  );
}

export default Profile;
