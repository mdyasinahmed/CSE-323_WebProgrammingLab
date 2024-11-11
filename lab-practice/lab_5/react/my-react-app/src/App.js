import React from 'react';
import logo from './logo.svg'; // replace with your profile image if available
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img src={logo} className="profile-image" alt="profile" />
          <h2 className="profile-headline">John Doe</h2>
          <p className="profile-info">Web Developer | Designer | Tech Enthusiast</p>
          <div className="profile-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
