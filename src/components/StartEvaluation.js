import React from 'react';
import { Button } from 'antd-mobile';
import styles from './StartEvaluation.css';

const StartEvaluation = () => {
  return (
   <div className={styles.welcome}>
     <a href="/#/evaluate">智能开启</a>
   </div>
  );
};

StartEvaluation.propTypes = {
};

export default StartEvaluation;
