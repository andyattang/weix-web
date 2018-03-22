import React from 'react';
import $ from 'jquery';
import { Icon, List } from 'antd-mobile';
import styles from './BigBox.css';

const Item = List.Item;
const Brief = List.Item.Brief;

const unfold = () => {

};

const BigBox = () => {
  return (
    <div id="bigBox" className={styles.main}>

      <div className={styles.title}>标题</div>
      <div id="body" >
       
        <List 
          renderFooter={() => { }}
          className="my-list">
          <Item multipleLine={true} wrap={true} >
            Title
            <div className={styles.content}>
            双宽带+无线WiFi 网速升3倍 WiFi手机设置无线上网的方法
              价格:1499 2999 3999 5999 6999
                  魅族 note5 小米 华为 OPPO
                  超长待机 防水 1080高清屏 双宽带+无线WiFi 网速升3倍 WiFi手机设置无线上网的方法
                  价格:1499 2999 3999 5999 6999
                      魅族 note5 小米 华为 OPPO
                      超长待机 防水 1080高清屏双宽带+无线WiFi 网速升3倍 WiFi手机设置无线上网的方法
                价格:1499 2999 3999 5999 6999
              魅族 note5 小米 华为 OPPO<br/>
              超长待机 防水 1080高清屏双宽带+无线WiFi 网速升3倍 WiFi手机设置无线上网的方法
              价格:1499 2999 3999 5999 6999
                  魅族 note5 小米 华为 OPPO
                  超长待机 防水 1080高清屏双宽带+无线WiFi 网速升3倍 WiFi手机设置无线上网的方法
                  价格:1499 2999 3999 5999 6999
                      魅族 note5 小米 华为 OPPO
                      超长待机 防水 1080高清屏</div>
            <div style={{ textAlign: "center" }}><Icon type="down" /></div>

          </Item>
        </List>
      </div>
      <div className={styles.bottom} onClick={() => {
        $('#body').animate({ height: 50 }, 1000);
      }}>
        <Icon type="down"></Icon>
      </div>
    </div>
  );
};

BigBox.propTypes = {};

export default BigBox;
