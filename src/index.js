import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './global.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Obiettivi from './assets/pages/Obiettivi';
import Quiz from './assets/pages/Quiz';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  // Component that helps you catch common mistakes and potential issues in your application during the development phase. 
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obiettivi" element={<Obiettivi />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* User gets redirected to home when goes on wrong url, maybe add a popUp*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);