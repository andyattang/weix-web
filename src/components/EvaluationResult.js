import React from 'react';
import $ from 'jquery';
import { } from 'antd-mobile';
import styles from './EvaluationResult.css';


const scrollToBottom = () => {
  let box = $('.am-tabs-pane-wrap-active');
  box.animate({ scrollTop: box.get(0).scrollHeight }, 1000);
  $('#maskLayer').height($('#answeredDiv').height() + 10);
};

const EvaluationResult = () => {
  return (
    <div id="evalBox" className={styles.main}>
      
       
    </div>
  );
};

EvaluationResult.propTypes = {};

export default EvaluationResult;
