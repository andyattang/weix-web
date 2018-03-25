import React, { Component } from 'react';
import { connect } from 'dva';
import { TabBar, NavBar } from 'antd-mobile';
import StartEvaluation from './StartEvaluation';
import Evaluation from './Evaluation';
import SelectFriend from './SelectFriend';
import styles from './MainLayout.css';
import EvaluationResult from './EvaluationResult';
import Relationship from './Relationship';
import PersonCenter from './PersonCenter';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.target ? props.target : 'evlTab',
      hidden: false,
      location: props.location ? props.location : 'idx',
    };
  }

  renderTab(tabName) {
    if(tabName !== this.state.selectedTab){
      return (<div></div>);
    }
    switch (this.state.selectedTab) {
      case 'evlTab':
        switch (this.state.location) {
          case 'idx':
            return (<StartEvaluation></StartEvaluation>);
          case 'eval':
            return (<Evaluation></Evaluation>);
          case 'result':
            return (<EvaluationResult></EvaluationResult>);
          default:
        }
      case 'friendTab':
      switch (this.state.location) {
        case 'idx':
          return (<Relationship></Relationship>);
        case 'select':
          return (<SelectFriend></SelectFriend>);
        default:
      }
      case 'myTab':
      switch (this.state.location) {
        case 'idx':
          return (<PersonCenter />);
        default:
      }
      default:
        return (<div></div>);
    }
  }
 

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="零度测试"
            key="evaluation"
            selected={this.state.selectedTab === 'evlTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'evlTab',
                location: 'idx',
              });
            }}
            data-seed="logId1"
          >

            {this.renderTab('evlTab')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="关系测试"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'friendTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'friendTab',
                location: 'idx',
              });
            }}
          >
            {this.renderTab('friendTab')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="个人中心"
            key="my"
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
                location: 'idx'
              });
            }}
          >
            {this.renderTab('myTab')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

MainLayout.propTypes = {
};


function mapStateToProps(state) {
  return state.MainLayout;
}

export default connect(mapStateToProps)(MainLayout);
