import React, { useState, createContext, useContext } from 'react';

// Create the Game Context
const GameContext = createContext();

// Custom hook to use the Game Context
export const useGame = () => useContext(GameContext);

// GameProvider component that wraps the app
export const GameProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [winner, setWinner] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const questions = [
    { question: "What is the capital of india?", correctAnswer: "delhi" },
    { question: "What is 2 + 2?", correctAnswer: "4" },
    { question: "prime minister of india'?", correctAnswer: "narendra modi" },
    { question: "who is present gooogle ceo?", correctAnswer: "sundar pichai" },
    { question: "india's richest person?", correctAnswer: "mukesh ambani" },
    { question: "Congrats you've passed the test!!"}
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Function to move to the next question
  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setWinner('Game Over! All questions answered correctly!');
    }
    setErrorMessage('');  // Reset error message on the next question
  };

  // Function to submit answer
  const submitAnswer = (name, answer) => {
    if (answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setWinner(`${name} answered correctly!`);
      moveToNextQuestion();  // Move to the next question
    } else {
      setErrorMessage('Incorrect answer. Try again!');  // Show error for wrong answer
    }
  };

  return (
    <GameContext.Provider value={{ currentQuestion, winner, errorMessage, submitAnswer }}>
      {children}
    </GameContext.Provider>
  );
};

