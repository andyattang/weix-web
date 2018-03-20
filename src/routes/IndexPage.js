import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function IndexPage() {
  return (
    <MainLayout></MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
