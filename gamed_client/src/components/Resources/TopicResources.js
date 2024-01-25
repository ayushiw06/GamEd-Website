// TopicResources.js
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube'; // Import the react-youtube component
import './TopicResources.css';
import SpotifyModal from "./SpotifyModal";
import BackButton from "../back";
import Footer from "../footer";
const TopicResources = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookImage = require('./book.jpg'); // Replace with your local image
  const videoId = 's8YgJ1LRi1s'; // Replace with the actual video ID


  // Options for the YouTube video player
  const opts = {
    height: '315',
    width: '560',
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div><BackButton/>
    <div className="topic-resources">
      <h1>Resources for your topic</h1>
      <div className="resource-container">
        <div className="book-image"><Link to="/topic/book">
          <img src={bookImage} alt="Book" /></Link>
        </div>
        
        <div className="video-container">
          <YouTube videoId={videoId} opts={opts} /> {/* Embed the YouTube video */}
        </div>
      </div>
      <div className="action-buttons">

    
      <Link to="/topic/quiz">
        <button className="quiz-button">Quiz</button></Link>
        <button onClick={openModal} className="mark-completed-button">Mark as Completed</button>
        <SpotifyModal isOpen={isModalOpen} closeModal={closeModal} />
      
        {/* <Link to="https://summarygenerator.com/">
        <button className="quiz-button">Generate Summary</button></Link> */}

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TopicResources;
