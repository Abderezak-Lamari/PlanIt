import React from 'react';
import { useState, useEffect } from 'react';

import Banner from './Banner';

import './Home.css'
import './Task'
import Task from './Task';
import { data } from 'react-router-dom';

const Home = () => {

  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [plannerData, setPlannerData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [fdata, setFdata] = useState([]);

  const [selectedCell, setSelectedCell] = useState({ hour: null, idx: null });

  const statusColorMap = {
    2: 'bg-red-200',
    0: 'bg-white-200',
    1: 'bg-green-100',
  };

  const [hour, setHour] = useState(null);

  useEffect(() => {
    const getCurrentHour = () => {
      const currentHour = new Date().getHours();
      setHour(currentHour);
    };

    getCurrentHour();
  }, []);

  const RetrieveDatabase = async () => {
    try {
      const response = await fetch("http://localhost:5000/day-tasks/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log('Retrieved data:', data);
      setFdata(data);

      // Grouping the data by hour
      const grouped = data.reduce((acc, item) => {
        const hour = item.hour;
        const name = item.name;

        if (!acc[hour]) {
          acc[hour] = {
            hour: hour,
            slots: []
          };
        }

        acc[hour].slots.push(name);
        return acc;
      }, {});

      const sortedGroupedData = Object.values(grouped).sort((a, b) => a.hour.localeCompare(b.hour));


      // Convert grouped object to an array and set the state
      setFiltered(Object.values(sortedGroupedData));

    } catch (error) {
      console.error('Error retrieving data:', error);

    }
  };

  useEffect(() => {
    RetrieveDatabase()
  }, []);

  const command = "I want you to give me a Full day ToDo list based on how and what i want to do in my day, i will be giving you that in the end, the way i want you to answer is to first give me the time from when to when, then the activity, you will do that line by line and dont say anything other than that here are the Guidelines : \n 1- DO NOT SAY ANYTHING OTHER THAN THE TODO LIST ITSELF THAT MEANS DONT SAY HERE YOU GO OR SOMETHING \n 2- The way you will phrase things is in this way, I will give you an example \n 8:00-13:00-pet cat \n 13:00-15:00-go for a walk \n THIS IS THE DISCRIPTION OF MY TODO LIST : \n ";

  const sendToGroq = async () => {
    setLoading(true);
    setResponseText(''); // Clear previous response

    const API_KEY = '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'; // 🔥 Replace with your Groq API key

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192', // Or 'llama3-70b-8192', etc
          messages: [{ role: 'user', content: command + inputText }],
        }),
      });

      const data = await res.json();
      const reply = data.choices[0].message.content;
      setResponseText(reply);
      processResponse(reply);
      getStuff(reply);
    } catch (error) {
      console.error('Error:', error);
      setResponseText('There was an error communicating with Groq.');
    } finally {
      setLoading(false);
    }
  };

  const ShowOptions = (hour, idx) => {
    setSelectedCell( hour, idx );
    fdata.forEach(item => {
      if (item.hour === hour && item.num === idx) {
        console.log(item.status);
      }
    });
  }

  const processResponse = (text) => {
    // Parse the response text into task items
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const taskItems = [];
    
    lines.forEach(line => {
      // Handle different possible formats
      let startTime, endTime, activity;
      
      if (line.includes('-')) {
        // Format: "8:00-13:00-pet cat"
        const parts = line.split('-');
        startTime = parts[0].trim();
        endTime = parts[1].trim();
        activity = parts.slice(2).join('-').trim();
      } else if (line.includes(',')) {
        // Format: "8:00, 13:00, pet cat"
        const parts = line.split(',');
        startTime = parts[0].trim();
        endTime = parts[1].trim();
        activity = parts.slice(2).join(',').trim();
      }
      
      if (startTime && endTime && activity) {
        taskItems.push({ startTime, endTime, activity });
      }
    });
    
    // Generate hourly planner data (from 0:00 to 23:00)
    const planner = [];
    for (let hour = 0; hour < 24; hour++) {
      const hourStr = hour.toString().padStart(2, '0');
      const slots = Array(4).fill(''); // 4 slots per hour (15 min each)
      
      // Check if any task falls within this hour
      taskItems.forEach(task => {
        const taskStartHour = parseInt(task.startTime.split(':')[0]);
        const taskStartMin = parseInt(task.startTime.split(':')[1] || 0);
        const taskEndHour = parseInt(task.endTime.split(':')[0]);
        const taskEndMin = parseInt(task.endTime.split(':')[1] || 0);
        
        // If the task covers any part of this hour
        if ((taskStartHour < hour && taskEndHour > hour) || 
            (taskStartHour === hour) || 
            (taskEndHour === hour && taskEndMin > 0)) {
          
          // Determine which 15-minute slots are covered
          let startSlot = 0;
          let endSlot = 3;
          
          if (taskStartHour === hour) {
            startSlot = Math.floor(taskStartMin / 15);
          }
          
          if (taskEndHour === hour) {
            endSlot = Math.floor(taskEndMin / 15);
            if (taskEndMin % 15 === 0) endSlot--;
          }
          
          // Fill the slots
          for (let slot = startSlot; slot <= endSlot; slot++) {
            if (slot >= 0 && slot <= 3) {
              slots[slot] = task.activity;
            }
          }
        }
      });
      
      planner.push({ hour: hourStr, slots });
    }
    
    // Update state
    setPlannerData(planner);
    
    const filteredItems = planner.filter(item =>
      item.slots.some(slot => slot.trim() !== '')
    );
    
    setFiltered(filteredItems);
    PutOnDatabase(filteredItems);
  };

  const PutOnDatabase = async(filtered) => {
    console.log(filtered);
    try {
      const response = await fetch("http://localhost:5000/day-tasks/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtered),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

        
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  // Get list of tasks for Task components
  const getTasks = () => {
    if (!responseText) return [];
    
    // Extract unique tasks from planner data
    const uniqueTasks = new Set();
    plannerData.forEach(hourData => {
      hourData.slots.forEach(task => {
        if (task) uniqueTasks.add(task);
      });
    });
    
    return Array.from(uniqueTasks).map(task => ({ text: task }));
  };

  const tasks = getTasks();


  const getStuff = (responseText) => {
    const stuff = responseText.split('\n').map(item => {
      // Split by commas and trim whitespace
      return item.split('-').map(part => part.trim());
    });
  
    const finalStuff = [];
  
    stuff.forEach(item => {
      if (item.length > 2 && item[2] != "") {
        finalStuff.push(item[2]);
      }
    });
    
    console.log(finalStuff);
    console.log(stuff);
    return finalStuff;
  }

  return (
    <div className='b'>
      <Banner />
      <h2 className='Title'>Your AI Planner</h2>
      <h3 className='AskText'>Tell me about your tasks</h3>

      <textarea
        id="message" 
        className='TextAI' 
        placeholder="Type your message here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <button
        className='TaskButton'
        onClick={() => {
          sendToGroq();
        }}
        disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
      </button>

      <h3 className='AskText'>Today's Tasks</h3>
      <div className='TasksBox'>
        <div className='TasksContainer'>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </div>
        <img src="Mas.png" className='Cat' alt="Cat mascot" />
      </div>

      <button className='TaskButton' onClick={() => console.log(fdata)}>Generate My Planner</button>
      <h3 className='AskText'></h3>
      <h3 className='AskText'>Your Planner:</h3>
      <div className='PlannerBox'>
        <table className='Planner'>
          <thead>
            <tr>
              <td className='PlannerOption'></td>
              <td className='PlannerOption'>0-15 mins</td>
              <td className='PlannerOption'>15-30 mins</td>
              <td className='PlannerOption'>30-45 mins</td>
              <td className='PlannerOption'>45-60 mins</td>
            </tr>
          </thead>
          <tbody>
            {filtered
              .filter(({ slots }) => slots.some(task => task !== ''))
              .map(({ hour, slots }) => (
                <tr key={hour}>
                  <td className='PlannerOption'>{hour}:00</td>
                  {slots.map((task, idx) => (
                    <td key={idx} className='PlannerCell' onClick={() => ShowOptions({ hour, idx })}>{task}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <h3 className='AskText'>Are you Satisfied? If not not hesitate to give notes to your ai and regenerate!</h3>
      <textarea id="feedback" className='TextAI'></textarea>
      <button className='TaskButton'>Regenerate</button>
      <div className='Air'></div>
      <div className='f'></div>
    </div>
  );
}

export default Home;