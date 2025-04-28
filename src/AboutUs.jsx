import React from 'react';
import { useEffect } from "react";

import './AboutUs.css'
import Banner from './Banner';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AboutUs = () => {

  const useScrollAnimation = () => {
    return useInView({ triggerOnce: true, threshold: 0 });
  };
  
  const { ref: ref, inView: inView } = useScrollAnimation();
  const { ref: ref1, inView: inView1 } = useScrollAnimation();
  const { ref: ref2, inView: inView2 } = useScrollAnimation();
  const { ref: ref3, inView: inView3 } = useScrollAnimation();
  const { ref: ref4, inView: inView4 } = useScrollAnimation();
  const { ref: ref5, inView: inView5 } = useScrollAnimation();
  const { ref: ref6, inView: inView6 } = useScrollAnimation();
  const { ref: ref7, inView: inView7 } = useScrollAnimation();
  const { ref: ref8, inView: inView8 } = useScrollAnimation();
  const { ref: ref9, inView: inView9 } = useScrollAnimation();

  return (
    <>
    <Banner />
      <div className='AboutUs'>

        <div className='Background1'></div>
        <div className='Background2'></div>
        <div className='NotebookBox animate__animated animate__fadeInUp' >
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
          <div ref={ref9} className={`Note ${inView9 ? 'animate__animated animate__fadeIn' : ''}`}>
            <img className='NoteImg' src='NoteBook.png'></img>
            <p className='NoteText'>At Plan It, we believe in the power of organization to simplify life. Our smart planner helps you manage tasks, set priorities, and stay productive effortlessly. Whether you're a student, a professional, or just someone who loves staying on track, our platform is designed to make planning fun and efficient. Join us in turning goals into achievements—one task at a time</p>
          </div>

          <img src='Mas.png'  ref={ref8} className={`CuteCat ${inView8 ? 'animate__animated animate__fadeInBottomRight' : ''}`}></img>
        </div>

        <div className='PhoneAndText'>
          <div ref={ref} className={`PhoneTextBox ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
            <p className='PhoneTextTitle'>Track Your Progress Instantly</p>
            <p className='PhoneText'>For years, we've refined our planner to seamlessly integrate into your workflow. With intuitive tracking and smart insights, you can monitor your progress, stay organized, and achieve your goals effortlessly</p>
          </div>
          <img src='Phone.png' ref={ref1} className={`Phone1 ${inView1 ? 'animate__animated animate__fadeInRight' : ''}`}></img>
        </div>

        <img className='HeartLine'></img>

        <div className='PhoneAndText'>
          <img src='Phone.png' ref={ref2} className={`Phone2 ${inView2 ? 'animate__animated animate__fadeInLeft' : ''}`}></img>
          <div ref={ref3} className={`PhoneTextBox2 ${inView3 ? 'animate__animated animate__fadeInRight' : ''}`}>
            <p className='PhoneTextTitle'>Stay Consistent, Keep Winning</p>
            <p className='PhoneText'>We've designed our planner to help you stay consistent and motivated. Track your streaks effortlessly, build lasting habits, and push yourself toward success every day with smart insights and intuitive progress tracking</p>
          </div>
        </div>

        <img className='HeartLine'></img>

        <h2 ref={ref4} className={`TitlesAbout ${inView4 ? 'animate__animated animate__fadeIn' : ''}`}>Start Tracking, Stay Motivated</h2>

        <div className='PcAndStuff'>
          <div ref={ref5} className={`TextAndCheckmark1 ${inView5 ? 'animate__animated animate__fadeInLeft' : ''}`}>
            <p>Our planner helps you stay consistent and motivated by effortlessly tracking your streaks. Build lasting habits</p>
            <img className='CheckMark' src='CheckMark.png'></img>
          </div>

          <img src='Pc.png' ref={ref6} className={`Pc ${inView6 ? 'animate__animated animate__zoomIn' : ''}`}></img>

          <div ref={ref7} className={`TextAndCheckmark2 ${inView7 ? 'animate__animated animate__fadeInRight' : ''}`}>
            <img className='CheckMark' src='CheckMark.png'></img>
            <p>stay accountable, and celebrate your progress with smart insights and intuitive tracking.</p>
          </div>
        </div>


        <div className='BottomInfoBox'>
          <div className='BottomInfo'>
            <div className='InfoRow'>
              <img className='LogoImg' src='PlanIt.png'></img>
              <p className='FunFact'>20 million users organize their work and daily lives with TodoLists.</p>
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