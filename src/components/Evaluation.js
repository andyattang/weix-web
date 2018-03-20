import React from 'react';
import $ from 'jquery';
import { Button, Progress, TabBar } from 'antd-mobile';
import {LeftBubble, RightBubble} from './Bubble';
import styles from './Evaluation.css';

const questions = [
  "你小时候特别爱问为什么，上课爱走神，常常沉浸在幻想世界中逃避现实。",
  "你从小学习认真专心而有自制力，让家里较为省心，很少有反叛等不良现象。"
];

const scrollToBottom = () => {
  let box = $('.am-tabs-pane-wrap-active');
  box.animate({scrollTop: box.get(0).scrollHeight}, 1000);
  $('#maskLayer').height($('#answeredDiv').height()+10);
};

const StartEvaluation = () => {
  return (
    <div id="evalBox" className={styles.main}>
      <div className={styles.main} onClick={(e) => {
         e.preventDefault();
         scrollToBottom();
       }}>
        <Progress percent={30} position="fixed"/>
        <div className={styles.eval}>
          <div id="maskLayer" className={styles.maskLayer}></div>
          <div id="answeredDiv" className={styles.answeredBubbleDiv}>
            <LeftBubble message={questions[0]}/>
            <RightBubble message="有差异"/>
            <LeftBubble message={questions[1]}/>
            <RightBubble message="完全一致"/>
            <LeftBubble message={questions[0]}/>
            <RightBubble message="有差异"/>
            <LeftBubble message={questions[1]}/>
            <RightBubble message="完全一致"/>
            <LeftBubble message={questions[0]}/>
            <RightBubble message="有差异"/>
            <LeftBubble message={questions[1]}/>
            <RightBubble message="完全一致"/>
            <LeftBubble message={questions[0]}/>
            <RightBubble message="有差异"/>
          </div>
          <div className={styles.notAnsweredBubbleDiv}>
            <LeftBubble message={questions[1]}/>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.leftButton}><a onClick={(e) => {
         e.preventDefault();
         scrollToBottom();
       }} className={styles.button}>有差异</a></div>
        <div className={styles.rightButton}><a onClick={(e) => {
         e.preventDefault();
         scrollToBottom();
       }} className={styles.button}>完全一致</a></div>
      </div>
    </div>
  );
};

StartEvaluation.propTypes = {};

export default StartEvaluation;
