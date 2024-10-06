import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameScreen from './GameScreen';
import PlayerScreen from './PlayerScreen';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<GameScreen />} />
            <Route path="/join" element={<PlayerScreen />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;

