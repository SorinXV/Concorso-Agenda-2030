import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './global.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Obiettivi from './assets/pages/Obiettivi';
import Quiz from './assets/pages/Quiz';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obiettivi" element={<Obiettivi />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
