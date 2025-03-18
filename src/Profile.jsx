import React from 'react';

import './App.css'

const Profile = () => {
  return (
    <div className='AccountSettingsBox'>
        <div className='BasicInfo'>
            <div className='BasicInfoLeft'>
                <p className='TitleB'>Basic Info</p>
                <div className='Info'>
                    <p className='InfoText1'>Name</p>
                    <p className='InfoText2'>Abderezak Lamari</p>
                    <img src='pencil.png' className='Pen'></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Date of Birth</p>
                    <p className='InfoText2'>29/10/2005</p>
                    <img src='pencil.png' className='Pen'></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Gender</p>
                    <p className='InfoText2'>Male</p>
                    <img src='pencil.png' className='Pen'></img>
                </div>
                <div className='Info'>
                    <p className='InfoText1'>Email</p>
                    <p className='InfoText2'>IdkWhatToWrite@gmail.com</p>
                    <img src='pencil.png' className='Pen'></img>
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
            <p className='InfoText2'>Abderezak</p>
            <img src='pencil.png' className='Pen'></img>
        </div>
        <div className='Info'>
            <p className='InfoText1'>Password</p>
            <p className='InfoText2'>**************</p>
            <img src='pencil.png' className='Pen'></img>
        </div>
        <div className='Info'>
            <p className='InfoText1'>Joining date</p>
            <p className='InfoText2'>june 6, 2024</p>
            <img src='pencil.png' className='Pen'></img>
        </div>
        
        <div className='space'></div>

        <div className="OptionsCorS">
            <button className='Cancel'>Cancel</button>
            <button className='Save'>Save Preferences</button>
        </div>

    </div>
  );
}

export default Profile;
