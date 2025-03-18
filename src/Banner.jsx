import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';

const Banner = () => {
  return (
    <>
      <div className="Pannel">
        <img className="Logo" src="PlanIt.png" alt="Logo" />
        
        <Link to="/" className="ButtonPannel">Home</Link>
        <Link to="/about-us" className="ButtonPannel">About Us</Link>
        <Link to="/analytics" className="ButtonPannel">Planner</Link>
        <Link to="/account-settings" className="ButtonPannel">Account</Link>
        <Link to="/get-started" className="GetStarted">Get Started</Link>
      </div>

      <div className="BannerSeparator"></div>
    </>
  );
};

export default Banner;
