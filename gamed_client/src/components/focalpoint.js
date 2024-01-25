// Install React using npx create-react-app pomodoro-timer
// Then, replace the contents of src/App.js with this code.

import React, { useState, useEffect } from 'react';
import './focal.css';
import BackButton from './back';
import Footer from './footer';
function Focal() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timer, setTimer] = useState(workTime * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Handle the end of a timer (work or break)
      // You can add sound, notifications, or other actions here.
    }

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(workTime * 60);
  };

  return (
    <div> <BackButton/>
    <div className="focal" style={{ background: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        <div className="time">
          {Math.floor(timer / 60).toString().padStart(2, '0')}:{(timer % 60).toString().padStart(2, '0')}
        </div>
        <div className="controls">
          <button onClick={startTimer} disabled={isRunning}>Start</button>
          <button onClick={stopTimer} disabled={!isRunning}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
      <div className="settings">
        <label>Work Time (minutes):</label>
        <input
          type="number"
          value={workTime}
          onChange={(e) => setWorkTime(e.target.value)}
          style={{ color: 'black' }} 
        />
        <label>Break Time (minutes):</label>
        <input
          type="number"
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
          style={{ color: 'black' }} 
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Focal;