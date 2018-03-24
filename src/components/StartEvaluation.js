import React from 'react';
import { Button } from 'antd-mobile';
import styles from './StartEvaluation.css';

const StartEvaluation = () => {
  return (
   <div className={styles.welcome}>
     <a href="/#/evaluate">进入测试</a>
     <div style={{marginTop: '50px', fontSize: '18px', color: '#FFFFFF'}}>
     ~越真实的回答，将得到越真实的结果~</div>
   </div>
  );
};

StartEvaluation.propTypes = {
};

export default StartEvaluation;
