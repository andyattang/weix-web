import React, { Component } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import StartEvaluation from './StartEvaluation';
import styles from './MainLayout.css';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'evlTab',
      hidden: false
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
           onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
          >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
           onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
          >
          Click to switch fullscreen
        </a>
      </div>
    );
  }


  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
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
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="零度测试"
            key="evaluation"
            selected={this.state.selectedTab === 'evlTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'evlTab',
              });
            }}
            data-seed="logId1"
            >
            <StartEvaluation></StartEvaluation>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="关系测试"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'friendTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'friendTab',
              });
            }}
            >
            {this.renderContent('关系测试')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
              });
            }}
            >
            {this.renderContent('个人中心')}
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
