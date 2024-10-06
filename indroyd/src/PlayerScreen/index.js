import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import './index.css'; 

const PlayerScreen = () => {
  const { currentQuestion, submitAnswer, errorMessage, winner } = useGame();
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const joinGame = () => {
    setJoined(true);
  };

  const submit = () => {
    submitAnswer(name, answer);
    setFeedback(`You answered: ${answer}`);
  };

  return (
    <div className="player-screen">
      {!joined ? (
        <div className="join-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={joinGame}>Join Game</button>
        </div>
      ) : (
        <div className="answer-form">
          <h1>{currentQuestion.question}</h1>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button onClick={submit}>Submit Answer</button>
          {feedback && <p>{feedback}</p>}
          {<p>{winner}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;


