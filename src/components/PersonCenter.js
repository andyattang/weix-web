import React, { Component } from 'react';
import { connect } from 'dva';
import { List, WhiteSpace, NavBar, Badge } from 'antd-mobile';
import BigBox from './BigBox';
import styles from './PersonCenter.css';
import { CircleIcon } from './CircleIcon';

const Item = List.Item;
const Brief = Item.Brief;

class PersonCenter extends Component {

  render() {
    return (
      <div className={styles.main}>
        <NavBar
          mode="light"
        >个人中心</NavBar>
        <WhiteSpace />
        <List>
          <Item>
            <div style={{ width: '100%' }}>
              <div style={{ width: '60px', height: '60px', float: 'left' }}>
                <CircleIcon borderColor="#FFFFFF" radius="50px" src="/static/person.png"></CircleIcon>
              </div>
              <div style={{ width: '60px', height: '60px', float: 'left', paddingTop: '18px' }}>
                <span>信号</span>
                <Badge text="迷" style={{ marginLeft: 5, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
                <Badge text="升级会员"
                  style={{
                    marginLeft: 12,
                    padding: '2 5px 2 5px',
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    color: '#f19736',
                    border: '2px solid #f19736',
                    height: '24px'
                  }} />
              </div>
            </div>
            <div className={styles.clearfix}></div>
            <WhiteSpace />
            <WhiteSpace />
            <div style={{ width: '100%' }}>
              <div style={{ width: '33%', textAlign: 'center', float: 'left' }}>
                文章<br />0
              </div>
              <div style={{ width: '1px', border: '1px solid #f5f5f9', float: 'left', height: '50px' }}></div>
              <div style={{ width: '33%', textAlign: 'center', float: 'left' }}>
                关注<br />0
              </div>
              <div style={{ width: '1px', border: '1px solid #f5f5f9', float: 'left', height: '50px' }}></div>
              <div style={{ width: '32%', textAlign: 'center', float: 'left' }}>
                粉丝<br />0
              </div>
            </div>
            <div className={styles.clearfix}></div>
          </Item>
        </List>
        <List>
        <Item
            arrow="horizontal"
            thumb="/static/barrage.png"
            multipleLine
            onClick={()=>{}}
          >评测结果
          </Item>
          <Item
            arrow="horizontal"
            thumb="/static/publish.png"
            multipleLine
            onClick={()=>{}}
          >我的订单
          </Item>
        </List>
        <List>
        <Item
            arrow="horizontal"
            thumb="/static/group.png"
            multipleLine
            onClick={()=>{}}
          >我的好友
          </Item>
        </List>
        <List>
        <Item
            arrow="horizontal"
            thumb="/static/setup.png"
            multipleLine
            onClick={()=>{}}
          >设置
          </Item>
        </List>
      </div>
    );
  }
}

export default connect()(PersonCenter);
