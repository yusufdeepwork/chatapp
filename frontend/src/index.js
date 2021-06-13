import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatAppProvider from './context/MessagesContext';

ReactDOM.render(
  <React.StrictMode>
    <ChatAppProvider>
      <App />
    </ChatAppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
