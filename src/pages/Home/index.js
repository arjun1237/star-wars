import React from 'react';
import logo from './star-wars-logo.png';
import styles from './index.module.css';

function HomePage() {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <input className={styles["search-input"]} placeholder="Search by name" />
    </div>
  );
}

export default HomePage;
