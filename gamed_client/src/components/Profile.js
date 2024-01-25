import React, { useState } from 'react';
import './Profile3.css'; 
import './Profile2.css';  
import axios from '../axios';
import { Link } from 'react-router-dom';

//hamara


const profiles = [
  {
    name: 'Rishabh',
    totalPoints: 1000,
    challengesWon: 0,
    quizzesTaken: 0,
    coursesCompleted: 1,
    profileLink: 'rishabh_mit',
  },
  {
    name: 'Anant',
    totalPoints: 72384,
    challengesWon: 0,
    quizzesTaken: 0,
    coursesCompleted: 1,
    profileLink: 'anant_mit',
  },
  {
    name: 'Ayushi',
    totalPoints: 7434,
    challengesWon: 0,
    quizzesTaken: 0,
    coursesCompleted: 1,
    profileLink: 'ayushi_mit',
  },
  {
    name: 'Shravani',
    totalPoints: 8738,
    challengesWon: 0,
    quizzesTaken: 0,
    coursesCompleted: 1,
    profileLink: 'shravani_mit',
  },
  {
    name: 'Navya',
    totalPoints: 7783,
    challengesWon: 0,
    quizzesTaken: 0,
    coursesCompleted: 1,
    profileLink: 'navya_mit',
  },
];

function Profiles() {
  const [searchName, setSearchName] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSearch = () => {
    const foundProfile = profiles.find(profile => profile.name.toLowerCase() === searchName.toLowerCase());
    if (foundProfile) {
      setSelectedProfile(foundProfile);
    } else {
      setSelectedProfile(null);
    }
  };

  const handleClearProfile = () => {
    setSelectedProfile(null);
    window.location.href='/';
  };

  return (
    
    <div className="profapp">
      <nav className="navbar">
        <button onClick={handleClearProfile}>Go Back</button>
      </nav>
      {selectedProfile ? (
        <div className="Profile">
          <h2>{selectedProfile.name}'s Profile</h2>
          <div>Total Points: {selectedProfile.totalPoints}</div>
          <div>Challenges Won: {selectedProfile.challengesWon}</div>
          <div>Quizzes Taken: {selectedProfile.quizzesTaken}</div>
          <div>Courses Completed: {selectedProfile.coursesCompleted}</div>
          <a href={selectedProfile.profileLink}>Profile Link</a>
        </div>
      ) : (
        <div className="Search">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </div>
  );
}

export default Profiles;
