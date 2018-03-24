import React, { Component } from 'react';
import { connect } from 'dva';
import $ from 'jquery';
import { Icon, List } from 'antd-mobile';
import styles from './BigBox.css';

const Item = List.Item;
const Brief = List.Item.Brief;

class BigBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unfold: false,
      height: props.height?props.height:'50px',
    };
  }
  render = () => {
    return (
      <div className={styles.main}>
        <div className={styles.title}></div>
        <div>
          <List
            renderFooter={() => { }}>
            <Item multipleLine={true} wrap={true} >
            <div className={styles.title}>{this.props.title}</div>
              <div className={styles.content}
                style={{ height: this.state.unfold ? 'auto' : this.state.height }}>
                {this.props.children}
              </div>
              <div onClick={(e) => {
                e.preventDefault();
                this.setState({
                  unfold: !this.state.unfold,
                });
              }}
                style={{ textAlign: "center" }}><Icon type={this.state.unfold?'up':'down'} /></div>
            </Item>
          </List>
        </div>
      </div>
    );
  };
}
export default connect()(BigBox);
