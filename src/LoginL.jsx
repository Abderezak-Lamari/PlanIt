import React from 'react';

import './LoginL.css'

const LoginL = () => {
  return (
    <>
    <div class="background-container">
        
        <img class="doodle planet" src="planet1.png" alt="Wave doodle"/>
        <img class="doodle wave-2" src="wave2.png" alt="Wave doodle"/>
        <img class="doodle wave-3" src="wave3.png" alt="Wave doodle"/>
        <img class="doodle planet2" src="planet2.png" alt="Wave doodle"/>
       
        <div class="doodle dot-1"></div>
        <div class="doodle dot-2"></div>
    </div>

    <div class="login-container">

        <img src='Mas1.png' className='Mas'></img>
        <img class="ribbon" src="ribbon.png" alt="Pink ribbon"/>
        
        <div class="logo-container">
            <img src="logoL.png" alt="PlanIt Logo" width="30"/>
            <div class="logo-text">PLAN IT</div>
        </div>
        
        <h1>Sign In</h1>
        
        <p class="login-text">hey, Sign in and Orbit your goals with a plan that's out of this world.</p>
        
        <form id="login-form">
            <div class="input-group">
                <input type="text" placeholder="Enter email or phone number" id="email" required/>
            </div>
            
            <div class="input-group">
                <div class="password-container">
                    <input type="password" placeholder="Enter your password" id="password" required/>
                    <span class="toggle-password" id="toggle-password"></span>
                </div>
            </div>
            
            <div class="remember-forgot">
                <label class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    Remember me
                </label>
                <a href="#" class="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" class="login-btn">sign in</button>
        </form>
    </div>
    </>
  );
}

export default LoginL;