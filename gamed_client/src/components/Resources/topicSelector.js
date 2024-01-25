// TopicSelector.js

import React from 'react';
import './topicSelector.css';

import { Link } from 'react-router-dom';
import BackButton from '../back';
import Footer from '../footer';

const TopicSelector = () => {

  return (
    <div> <BackButton/>
    <div className="topic-selector">
      <h1>Choose Topics</h1>
      <div className="topic-buttons">
      <Link to="/topic/resources">
        <button  className="topic-button">Maths</button>
      </Link>
      <Link to="/topic/resources">
        <button className="topic-button">Biology</button>
      </Link>
      <Link to="/topic/resources">
        <button className="topic-button">Physics</button>
      </Link>
      <Link to="/topic/resources">
        <button className="topic-button">Business</button>
      </Link>
        
        {/* Add more buttons for other topics as needed */}
      </div>
    </div>
    
    
    <Footer/>
    </div>

  );
};

export default TopicSelector;
