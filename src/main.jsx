import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GameProvider from './components/contexts/GameProvider';
import { Provider } from 'react-redux';
import {store} from "./components/store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GameProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>
);
