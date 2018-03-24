import React, { Component } from 'react';
import { connect } from 'dva';
import { List, WhiteSpace } from 'antd-mobile';
import BigBox from './BigBox';
import styles from './EvaluationResult.css';
import { CircleIcon } from './CircleIcon';
import ReactEcharts from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const Item = List.Item;
const Brief = List.Item.Brief;
class EvaluationResult extends Component {
  getOption() {
    return {
      /*title: {
        text: '基础雷达图'
      },*/
      tooltip: {},
      /*legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      },*/
      radar: {
        shape: 'circle',
        /*name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        }, */
        indicator: [
          { name: '学者', max: 100 },
          { name: '行者', max: 100 },
          { name: '德者', max: 100 },
          { name: '赢者', max: 100 },
          { name: '思者', max: 100 },
        ]
      },
      series: [{
        name: '',
        type: 'radar',
        areaStyle: {normal: {}},
        data: [
          {
            value: [10, 20, 30, 40, 50],
            /*name: '预算分配（Allocated Budget）'*/
          }
        ]
      }]
    };
  }
  render() {
    return (
      <div id="evalBox" className={styles.main}>
        <BigBox height="120px" title="信号，你是">
          <div style={{ width: '100%' }}>
            <div style={{ width: '80px', height: '120px', float: 'left', paddingTop: '10px' }}>
              <CircleIcon borderColor="#FFFFFF" radius="70px" src="/static/person.png"></CircleIcon>
            </div>
            <div>
              <div style={{ fontSize: '25px' }}>迷者</div>
              <div>我们总会遇到一些事情身不由己而迷失自己，
          有时会困惑无助、也有时逞强透支。</div>
            </div>
          </div>
          <hr align="center" color="#f5f5f9" size="1"  />
          <div style={{width: '100%', textAlign: "-webkit-center"}}>
            <ReactEcharts
              style={{width: '230px', height: '210px'}}
              echarts={echarts}
              option={this.getOption()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={()=>{}}
              onEvents={{}}
              opts={{}} 
            />
          </div>
        </BigBox>
      </div>
    );
  }
}

export default connect()(EvaluationResult);
