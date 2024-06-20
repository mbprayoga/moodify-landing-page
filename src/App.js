import React , { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    //const fileUrl = "";
    //window.open(fileUrl);
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/home" className="App-logo-link">
            <img src={moodify} alt="Moodify Logo" className="App-logo" />
          </Link>
          <button className="App-menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className={`App-nav ${isMenuOpen ? "open" : ""}`}>
            <Link to="/home" className="App-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="App-link" onClick={toggleMenu}>
              About Us
            </Link>
            <button className="App-white-button" onClick={handleDownload}>
              Try Moodify!
            </button>
            <button className="App-menu-close" onClick={toggleMenu}>
            &#10006;
          </button>
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
            <p className="App-footer-copyright">&copy; Moodify 2024.</p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
