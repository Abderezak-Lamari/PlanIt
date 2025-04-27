import React from 'react';

import './App.css'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='SignInPage'>
      <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
      </div>

      
      <div class="orbit-container">
          <div class="planet one"></div>
          <div class="planet two"></div>
      </div>

      <div class="container">
        <div className='Box'>
          <div class="login-box">
              <img className='logo' src='logo.png'></img>
              <h1 className='SignIn'>Log In</h1>
              <p className='Text2'>Hey, Sign in and Orbit your goals with a plan that's out of this world.</p>
              <form>
                  <div class="input-group">
                      <input type="text" placeholder="Enter email or phone number" required/>
                  </div>
                  <div class="input-group">
                      <input type="password" id="password" placeholder="Enter your password" required/>
                      <span class="toggle-password" onclick="togglePassword()"></span>
                  </div>
                  <div class="options">
                      <label><input type="checkbox"/> Remember me</label>
                      <a href="#" class="forgot-password">Forgot password?</a>
                  </div>
                  <button type="submit" class="login-btn">Log In</button>
                  <a href='/PlanIt/login' className='login'>Haven't loged in?</a>
              </form>
          </div>
        </div>
          
      </div>
    </div>
    </>
  );
}

export default Login;