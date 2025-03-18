import React from 'react';

import './AboutUs.css'
import Banner from './Banner';

const AboutUs = () => {
  return (
    <>
    <Banner /> 
      <div className='AboutUs'>
        <img className='Background1' src='Background.png'></img>
        <img className='Background2' src='Background.png'></img>
        <div className='NotebookBox'>
          <div className='Springs'>
            <img className='Spring' src='Springs.png'></img>
            <img className='Spring' src='Springs.png'></img>
            <img className='Spring' src='Springs.png'></img>
          </div>

          <div className='BottomPages'></div>

          <div className='FrontPage'>

            <div className='Air'></div>

            <div className='TitlePage'>
              <h2>Stay on Track with Smart</h2>
              <h2>Task Management</h2>
              <img className='LineArt'></img>
            </div>

            <div className='PageWritingBox'>
              <div className='Lines'>
                <div className='Line'>
                  <p className='LineText'>A smart to-do list that helps you organize tasks, set priorities,</p>
                </div>

                <div className='Line'>
                  <p className='LineText'> and stay productive effortlessly. Plan smarter, achieve more</p>
                </div>

                <div className='Line'>
                </div>

                <div className='Line'>
                </div>

                <div className='Line'>
                  <p className='LineText'></p>
                </div>

                <div className='Line'></div>

                <div className='Line'>
                  <img className='Bubble'></img>
                  <img className='WigglyArrow'></img>
                  <img className='CatLayingDown' src='CatLaying.png'></img>
                </div>

                <div className='Line'>
                  <button className='GetStartedButton'>Get Started</button>
                </div>

                <div className='Line'>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className='CoolStuff'>
          <p className='CoolText'>Simple direct and  powerful</p>
          <div className='DividerY'></div>
          <p className='CoolText'>The best to-do list of the moment</p>
          <div className='DividerY'></div>
          <p className='CoolText'>Nothing short of remarkable</p>
        </div>

        <div className='NoBackground'>
        <h2 className='TitlesAbout'>About Us</h2>

        <div className='CatAndNotes'>
          <div className='Note'>
            <img className='NoteImg' src='NoteBook.png'></img>
            <p className='NoteText'>At Plan It, we believe in the power of organization to simplify life. Our smart planner helps you manage tasks, set priorities, and stay productive effortlessly. Whether you're a student, a professional, or just someone who loves staying on track, our platform is designed to make planning fun and efficient. Join us in turning goals into achievements—one task at a time</p>
          </div>

          <img className='CuteCat' src='Cat.png'></img>
        </div>

        <div className='PhoneAndText'>
          <div className='PhoneTextBox'>
            <p className='PhoneTextTitle'>Track Your Progress Instantly</p>
            <p className='PhoneText'>For years, we've refined our planner to seamlessly integrate into your workflow. With intuitive tracking and smart insights, you can monitor your progress, stay organized, and achieve your goals effortlessly</p>
          </div>
          <img className='Phone1' src='Phone.png'></img>
        </div>

        <img className='HeartLine'></img>

        <div className='PhoneAndText'>
          <img className='Phone2' src='Phone.png'></img>
          <div className='PhoneTextBox2'>
            <p className='PhoneTextTitle'>Stay Consistent, Keep Winning</p>
            <p className='PhoneText'>We've designed our planner to help you stay consistent and motivated. Track your streaks effortlessly, build lasting habits, and push yourself toward success every day with smart insights and intuitive progress tracking</p>
          </div>
        </div>

        <img className='HeartLine'></img>

        <h2 className='TitlesAbout'>Start Tracking, Stay Motivated</h2>

        <div className='PcAndStuff'>
          <div className='TextAndCheckmark1'>
            <p>Our planner helps you stay consistent and motivated by effortlessly tracking your streaks. Build lasting habits</p>
            <img className='CheckMark' src='CheckMark.png'></img>
          </div>

          <img className='Pc' src='Pc.png'></img>

          <div className='TextAndCheckmark2'>
            <img className='CheckMark' src='CheckMark.png'></img>
            <p>stay accountable, and celebrate your progress with smart insights and intuitive tracking.</p>
          </div>
        </div>


        <div className='BottomInfoBox'>
          <div className='BottomInfo'>
            <div className='InfoRow'>
              <img className='LogoImg' src='PlanIt.png'></img>
              <p>20 million users organize their work and daily lives with Todoist.</p>
            </div>

            <div className='InfoRow'>
              <p className='InfoTitle'>Quick Links</p>
              <a className='InfoLink'>Home</a>
              <a className='InfoLink'>About us</a>
              <a className='InfoLink'>Planner</a>
              <a className='InfoLink'>Acounts</a>
            </div>

            <div className='InfoRow'>
              <p className='InfoTitle'>support</p>
              <a className='InfoLink'>FAQs</a>
              <a className='InfoLink'>Privacy Policy</a>
              <a className='InfoLink'>Terms & conditions</a>
            </div>

            <div className='InfoRow'>
              <p className='InfoTitle'>Contact Information</p>
              <p className='LinkText'>Email support@PlanIT.com</p>
              <p className='LinkText'>Phone +213 5456 78906</p>
              <div className='Socials'>
                <img className='SocialsImg'></img>
                <a className='InfoLink'>@PlanItOfficial</a>
              </div>
              <div className='Socials'>
                <img className='SocialsImg'></img>
                <a className='InfoLink'>Plan It - Smart Planning</a>
              </div>
              <div className='Socials'>
                <img className='SocialsImg'></img>
                <a className='InfoLink'>@PlanItNow</a>
              </div>
            </div>

          </div>

          <div className='DividerX'></div>
          <p className='Copyright'>© 2025 Smart Educk. All Rights Reserved.</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;