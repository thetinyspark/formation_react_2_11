import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GameProvider from './components/contexts/GameProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GameProvider>
          <App />
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>
);
