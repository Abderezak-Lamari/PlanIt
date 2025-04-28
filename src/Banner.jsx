import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';

const Banner = () => {
  return (
    <>
      <div className="Pannel">
        <img src='logoL.png' className="Logo" alt="Logo" />
        
        <Link to="/" className="ButtonPannel">Home</Link>
        <Link to="/analytics" className="ButtonPannel">Analytics</Link>
        <Link to="/strike" className="ButtonPannel">Strike</Link>
        <Link to="/Planner" className="ButtonPannel">Planner</Link>
        <Link to="/account-settings" className="ButtonPannel">Account</Link>
        <Link to="/get-started" className="GetStarted">Get Started</Link>
      </div>

      <div className="BannerSeparator"></div>
    </>
  );
};

export default Banner;
