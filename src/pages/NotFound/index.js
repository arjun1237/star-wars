import React from 'react';
import styles from './index.module.css';

function NotFound() {
  return (
    <div className={styles["not-found"] + " color-yellow"}>
      <h2>This is not the page you are looking for</h2>
    </div>
  );
}

export default NotFound;
