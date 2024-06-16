import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";

import KampusMerdeka from "./assets/KampusMerdeka.png";
import Bangkit from "./assets/Bangkit.png";
import moodify from "./assets/moodify.png";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/home" className="App-logo-link">
            <img src={moodify} alt="moodify Logo" className="App-logo" />
          </Link>
          <nav className="App-nav">
            <Link to="/home" className="App-link">
              Home
            </Link>
            <Link to="/about" className="App-link">
              About Us
            </Link>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <div className="App-footer-logos">
            <img
              src={KampusMerdeka}
              alt="Kampus Merdeka Logo"
              className="App-footer-logo"
            />
            <img src={Bangkit} alt="Bangkit Logo" className="App-footer-logo" />
          </div>
          <div>
            <p className="App-footer-text">
              Your daily companion for better mental well-being
            </p>
          </div>
          <div>
            <p className="App-footer-copyright">
              &copy; 2024 Moodify.
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
