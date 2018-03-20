import React from 'react';
import styles from './Bubble.css';
export const LeftBubble = (props) => {
  return (
  <div className={styles.bubbleItem}>
      <div className={styles.icon} />
      <span className={styles.bubble + ' ' + styles.leftBubble}>
          {props.message?props.message:'...'}
          <span className={styles.bottomLevel}></span>
          <span className={styles.topLevel}></span>
      </span>
    <div className={styles.clearfix}></div>
  </div>
  );
};

export const RightBubble = (props) => {
  return (
  <div className={styles.bubbleItem}>
      <span className={styles.bubble + ' ' + styles.rightBubble}>
          {props.message?props.message:'...'}
          <span className={styles.bottomLevel}></span>
          <span className={styles.topLevel}></span>
      </span>
    <div className={styles.clearfix}></div>
  </div>
  );
};

LeftBubble.propTypes = {
};

RightBubble.propTypes = {
};

const Bubble = {
  "LeftBubble" : LeftBubble,
  "RightBubble" : RightBubble
}

export default Bubble;

