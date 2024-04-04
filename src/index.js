import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './global.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Obiettivi from './assets/pages/Obiettivi';
import Quiz from './assets/pages/Quiz';
import obiettiviData from './assets/data/obiettivi.json';

const App = () => {
  // Check if the current route is the quiz page
  const isQuizPage = window.location.pathname === '/quiz';

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          {Object.keys(obiettiviData).map((key) => (
            <Route key={key} path={`/${key}`} element={<Obiettivi obiettivoKey={key} />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {isQuizPage ? null : <Footer />}
      </BrowserRouter>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
