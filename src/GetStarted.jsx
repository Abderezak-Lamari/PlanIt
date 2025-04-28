import React from 'react';
import { useState } from 'react';

import './App.css'
import './GetStarted.css'

const GetStarted = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
      method: 'POST', // or 'GET' based on your needs
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

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
              <h1 className='SignIn'>Sign In</h1>
              <p className='Text2'>Hey, Sign in and Orbit your goals with a plan that's out of this world.</p>
              <form onSubmit={handleSignIn}>
                  <div class="input-group">
                      <input type="text"
                        placeholder="Enter email or phone number"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                  </div>
                  <div class="input-group">
                      <input type="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />

                      <span class="toggle-password" onclick="togglePassword()"></span>
                  </div>
                  <div class="options">
                      <label><input type="checkbox"/> Remember me</label>
                      <a href="#" class="forgot-password">Forgot password?</a>
                  </div>
                  <button type="submit" class="login-btn">Sign In</button>
                  <a href='/PlanIt/login' className='login'>Already signed in?</a>
              </form>
          </div>
        </div>
          
      </div>
    </div>
    </>
  );
}

export default GetStarted;