import React from 'react'

import './SpotifyModal.css';

const SpotifyModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>BREAK ALERT!</h2>
          <p>Since you have been studying for over an hour, you deserve a break. we've got you a quick 15min break where you can relax and hear some songs</p>
          <a href="https://open.spotify.com/playlist/1jThF3f19LezsXO5dUfeIj" target="_blank" rel="noopener noreferrer">
            <button>Open Spotify!</button>
          </a>
          <button onClick={closeModal}>Nah, M fine</button>
        </div>
      </div>
    );
  };
  
  export default SpotifyModal;