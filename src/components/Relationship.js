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
            <div class={styles.me}>
                <CircleIcon src="/static/person.png"></CircleIcon>
            </div>
            <div class={styles.friend}>
                <CircleIcon src="/static/person-add.png"></CircleIcon>
            </div>
        </div>
    );
};

Relationship.propTypes = {};

export default Relationship;
