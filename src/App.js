import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/home" className="iconWrapper" >Home</Link>
          <Link to="/about" className="iconWrapper" >About Us</Link>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
        </Routes>
        <footer>
          <p>
            Moodify
          </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
