import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function SelectFriendPage() {
  return (
    <MainLayout target="friendTab" location="select"></MainLayout>
  );
}

SelectFriendPage.propTypes = {
};

export default connect()(SelectFriendPage);
