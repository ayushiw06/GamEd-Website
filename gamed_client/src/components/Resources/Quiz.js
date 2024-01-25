

import React, { useEffect, useState,Component } from "react";
import './Quiz.css';
import { Link } from 'react-router-dom';
import axios from '../../axios'; // Import Axios
import SpotifyModal from "./SpotifyModal";
class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      score: 0,
      backgroundColor: 'black',
      showResult: false,
      questions: [
        {
          question: 'What is the SI unit of force?',
          options: ['Newton', 'Kilogram'],
          answer: 'Newton',
        },
        {
          question: 'Which scientist is known for the theory of relativity?',
          options: ['Isaac Newton', 'Albert Einstein'],
          answer: 'Albert Einstein',
        },
        {
          question: 'What is the law of conservation of energy?',
          options: ['Energy can be created or destroyed', 'Energy cannot be created or destroyed'],
          answer: 'Energy cannot be created or destroyed',
        },
        {
          question: 'What is the speed of light in a vacuum?',
          options: ['100 m/s', '299,792,458 m/s'],
          answer: '299,792,458 m/s',
        },
        {
          question: 'What is the formula for the force of gravity?',
          options: ['F = G * (m1 * m2) / r^2', 'F = m * a'],
          answer: 'F = G * (m1 * m2) / r^2',
        },
      ],
    };
    
  }
  
  

  checkAnswer =  (userAnswer) => {
    const { questionIndex, score, questions } = this.state;
    const correctAnswer = questions[questionIndex].answer;
    

    if (userAnswer === correctAnswer) {
      this.setState({ score: score + 1, backgroundColor: '#D4FF59' }); // Green

      //hamara
       axios.post('/api/score',{username:'rishabh',newScore:score+1})
          .then(response=>{})
          .catch(error=>{});



    } else {
      this.setState({ backgroundColor: '#FF007F' }); // Red
    }

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        this.setState({ questionIndex: questionIndex + 1, backgroundColor: 'black' });
      } else {
        this.setState({ showResult: true });
      }
    }, 1000);
  };

  resetQuiz = () => {
    this.setState({
      questionIndex: 0,
      score: 0,
      backgroundColor: 'black',
      showResult: false,
    });
  };

  render() {
    const { questionIndex, score, questions, backgroundColor, showResult } = this.state;
    const currentQuestion = questions[questionIndex];
    const options = currentQuestion.options.map((option, index) => (
      <button key={index} onClick={() => this.checkAnswer(option)}>
        {option}
      </button>
    ));
    
    return (
      <div className="Quiz1" style={{ backgroundColor }}>
        {showResult ? (
          <Result score={score} resetQuiz={this.resetQuiz} />
        ) : (
          <div>
            <h1>Physics Quiz</h1>
            <p>Score: {score}</p>
            <Question question={currentQuestion.question} />
            {options}
          </div>
        )}
      </div>
    );
  }
}

const Question = ({ question }) => <div>{question}</div>;

const Result = ({ score, resetQuiz }) => (
  
  <div>
    <h1>Quiz Completed!</h1>
    <p>Final Score: {score} out of 5</p>
    <Link to="/topic/resources">
    <button >Go Back to Resources</button></Link>
    <Link to="/leaderboard">
    <button >Leaderboard</button></Link>
   
    
  </div>
);

export default Quiz;