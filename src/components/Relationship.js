import React from 'react';
import $ from 'jquery';
import { Button, Progress, TabBar } from 'antd-mobile';
import { LeftBubble, RightBubble } from './Bubble';
import CircleIcon from './CircleIcon';
import styles from './Relationship.css';

const selectFriend = () => {
    console.log('-- select friend');
};

const Relationship = () => {
    return (
        <div id="relationBox" className={styles.main}>
            <div style={{
                fontSize: '20px', color: '#FFFFFF'
                , marginTop: '40px'
            }}>想知道和身边的人关系如何？<br />
                点击头像添加测试</div>
            <div class={styles.center}>
                <div class={styles.me}>
                    <CircleIcon radius="60px" src="/static/weixin.png"></CircleIcon>
                </div>
                <div class={styles.friend}>
                    <a href="/#/friend"><CircleIcon radius="60px" src="/static/person-add.png"></CircleIcon></a>
                </div>
            </div>
        </div>
    );
};

Relationship.propTypes = {};

export default Relationship;
