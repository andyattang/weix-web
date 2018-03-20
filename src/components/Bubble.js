import React from 'react';
import styles from './Bubble.css';
const LeftBubble = (msg) => {
  return (
  <div className={styles.bubbleItem}>
      <span className={styles.bubble styles.leftBubble}>
          {msg}
          <span className={styles.bottomLevel}></span>
          <span className={topLevel}></span>
      </span>
  </div>
  );
};

const RightBubble = (msg) => {
  return (
  <div className={styles.bubbleItem}>
      <span className={styles.bubble styles.leftBubble}>
          {msg}
          <span className={styles.bottomLevel}></span>
          <span className={styles.topLevel}></span>
      </span>
  </div>
  );
};

LeftBubble.propTypes = {
};

RightBubble.propTypes = {
};

export default LeftBubble;
export default RightBubble;
