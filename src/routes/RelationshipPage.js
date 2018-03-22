import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function RelationshipPage() {
  return (
    <MainLayout location="friend"></MainLayout>
  );
}

RelationshipPage.propTypes = {
};

export default connect()(RelationshipPage);
