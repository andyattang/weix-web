import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function RelationshipPage() {
  return (
    <MainLayout target="friendTab" location="idx"></MainLayout>
  );
}

RelationshipPage.propTypes = {
};

export default connect()(RelationshipPage);
