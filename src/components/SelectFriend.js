import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, WhiteSpace, SearchBar, List, Modal } from 'antd-mobile';
import styles from './SelectFriend.css';

const Item = List.Item;
const Brief = Item.Brief;

class SelectFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
    };
  }

  showModal = key => (e) => {
    //e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >我的好友</NavBar>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="消息"
          footer={[{ text: 'OK', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div>
            你还没有通过评测，完成后才可添加好友哟~
          </div>
        </Modal>
        <WhiteSpace />
        <SearchBar placeholder="搜索好友" maxLength={8} onSubmit={this.showModal("modal1")} />
        <WhiteSpace />
        <List renderHeader={() => 'B'} className="my-list">
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={this.showModal("modal1")}
          >
            冰山雪莲
        </Item>
        </List>
      </div>
    );
  }
};

SelectFriend.propTypes = {
};

function mapStateToProps(state) {
  return state.MainLayout;
}

export default connect()(SelectFriend);
