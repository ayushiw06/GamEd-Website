
import '../styles/App.css';
import React, { Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './about';

import Leaderboard from './leaderboard';
import Challenge from './challengeNow/challengeNow'
import Login from './loginSignin/login';
import Signin from './loginSignin/signup'
import ForgotPass from './loginSignin/forgotpass';
// import LiveSession from './frame'

import Alumni from './alumni2';
import TopicSelector from "./Resources/topicSelector";
import TopicResources from "./Resources/TopicResources";
import Quiz from "./Resources/Quiz"
import Book from './Resources/PhysicsSummaryComponent';
import Home from './homepage';
import  Profile from './Profile'
import Focal from './focalpoint';

function App() {
  return (
    
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/leaderboard" element={<Leaderboard />} /> 
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        {/* <Route path="/livesession" element={<LiveSession />} /> */}
        <Route path="/topic" element={<TopicSelector />} />
        <Route path="/topic/resources" element={<TopicResources/>} />
        <Route path="/topic/quiz" element={<Quiz/>} />
        <Route path="/topic/book" element={<Book/>} />
       
        <Route path="/legends" element={<Alumni/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/focal" element={<Focal/>} />
       
       
        {/* <Route path="/about" element={<About />} /> Remove the angle brackets around component */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
