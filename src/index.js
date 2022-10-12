import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MainBody />
  </React.StrictMode>
);
