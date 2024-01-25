import React from 'react';
import Header from "./Header.js";
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import logo from './logo.png'; // Adjust the path accordingly
import BackButton from '../back.js';

function ChallengeNow() {
  const logo = require('./logo.png');
  return (

    <div className="App">
      <BackButton/>
      <img src={logo}></img>
      <h1>Challenge the LeaderBoard!</h1>
      {/* <h5>header not working</h5> */}
      {/* <Header /> */}
      <TinderCards/>
     <SwipeButtons/>
     
    </div>
  );
}

export default ChallengeNow;
