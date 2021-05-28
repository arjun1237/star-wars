import React from 'react';
import logo from './star-wars-logo.png';
import './index.css';

function HomePage() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <input className="search-input" placeholder="Search by name" />
    </div>
  );
}

export default HomePage;
