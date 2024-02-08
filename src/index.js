import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css'
// Index.js renders all the components and here we'll implement the routing of the website with react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> is a wrapper component in React that helps you catch common mistakes and potential problems in your application during the development phase.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

