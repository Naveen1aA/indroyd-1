import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; 
import { useGame } from '../context/GameContext';
import './index.css'; 

const GameScreen = () => {
  const { currentQuestion, winner } = useGame();
  const gameUrl = window.location.href + 'join'; 

  return (
    <div className="game-screen">
      <h1 className="question">{currentQuestion.question}</h1>
      {winner && <h2 className="winner">{winner}</h2>}
      
      <div className="qr-code">
        <QRCodeSVG value={gameUrl} />
      </div>
      
      <p>Scan this QR code to join the game!</p>
    </div>
  );
};

export default GameScreen;


