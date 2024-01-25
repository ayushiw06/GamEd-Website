import React, { useState,useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from '../../axios';   

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    async function fetchdata(){
      const req= await axios.get('./api/tinder/cards');

      setPeople(req.data);
}
fetchdata();
  },[])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.username)}
            onCardLeftScreen={() => outOfFrame(person.username)}
          >
            <div
              style={{ backgroundImage: `url(${person.profileimgLink})` }}
              className="card"
            >
              <h2>{person.username}</h2>
              <button color="#ff007f">Total Points: {person.totalpointsEarned}</button>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;