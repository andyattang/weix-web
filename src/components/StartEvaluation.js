import React from 'react';
import { Button } from 'antd-mobile';
import styles from './StartEvaluation.css';

const StartEvaluation = () => {
  return (
   <div style={{ height: '100%', textAlign: 'center' ,
   background: '#40B0BB url(../assets/bubble2.gif) no-repeat center 0'}}>
     <Button>开始评测</Button>
   </div>
  );
};

StartEvaluation.propTypes = {
};

export default StartEvaluation;
